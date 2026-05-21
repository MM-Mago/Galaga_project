package model;

import java.util.ArrayList;

import model.entities.Alien;


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


    //--------------------------------
    //PUBLIC COSTRUCTOR
    //--------------------------------

    AlienHandler( ){
        AlienFormations.initFormations();
        presentFormationAliens = new ArrayList<Alien>();
        presentStageAliens = new ArrayList<Alien>();
        numStage = 1;
        numFormation = 0;
    }

    
    //--------------------------------
    //PRIVATE METHODS
    //--------------------------------

    private void nextStage(){
        numStage++;
        numFormation = 0;
        presentStageAliens = new ArrayList<Alien>();
        presentFormationAliens = new ArrayList<Alien>();
    }


    //--------------------------------
    //PACKAGE-PROTECTED METHODS
    //--------------------------------

    ArrayList<Alien> updateHandlerAndGetNewAliens(){

        ArrayList<Alien> newAliens = new ArrayList<Alien>();

        //case first formation
        if( numFormation == 0 ){

            numFormation++;
            if( AlienFormations.isValidFormation(numStage, numFormation) ){ // checked for valid formation
                presentFormationAliens = AlienFormations.getFormationCopy(numStage, numFormation);
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
                if( AlienFormations.isValidFormation(numStage, numFormation) ){ // checked for valid formation
                    presentFormationAliens = AlienFormations.getFormationCopy(numStage, numFormation);
                    newAliens = presentFormationAliens;
                    presentStageAliens.addAll(newAliens);
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

        return isCompleted;
    }

    int getNumStage(){ return numStage; }
    int getNumFormation(){ return numFormation; }
}