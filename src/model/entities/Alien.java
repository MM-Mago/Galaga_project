package model.entities;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

import model.GameModel;
import model.PointOfPath;
import shared.Entities;
import shared.GameState;
import shared.RotationDirection;
import shared.SharedConstants;

public abstract class Alien extends Entity {


    //----------------------------
    //PROTECTED ALIEN COSTANTS
    //----------------------------

    protected static final int INIT_X = -16;
    protected static final int INIT_Y = -16;
    protected static final PointOfPath CENTER_POINT_FOR_OFFSET = new PointOfPath( 112 - ( Entities.BOSS_GALAGA.getWidth()/2 ), 40 );
    protected static final int MAX_DISTANCE_FROM_CENTERX = 50;
    protected static final int MAX_DISTANCE_FROM_CENTERY = 100;
    protected static final int POINTS_AT_MAIN_SPEED = 150;


    //----------------------------
    //PROTECTED ALIEN VARIABLES
    //----------------------------

    protected int stageSpeed;
    protected Queue<PointOfPath> path;
    protected Queue<PointOfPath> divingPath;
    protected boolean isOneShot; //one shot to kill
    protected boolean isAttacking; //attacking means going to formation or already exited it
    protected boolean isDiving; //diving means that it extited formation to attack the player
    protected boolean isOffsetYChanging;
    protected int offset;
    protected boolean isOfChallengingStage;

    protected final PointOfPath formationPoint;
    protected final int POINTS_TO_CALCULATE_WITH_OFFSET;
    protected final int DIVING_POINTS_TO_CALCULATE_WITH_OFFSET;

    //----------------------------
    //PRIVATE ALIEN VARIABLES
    //----------------------------

    private final int DIVING_SPEED = 1;
    private int formationOffsetX;
    private int formationOffsetY;
    private int offsetXStartingDiving;
    private int offsetYStartingDiving;
    private ArrayList<PointOfPath> divingPathArrayList;
    private ArrayList<PointOfPath> pathArrayList;
    private LinkedList<PointOfPath> lastPoints;
    private int pointsCounter;


    //----------------------
    //PROTECTED COSTRUCTOR
    //----------------------
    
    protected Alien(int width, int height, int speed/*points skipped per frame*/, int newStageSpeed, Queue<PointOfPath> path, Queue<PointOfPath> divingPath, boolean isOneShot, RotationDirection direction, int POINTS_TO_CALCULATE_WITH_OFFSET, int DIVING_POINTS_TO_CALCULATE_WITH_OFFSET , PointOfPath formationPoint, boolean isOfChallengingStage ) {
        super( INIT_X, INIT_Y, width, height, speed, direction );
        this.path = path;
        pathArrayList = new ArrayList<PointOfPath>(path);
        divingPathArrayList = new ArrayList<PointOfPath>(divingPath);
        this.isOneShot = isOneShot;
        this.isAttacking = true;
        pointsCounter = 0;
        lastPoints = new LinkedList<PointOfPath>();
        isDiving = false;
        this.POINTS_TO_CALCULATE_WITH_OFFSET = POINTS_TO_CALCULATE_WITH_OFFSET;
        offset = 0;
        this.formationPoint = formationPoint;
        isOffsetYChanging = false;
        this.isOfChallengingStage = isOfChallengingStage;
        this.divingPath = divingPath;
        this.DIVING_POINTS_TO_CALCULATE_WITH_OFFSET = DIVING_POINTS_TO_CALCULATE_WITH_OFFSET;
        formationOffsetX = 0;
        formationOffsetY = 0;
        offsetXStartingDiving = 0;
        offsetYStartingDiving = 0;
        stageSpeed = newStageSpeed;
        
    }// end costructor


    //--------------------------------
    //PUBLIC ABSTRACT METHODS
    //--------------------------------

    public abstract Alien copyAlien();//alien copy method to implement in concrete class
    public abstract Alien copyAlienWithNewSpeed( int newSpeed, int newStageSpeed );//alien copy method to implement in concrete class 
    public abstract int getScoreValue();// get SCORE_VALUE


    //----------------------------
    //PUBLIC METHODS
    //----------------------------

