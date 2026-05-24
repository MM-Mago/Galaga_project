package model;

import model.data.PointOfPath;
import model.entities.Alien;
import model.entities.BossGalaga;
import model.entities.Goei;
import model.entities.Zako;
import shared.Entities;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;


//----------------------------------------------------------------------------------
//THIS CLASS IS ONLY USED FOR INITIALIZING EVERY ALIEN AND ALIEN PATH OF THE GAME,
//AND GETTING A COPY OF THE NEXT GROUP OF ALIENS (FORMATION) WHEN NEEDED.
//IT CAN BE SEEN AS A DATA STORING CLASS
//----------------------------------------------------------------------------------

//EVERYTHING PACKAGE-PROTECTED OR PRIVATE
class AlienFormationsLibrary {
        

    //--------------------------------
    //PRIVATE VARIABLES
    //--------------------------------

    private final static String FORMATIONS_FILE_PATH = "src//model//data//formations.txt";
    private final static String CHARSET = "utf-8"; //o UTF-8

    private static ArrayList<StagePaths> stageList = new ArrayList<StagePaths>();


    //--------------------------------
    //PACKAGE-PRIVATE VARIABLES
    //--------------------------------

    static final int DEFINED_STAGES_IN_FILE = 3;
    static final int DEFINED_FORMATIONS_PER_STAGE_IN_FILE = 5;
    static final int DEFINED_ALIENS_PER_FORMATION_IN_FILE = 8;

    static final int TEST_SPEED = 2;


    //--------------------------------
    //PACKAGE-PROTECTED NESTED RECORDS
    //--------------------------------

    //stages are numbered 1,2,3=challenging,4,5,6,7=c,8,9,10,11=c....
    record StagePaths( ArrayList<FormationPaths> formationsList ) {}
    record FormationPaths( ArrayList<Alien> alienList ) {}


    //--------------------------------
    //PRIVATE ENUM
    //--------------------------------

    private enum Direction {
        D(0, 1), // Down: ++
        U(0, -1), // Up: Y--
        L(-1, 0), // Left: X--
        R(1, 0), // Right: X++
        DR(1, 1), // Down-Right:  X++,  Y++
        DL(-1, 1), // Down-Left: X--, Y++
        UR(1, -1), // Up-Right: X++, y--
        UL(-1, -1), // Up-Left: X--, Y--
        S(0, 0); // Stay

        private final int dx;
        private final int dy;

        Direction(int dx, int dy) {
            this.dx = dx;
            this.dy = dy;
        }

        public int getDx() { return dx; }
        public int getDy() { return dy; }

    } //end enum Direction


    //--------------------------------
    //PRIVATE COSTRUCTOR
    //--------------------------------

    private AlienFormationsLibrary(){}


    //--------------------------------
    //PACKAGE-PROTECTED STATIC METHODS
    //--------------------------------

