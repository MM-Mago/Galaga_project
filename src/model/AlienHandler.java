package model;

import java.util.ArrayList;
import java.util.LinkedList;

import model.entities.Alien;
import shared.Events;
import shared.GameState;
import shared.SharedConstants;


//------------------------------------------------------------------------------------------------
//THIS CLASS IS ONLY USED TO MANAGE THE CREATION OF NEW SETS OF ALIENS (FORMATIONS) WHEN NEEDED,
//AND GETTING A COPY OF THE NEW ALIENS FOR THE MODEL TO ADD
//------------------------------------------------------------------------------------------------

//EVERYTHING PACKAGE-PROTECTED OR PRIVATE
class AlienHandler {
    
    
    //--------------------------------
    //PRIVATE VARIABLES
    //--------------------------------

    private int numStage;
    private int numFormation;

    private ArrayList<Alien> presentStageAliens;
    private ArrayList<Alien> presentFormationAliens;
    private static final int ALIENS_PER_STAGE = AlienFormationsLibrary.DEFINED_ALIENS_PER_FORMATION_IN_FILE * AlienFormationsLibrary.DEFINED_FORMATIONS_PER_STAGE_IN_FILE;

    private int formationOffset;
    private boolean isFormationOffsetGrowing;
    private static final int MAX_FORMATION_OFFSET = 30;
    private static final int PIXELS_OFFSET_PER_SECOND = 15;

    private boolean areAliensDiving;
    private ArrayList<Alien> divingAliens;

    //--------------------------------
    //PUBLIC COSTRUCTOR
    //--------------------------------

    AlienHandler(){
        AlienFormationsLibrary.initFormations();
        presentFormationAliens = new ArrayList<Alien>();
        presentStageAliens = new ArrayList<Alien>();
        numStage = 1; //must be 1
        numFormation = 0;
        formationOffset = 0;
        isFormationOffsetGrowing = true;
        areAliensDiving = false;
        divingAliens = new ArrayList<Alien>();
    }

    
    //--------------------------------
    //PRIVATE METHODS
    //--------------------------------

    private void nextStage(){
        numStage++;
        numFormation = 0;
        presentStageAliens = new ArrayList<Alien>();
        presentFormationAliens = new ArrayList<Alien>();
        areAliensDiving = false;
        divingAliens.clear();
    }


    //--------------------------------
    //PACKAGE-PROTECTED METHODS
    //--------------------------------