    @Override
    public void update( int frameNumber, int secondsInState, GameState state ) {

        //init variables
        final int FRAMES_PER_SECOND = SharedConstants.FRAMES_PER_SECOND;
        
        //init offsets
        formationOffsetX = offset;
        formationOffsetY = 0;
        int formationOffsetXWhenYChanging = offset / 2;



        //calculate distance from center
        double distanceFromCenterX = CENTER_POINT_FOR_OFFSET.x() - ( formationPoint.x() + ( (double)this.width / 2 ) );
        double distanceFromCenterY = CENTER_POINT_FOR_OFFSET.y() - ( formationPoint.y() + ( (double)this.height / 2 ) );
        double scaleFactorX = distanceFromCenterX / MAX_DISTANCE_FROM_CENTERX;
        double scaleFactorY = distanceFromCenterY / MAX_DISTANCE_FROM_CENTERY;
        
        //check if formationOffsetY should start changing
        if( GameModel.areAliensDiving() && offset == 0 ){
            isOffsetYChanging = true;
        }

        //change formationOffsetY  if needed and scale both
        if( isOffsetYChanging ){

            formationOffsetX = (int)(formationOffsetXWhenYChanging*scaleFactorX);
            formationOffsetY = (int)Math.abs( offset*scaleFactorY );

            //check for alien on the left of the screen and put x offset negative
            if( formationPoint.x() < ( SharedConstants.MODEL_SCREEN_WIDTH/2 ) ){
                formationOffsetX = -Math.abs( formationOffsetX ); 
            }
            //fix also aliens on the right
            else{
                formationOffsetX = Math.abs( formationOffsetX ); 
            }
        }

        //if in formation and not of challenging stage
        if( !isAttacking && ( ! isOfChallengingStage ) ){

            //state in formation changer
            if( frameNumber <= FRAMES_PER_SECOND/2 ) animationFrame = 1;
            else if( frameNumber > FRAMES_PER_SECOND/2 ) animationFrame = 2;

            //offset change 
            x = (int)formationPoint.x() + formationOffsetX;
            y = (int)formationPoint.y() + formationOffsetY;

            //update angle if in formation
            updateAngleWithNewPoint( new PointOfPath( x - formationOffsetX, y - formationOffsetY ) );
            direction = RotationDirection.U;
        }

        //if not in formation
        else{

            //skip as many points of the path as the speed indicate, also update angle
            int pointsSkipped = 0;

            int presentSpeed = speed;
            if( pointsCounter > POINTS_AT_MAIN_SPEED ) presentSpeed = stageSpeed;
            if( isDiving ) presentSpeed = ( speed-1 );

            while( ( pointsSkipped < presentSpeed ) ){

                PointOfPath nextPoint = path.poll();

                int dx = 0;
                int dy = 0;
                

                //CHECK IF NEXT POINT MUST ME OFFSETTED TO REACH FORMATION WHEN MOVING
                if( isDiving ){
                    dx = offsetXStartingDiving;
                    dy = offsetYStartingDiving;
                    if( path.size() <= DIVING_POINTS_TO_CALCULATE_WITH_OFFSET && (formationOffsetX != 0) && ( ! isOfChallengingStage ) ){
                        dx = offsetXStartingDiving + (int)( (double)(formationOffsetX - offsetXStartingDiving ) / DIVING_POINTS_TO_CALCULATE_WITH_OFFSET * ( DIVING_POINTS_TO_CALCULATE_WITH_OFFSET - path.size() ) );
                        dy = offsetYStartingDiving + (int)( (double)(formationOffsetY - offsetYStartingDiving ) / DIVING_POINTS_TO_CALCULATE_WITH_OFFSET * ( DIVING_POINTS_TO_CALCULATE_WITH_OFFSET - path.size() ) );
                    }
                }
                else {
                    if( path.size() <= POINTS_TO_CALCULATE_WITH_OFFSET && (formationOffsetX != 0) && ( ! isOfChallengingStage ) ){
                        dx = (int)( (double)formationOffsetX / POINTS_TO_CALCULATE_WITH_OFFSET * ( POINTS_TO_CALCULATE_WITH_OFFSET - path.size() ) );
                        dy = (int)( (double)formationOffsetY / POINTS_TO_CALCULATE_WITH_OFFSET * ( POINTS_TO_CALCULATE_WITH_OFFSET - path.size() ) );
                    }
                }

                

                //if going for formation
                if( nextPoint != null ){

                    this.x = (int)nextPoint.x() + dx;
                    this.y = (int)nextPoint.y() + dy;
                }

                //if not just break, set not attacking and not diving, and clear lastPoints
                else { 
                    isAttacking = false;
                    isDiving = false;
                    lastPoints.clear();
                    break;
                }

                
                //cycle interator
                pointsSkipped++;
                pointsCounter++;
            }
                
            //update angle
            updateAngleWhileInPath();

            //if completed challenging stage path
            if( isOfChallengingStage && path.isEmpty() ){ this.isToRemove = true; }

        }
                
    }//end update
        
    
    public Queue<PointOfPath> getPathCopy(){ return new LinkedList<PointOfPath>( path ); }
    public boolean isAttacking(){ return isAttacking; }
    public boolean isPathEmpty(){ return path.isEmpty(); }
    public boolean isOneShot(){ return isOneShot; }
    public int getXFromCenterX( int centerX ){ return( centerX - ( this.width/2 )); }
    public int getYFromCenterY( int centerY ){ return( centerY - ( this.height/2 )); }
    public int getPointsToCalculateWithOffset(){ return POINTS_TO_CALCULATE_WITH_OFFSET; };
    public void updateOffset( int offset ) { this.offset = offset; }

    
    //-----------------
    //DIVE METHOD
    //-----------------