    static void initFormations( GameModel model){

        //initialize ALL formations
        
        BufferedReader buffRead = null;
        try{
            buffRead =  new BufferedReader(  
                        new InputStreamReader( 
                        new FileInputStream( FORMATIONS_FILE_PATH), CHARSET ) );
            String line = null;
            int nStage = -1;
            int mFormation = -1;
            int kAlien = -1;
            

            //------------------------
            //INIT LISTS OF RECORDS
            //------------------------

            //create n stagePaths to fill
            for( int n = 1; n <= DEFINED_STAGES_IN_FILE; n++ ){
                StagePaths stageNToFill = new StagePaths(new ArrayList<FormationPaths>());

                //create m formationLists to fill
                for(int m = 1; m <= DEFINED_FORMATIONS_PER_STAGE_IN_FILE; m++ ){

                    FormationPaths formationMToFill = new FormationPaths(new ArrayList<Alien>());
                    stageNToFill.formationsList().add(formationMToFill);
                }

                stageList.add(stageNToFill);
            }

            //------------------------
            //ADD ALIENS FROM FILE
            //------------------------

            while( ( ( line = buffRead.readLine() ) != null ) 
                && ( nStage <= DEFINED_STAGES_IN_FILE ) 
                && ( mFormation <= DEFINED_FORMATIONS_PER_STAGE_IN_FILE ) 
                && ( kAlien <= DEFINED_ALIENS_PER_FORMATION_IN_FILE ) ){
                


                
                line = line.trim(); //remove initial spaces
                if (line.isEmpty()) continue; //if empty skip cicle
                else if (line.startsWith("!")){ break; }
                else if (line.startsWith("|")){ nStage++; mFormation = -1; }//check if reading new stage, ininitialized at -1
                else if (line.startsWith("(")){ mFormation++; kAlien = -1; }//check if reading new Formation
                else if (line.startsWith("[")){ kAlien++; //check if reading new Alien
                    


                    //---------------------
                    //ALIEN PARSER
                    //---------------------


                    // 1. GET THE ALIEN NAME BETWEEN []

                    // example: "[goei 1]" -> "GOEI"
                    String typeStr = line.substring(1, line.indexOf(" ")).toUpperCase(); //substring from second char to space
                    if( typeStr.contains( "ALIEN" ) ) {break;} //if name = ALIEN break cycle
                    Entities type = Entities.valueOf(typeStr);


                    // 2. READ ALIEN DATA LINES

                    // we read all 4 lines
                    // must add [] wich signals to consider {} as separate strings
                    String startPosStr = buffRead.readLine().trim().replaceAll("[{}]", "");
                    String finalPosStr = buffRead.readLine().trim().replaceAll("[{}]", "");
                    String directionsStr = buffRead.readLine().trim().replaceAll("[{}]", "");
                    String pixelsStr = buffRead.readLine().trim().replaceAll("[{}]", "");


                    // 3. DATA CONVERSION

                    // final position coordinates in formation, moved from center to up-left
                    String[] finalCoords = finalPosStr.split(",");
                    int finalX = Integer.parseInt(finalCoords[0]) - (type.getWidth()/2);
                    int finalY = Integer.parseInt(finalCoords[1]) - (type.getHeight()/2);

                    // start position coordinates to spawn, moved from center to up-left
                    String[] startCoords = startPosStr.split(",");
                    int startX = Integer.parseInt(startCoords[0]) - (type.getWidth()/2);
                    int startY = Integer.parseInt(startCoords[1]) - (type.getHeight()/2);

                    // Direction array (D, DR, L...)
                    String[] directionsStringsArray = directionsStr.split(",");


                    //check for shifted aliens ( to left or right )
                    Queue<PointOfPath> pointsList;
                    if( ( directionsStringsArray[0].toUpperCase().equals("RIGHT") ) || ( directionsStringsArray[0].toUpperCase().equals("LEFT" ) ) ){
                        
                        //4. PRODUCE LIST OF POINTOFPATH

                        int alienIndexToCopy = ( Integer.parseInt( pixelsStr ) - 1 );
                        //copy alien path with offset
                        pointsList = copyAlienPathWithOffset(stageList.get(nStage).formationsList.get(mFormation).alienList.get(alienIndexToCopy).copyAlien(), directionsStringsArray[0].toUpperCase() );

                    }
                    //if fully declared aliens continue direction array
                    else{
                        Direction[] directionsArray = new Direction[directionsStringsArray.length];
                        for (int i = 0; i < directionsArray.length; i++) {
                            directionsArray[i] = Direction.valueOf(directionsStringsArray[i]);
                        }

                        // pixels array (20, 7, 1...)
                        String[] pixelsStrings = pixelsStr.split(",");
                        int[] pixelsArray = new int[pixelsStrings.length];
                        for (int i = 0; i < pixelsStrings.length; i++) {
                            pixelsArray[i] = Integer.parseInt(pixelsStrings[i]);
                        }


                        //4. PRODUCE LIST OF POINTOFPATH

                        //initialize list and next point, add first point
                        pointsList = new LinkedList<PointOfPath>();
                        int nextX = startX;
                        int nextY = startY;
                        pointsList.add( new PointOfPath(startX, startY));

                        //add every saved point
                        for( int i = 0; i < pixelsArray.length; i++ ){
                            for( int j = 0; j < pixelsArray[i]; j++ ){
                                nextX = nextX + directionsArray[i].getDx();
                                nextY = nextY + directionsArray[i].getDy();
                                pointsList.add(new PointOfPath( nextX , nextY ));
                            }
                        }
                    }
                    
                    //add points to reach designated position in formation
                    //do it by calculating the higher axis pixel distance, and dividing both axis thistances by that number
                    int lastX = (int)new ArrayList<PointOfPath>( pointsList ).getLast().x();
                    int lastY = (int)new ArrayList<PointOfPath>( pointsList ).getLast().y();
                    int POINTS_TO_CALCULATE_WITH_OFFSET = 0;
                    double maxDistance = Math.max( Math.abs(finalY-lastY), Math.abs(finalX-lastX) );
                    double dxPerFrame = (finalX-lastX)/maxDistance;
                    double dyPerFrame = (finalY-lastY)/maxDistance;
                    //and then add all points if maxDistance > 0
                    if( maxDistance > 0 ){
                        for( int i = 1; i <= maxDistance; i++ ){
                            pointsList.add( new PointOfPath( (int)(lastX + (dxPerFrame*i)), (int)(lastY + (dyPerFrame*i)) ) );
                            POINTS_TO_CALCULATE_WITH_OFFSET++;
                        }
                    }
                    


                    //5. FINALLY CREATE AND ADD ALIEN

                    PointOfPath formationPoint = new PointOfPath( finalX, finalY );
                    switch ( type ) {
                        case GOEI:
                            stageList.get(nStage).formationsList().get(mFormation).alienList().add( new Goei( TEST_SPEED, pointsList, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint ) );
                            break;

                        case ZAKO:
                            stageList.get(nStage).formationsList().get(mFormation).alienList().add( new Zako( TEST_SPEED, pointsList, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint ) );
                            break;

                        case BOSS_GALAGA:
                            stageList.get(nStage).formationsList().get(mFormation).alienList().add( new BossGalaga( TEST_SPEED, pointsList, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint ) );
                            break;

                        default:
                            break;
                    } // end switch

                } // end alien parser

            } //end while

        } // end try
        catch( FileNotFoundException fnfe ){
            fnfe.printStackTrace();
        }
        catch( IOException ioe ){
            ioe.printStackTrace();
        }
        finally{
            try{ if(buffRead != null ) buffRead.close(); }
            catch( IOException ioe ){ioe.printStackTrace();}
        }

    } //end initFormations

