package model;

import java.util.Queue;

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


//----------------------------------------------------------------------------------
//THIS CLASS IS ONLY USED FOR INITIALIZING EVERY ALIEN AND ALIEN PATH OF THE GAME,
//AND GETTING A COPY OF THE NEXT GROUP OF ALIENS (FORMATION) WHEN NEEDED.
//IT CAN BE SEEN AS A DATA STORING CLASS
//----------------------------------------------------------------------------------

//EVERYTHING PACKAGE-PROTECTED OR PRIVATE
class AlienFormations {
        

    //--------------------------------
    //PRIVATE VARIABLES
    //--------------------------------

    private final static String FORMATIONS_FILE_PATH = "src//model//data//formations.txt";
    private final static String CHARSET = "utf-8"; //o UTF-8

    private static ArrayList<StagePaths> stageList = new ArrayList<StagePaths>();

    //--------------------------------
    //PACKAGE-PRIVATE VARIABLES
    //--------------------------------
    static final int DEFINED_STAGES_IN_FILE = 1;
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

    private AlienFormations(){}


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
                    Queue<PointOfPath> pointsList = new LinkedList<PointOfPath>();
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

                    //add points to reach designated position in formation
                    //do it by calculating the higher axis pixel distance, and dividing both axis thistances by that number
                    int POINTS_TO_CALCULATE_WITH_OFFSET = 0;
                    double maxDistance = Math.max( Math.abs(finalY-nextY), Math.abs(finalX-nextX) );
                    double dxPerFrame = (finalX-nextX)/maxDistance;
                    double dyPerFrame = (finalY-nextY)/maxDistance;
                    //and then add all points if maxDistance > 0
                    if( maxDistance > 0 ){
                        for( int i = 1; i <= maxDistance; i++ ){
                            pointsList.add( new PointOfPath( (int)(nextX + (dxPerFrame*i)), (int)(nextY + (dyPerFrame*i)) ) );
                            POINTS_TO_CALCULATE_WITH_OFFSET++;
                        }
                    }


                    //5. FINALLY CREATE AND ADD ALIEN

                    PointOfPath formationPoint = new PointOfPath( finalX, finalY );
                    switch ( type ) {
                        case GOEI:
                            stageList.get(nStage).formationsList().get(mFormation).alienList().add( new Goei( TEST_SPEED, model.getBounds(), pointsList, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint ) );
                            break;

                        case ZAKO:
                            stageList.get(nStage).formationsList().get(mFormation).alienList().add( new Zako( TEST_SPEED, model.getBounds(), pointsList, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint ) );
                            break;

                        case BOSS_GALAGA:
                            stageList.get(nStage).formationsList().get(mFormation).alienList().add( new BossGalaga( TEST_SPEED, model.getBounds(), pointsList, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint ) );
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
        if( numStage > DEFINED_STAGES_IN_FILE || numFormation > DEFINED_FORMATIONS_PER_STAGE_IN_FILE || numStage < 1 || numFormation < 1 ){ return null; };



        //all num start from 1

        // Mapping Table:
        // Stage: 1 2 3(C) | 4 5 6 7(C) | 8 9 10 11(C)
        // Index: 0 1 3    | 0 1 2 3    | 0 1 2  3

        //fix numeration
        if(numStage<3) numStage--;
        else if(numStage == 3 ) numStage = 3;
        else{ numStage = numStage%4;}
        numFormation--;

        for( Alien a: stageList.get(numStage).formationsList().get(numFormation).alienList()  ){
            formationCopy.add( a.copyAlien() );
        }

        return formationCopy;

    }//end getFormationCopy

    static boolean isValidFormation( int numStage, int numFormation ){
        // is valid number 
        return( numStage <= DEFINED_STAGES_IN_FILE && numFormation <= DEFINED_FORMATIONS_PER_STAGE_IN_FILE && numStage >= 1 && numFormation >= 1 );
    }
}