    public void setDiving(){

        if( isDiving == false ){
            pointsCounter = 0;
            isDiving = true;
            isAttacking = true;
            path = new LinkedList<PointOfPath>( divingPathArrayList );

            offsetXStartingDiving = formationOffsetX;
            offsetYStartingDiving = formationOffsetY;
        }

    }// end setDiving

    
    //-----------------
    //COLLISION METHOD
    //-----------------

    //check collision with entity e, set to remove if true
    //not used pow nor sqrt cause thei're expensive
    public boolean checkCollisionWith( Entity entity ){


        boolean didCollide = false;

        if( entity instanceof EntityKiller ){
            didCollide = true;
            isToRemove = true;
        }
        else{

            //for aliens uses radius big as the max dimension

            //calculate radius squared
            double radius = Math.max( this.width, this.height)/2;
            double radiusSquared = radius*radius;
            //calculate closest point of entity to the alien circle
            double entityXMin = entity.getX();
            double entityXMax = entity.getX() + entity.getWidth();
            double entityYMin = entity.getY();
            double entityYMax = entity.getY() + entity.getHeight();
            double entityClosestPointToTheCircleX = ( Math.min( entityXMax, Math.max(this.getCenterX(), entityXMin)));
            double entityClosestPointToTheCircleY = ( Math.min( entityYMax, Math.max(this.getCenterY(), entityYMin)));
            double entityDistanceToCircleCenterSquared = ( this.getCenterX() - entityClosestPointToTheCircleX )*( this.getCenterX() - entityClosestPointToTheCircleX ) + 
                                                        ( this.getCenterY() - entityClosestPointToTheCircleY )*( this.getCenterY() - entityClosestPointToTheCircleY ) ;

            //check if closest point is less than radius of alien circle
            if( entityDistanceToCircleCenterSquared < radiusSquared ){
                
                didCollide = true;
                entity.isToRemove = true;

                //check if it wasn't oneShot
                if( !this.isOneShot ) this.isOneShot = true;
                else this.isToRemove = true;

                //if collided with player always remove
                if( entity instanceof Player ){
                    this.isToRemove = true;
                }
            }
        }

        return didCollide;
    }

    
    //----------------------------
    //PRIVATE METHODS
    //----------------------------

    //use newP only for undefined paths
    private void updateAngleWithNewPoint( PointOfPath newP ){

        final int LAST_POINTS_SIZE = 20;
        final int RADIUS = LAST_POINTS_SIZE / 2 - 1;

        //update lastPoints
        if( newP != null){ //if newP present then add it to the last points 
            if( lastPoints.size() >= LAST_POINTS_SIZE ){ lastPoints.poll(); }
            lastPoints.add( newP );
        }
        if( newP == null ){ //if no newP then just copy the points from the path
            int size;
            if( ! isDiving ) size = pathArrayList.size();
            else size = divingPathArrayList.size();
            int minIndex = Math.max(0, pointsCounter - RADIUS);
            int maxIndex = Math.min(size, pointsCounter + RADIUS);
            //check for empty list
            if (minIndex > maxIndex) { minIndex = maxIndex; }   

            if( ! isDiving ) lastPoints = new LinkedList<PointOfPath>( pathArrayList.subList( minIndex, maxIndex ) );
            else lastPoints = new LinkedList<PointOfPath>( divingPathArrayList.subList( minIndex, maxIndex ) );
        }

        //create temp list
        ArrayList<PointOfPath> tempList = new ArrayList<PointOfPath>( lastPoints );

        // calculate startI and endI checking for bounds
        int startI = 0;
        int endI   = tempList.size() - 1;

        double angle;
        if( endI == -1 ){
            angle = direction.getAngle();
        }
        else{
            //calculate dx and dy
            double dx = tempList.get( endI ).x() - tempList.get( startI ).x();
            double dy = tempList.get( endI ).y() - tempList.get( startI ).y();

            // calculate angle
            angle = Math.toDegrees(Math.atan2(dy, dx)) + 90; //90 to get the tangent instead of perpendicular

            //check for all same points (formation case)
            boolean areAllSame = true;
            for( PointOfPath p: tempList ){
                if( ! tempList.get(0).equals( p ) ) areAllSame = false;
            }
            if( areAllSame ) angle = 0;
        }

        // set new RotationDirection
        direction = RotationDirection.fromAngle( angle );

    }// end updateAngleWithNewPoint

    private void updateAngleWhileInPath(){ updateAngleWithNewPoint( null ); }

}