    //return null in case of invalid numbers
    static ArrayList<Alien> getFormationCopy( int numStage, int numFormation ){

        ArrayList<Alien> formationCopy = new ArrayList<Alien>();

        //check for invalid numbers
        if( ! isValidFormation(numStage, numFormation)){ throw new IllegalStateException( "check for valid numbers first" ); };



        //all num start from 1

        // Mapping Table:
        // Stage: 1 2 3(C) | 4 5 6 7(C) | 8 9 10 11(C)
        // Index: 0 1 3    | 0 1 2 3    | 0 1 2  3

        //fix numeration
        if(numStage<3) numStage--; //stage 1 and 2
        else if(numStage == 3 ) numStage = 3; //stage 3 (first challenging)
        else if(numStage % 4 == 0) numStage = 2; //ex. stage 4
        else if( (numStage - 1) % 4 == 0) numStage = 1; //ex. stage 5
        else if( (numStage - 2) % 4 == 0) numStage = 0; //ex. stage 6
        else if( (numStage - 3) % 4 == 0) numStage = 3; //other challenging stages
        numFormation--;

        for( Alien a: stageList.get(numStage).formationsList().get(numFormation).alienList()  ){
            formationCopy.add( a.copyAlien() );
        }

        return formationCopy;

    }//end getFormationCopy