    ArrayList<Alien> updateHandlerAndGetNewAliens( final int frameNumber, final int secondsInState, final GameState state, LinkedList<Events> eventsQueue  ){

        ArrayList<Alien> newAliens = new ArrayList<Alien>();

        //update offset
        //offset growing and not all frames


        if( isFormationOffsetGrowing && ( ( frameNumber % ( SharedConstants.FRAMES_PER_SECOND / PIXELS_OFFSET_PER_SECOND) ) == 0 ) ){
            formationOffset++;
            if( formationOffset >= MAX_FORMATION_OFFSET ) { isFormationOffsetGrowing = false; }
        }
        //offset shrinking and not all frames
        else if( ( !isFormationOffsetGrowing ) && ( ( frameNumber % ( SharedConstants.FRAMES_PER_SECOND / PIXELS_OFFSET_PER_SECOND) ) == 0 ) ){
            formationOffset--;
            if( formationOffset <= ( - MAX_FORMATION_OFFSET ) ) { isFormationOffsetGrowing = true; }
        }
        for( Alien a: presentStageAliens ){
            a.updateOffset( formationOffset );
        }


        //-----------------------------------------------
        //CHECK FOR ALL PATH COMPLETED TO START DIVING
        //-----------------------------------------------
        
        if( isStageFull() && areAllStageAlienPathsEmpty() ){ areAliensDiving = true; }
        if( areAliensDiving && state == GameState.PLAYING && ( ( frameNumber % ( SharedConstants.FRAMES_PER_SECOND / 4 ) ) == 0 ) ){ //do it 4 times per second

            int maxDivingAliens = 2;
            if( numStage > 6 ) maxDivingAliens = 3;
            if( numStage > 10 ) maxDivingAliens = 4;
            if( numStage > 14 ) maxDivingAliens = 5;
            if( numStage > 18 ) maxDivingAliens = 6;


            //remove aliens wich stopped diving
            if( ! divingAliens.isEmpty() ){
                divingAliens.removeIf(a -> ( !a.isDiving() || a.isToRemove() ) ); //lambda with sole argument Alien a
            }

            //add aliens to dive if there are available aliens, just 1
            boolean didAlienDive = false;
            while( divingAliens.size() < maxDivingAliens && ! areAllAliensDiving() && !didAlienDive ){

                int alienToDive = (int)Math.round( Math.random() * ( ALIENS_PER_STAGE - 1 ) );
                if( ( ! presentStageAliens.get( alienToDive ).isToRemove() && ! presentStageAliens.get( alienToDive ).isDiving() ) ){
                    presentStageAliens.get( alienToDive ).setDiving();
                    eventsQueue.add( Events.ALIEN_DIVING );
                    divingAliens.add( presentStageAliens.get( alienToDive ));
                    didAlienDive = true;
                }

            }// end diving cycle

        }//end if areAliensDiving
    

        //-------------------------------------------------------
        //CHECK FOR NEXT STAGE/FORMATION WHEN NOT IN LIFE_LOST
        //-------------------------------------------------------

        if( state != GameState.LIFE_LOST ){
            //case first formation
            if( numFormation == 0 ){

                numFormation++;
                if( AlienFormationsLibrary.isValidFormation(numStage, numFormation) ){ // checked for valid formation
                    presentFormationAliens = AlienFormationsLibrary.getFormationCopy(numStage, numFormation);
                    newAliens = presentFormationAliens;
                    presentStageAliens.addAll(newAliens);
                }
            }
            else if( isFormationCompleted() ){
                if( isStageCompleted() ){

                    //stage and formation both completed
                    nextStage();
                }
                else{
                    
                    //only formation completed
                    numFormation++;
                    if( AlienFormationsLibrary.isValidFormation(numStage, numFormation) ){ // checked for valid formation
                        presentFormationAliens = AlienFormationsLibrary.getFormationCopy(numStage, numFormation);
                        newAliens = presentFormationAliens;
                        presentStageAliens.addAll(newAliens);
                    }
                }
            }
        }

        return newAliens;
    }

    boolean isFormationCompleted(){

        boolean isCompleted = true;

        //check if are not attacking( as in formation)  OR  attacking after formation  OR  to remove (if that's true for all of them then the formation is completed)
        for( Alien alien: presentFormationAliens){
            if( !alien.isAttacking()  ||  alien.getPathCopy().isEmpty()  ||  alien.isToRemove() ) {}
            else return false;
        }

        return isCompleted;
    }

    boolean isStageCompleted(){
        
        boolean isCompleted = true;

        //if one is not to remove return false
        for( Alien alien: presentStageAliens ){
            if( !alien.isToRemove() ) return false;
        }
        if( numFormation < 5 ) return false;

        return isCompleted;
    }

    boolean isStageFull(){ return ( presentStageAliens.size() == ALIENS_PER_STAGE ); }

    boolean areAllStageAlienPathsEmpty(){
        boolean temp = true;
        for( Alien a : presentStageAliens ){
            //check if omne of them is not to remove and has not and an empty path
            if ( !( a.isPathEmpty() || a.isToRemove() ) )  temp = false;
            }
        return temp;
    }

    boolean areAllAliensDiving(){
        for( Alien a: presentStageAliens ){
            if( ! a.isDiving() && ! a.isToRemove() ) return false;
        }
        return true;
    }

    boolean areSomeAliensDiving(){
        if( divingAliens.isEmpty() ) return false;
        for( Alien a: divingAliens ){ //used in case of game blocked for lost life
            if( a.isDiving() ) return true;
        }
        return false;
    }

    boolean areAliensDiving(){ return areAliensDiving; }

    int getNumStage(){ return numStage; }
    int getNumFormation(){ return numFormation; }
    int getFormationOffset(){ return formationOffset; }

}