    static boolean isValidFormation( int numStage, int numFormation ){
        // is valid number 

        //check formation number
        boolean isValidFormation = false;
        if( numFormation <= DEFINED_FORMATIONS_PER_STAGE_IN_FILE && numFormation >= 1  )  isValidFormation = true;
        
        //check stage number
        boolean isValidStage = false;
        if( numStage > 0 && numStage <= DEFINED_STAGES_IN_FILE && numStage < 3 ) isValidStage = true; // ex. 1,2
        else if( DEFINED_STAGES_IN_FILE == 1 ){
            if( (numStage - 2) % 4 == 0 ) isValidStage = true; // ex 6
        }
        else if( DEFINED_STAGES_IN_FILE == 2 ){
            if( (numStage - 2) % 4 == 0 ) isValidStage = true; // ex 6
            if( (numStage - 1) % 4 == 0 ) isValidStage = true; // ex 5
        }
        else if( DEFINED_STAGES_IN_FILE == 3 ){
            if( (numStage - 2) % 4 == 0 ) isValidStage = true; // ex 6
            if( (numStage - 4) % 4 == 0 ) isValidStage = true; // ex 4
            if( (numStage - 1) % 4 == 0 ) isValidStage = true; // ex 5
            if( numStage == 3 ) isValidStage = false; // only stage 3
        }
        else if( DEFINED_STAGES_IN_FILE >= 4 ){ isValidStage = true; }

        return ( isValidFormation && isValidStage );
    }

    
    //--------------------------------
    //PRIVATE STATIC METHODS
    //--------------------------------

    private static Queue<PointOfPath> copyAlienPathWithOffset( Alien a, String side ){

        //init variables and lists
        Queue<PointOfPath> pointsList = a.getPathCopy();
        LinkedList<PointOfPath> newPath = new LinkedList<PointOfPath>();
        List<PointOfPath> arrayList = new ArrayList<>(pointsList).subList(0, pointsList.size() - a.getPointsToCalculateWithOffset() - 1 );
        final int OFFSET = 16;

        //init angle
        int angle;
        if( side.toUpperCase().equals( "RIGHT" ) ){ angle = 90; }
        else if( side.toUpperCase().equals( "LEFT" ) ){ angle = 270; }
        else throw new IllegalArgumentException( "side must be left or right" );

        
        // init radius
        final int RADIUS = 10; 

        // cycle all points
        for( int i = 0; i < arrayList.size(); i++ ){

            // calculate startI e endI blocking them withing array indexes
            int startI = Math.max(0, i - RADIUS);
            int endI = Math.min(arrayList.size() - 1, i + RADIUS);

            PointOfPath startP = arrayList.get(startI);
            PointOfPath endP   = arrayList.get(endI);

            // calculate x incrase and y increase to calculate the angle
            double dx = endP.x() - startP.x();
            double dy = endP.y() - startP.y();

            // calculate original angle in radiants
            double pathAngle = Math.atan2(dy, dx);

            // calculate offseted angle (90 o 270 degrees converted in radiants)
            double offsetAngle = pathAngle + Math.toRadians(angle);

            // get present central point
            PointOfPath currentP = arrayList.get(i);

            // calculate new point using sin and cos
            // use Math.round because of automatic floor rounding of (int) cast
            int newX = (int) Math.round(currentP.x() + OFFSET * Math.cos(offsetAngle));
            int newY = (int) Math.round(currentP.y() + OFFSET * Math.sin(offsetAngle));

            // create new point
            PointOfPath newPoint = new PointOfPath(newX, newY);

            //add point
            newPath.add( newPoint );
        }

        return newPath;

    }// end copyAlienPathWithOffset

    //private static void addTwoDivingAliens( ArrayList<Alien> formationList ){}
}