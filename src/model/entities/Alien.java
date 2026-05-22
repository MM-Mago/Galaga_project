package model.entities;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

import controller.GameController;
import model.GameModel;
import model.data.PointOfPath;
import model.data.WorldBounds;
import shared.Entities;
import shared.RotationDirection;

public abstract class Alien extends Entity {


    //----------------------------
    //PROTECTED ALIEN COSTANTS
    //----------------------------

    protected static final int INIT_X = -16;
    protected static final int INIT_Y = -16;
    protected static final PointOfPath CENTER_POINT_FOR_OFFSET = new PointOfPath( 112 - ( Entities.BOSS_GALAGA.getWidth()/2 ), 40 );
    protected static final int MAX_DISTANCE_FROM_CENTERX = 50;
    protected static final int MAX_DISTANCE_FROM_CENTERY = 100;


    //----------------------------
    //PROTECTED ALIEN VARIABLES
    //----------------------------

    protected Queue<PointOfPath> path;
    protected boolean isOneShot; //one shot to kill
    protected boolean isAttacking; //attacking means going to formation or already exited it
    protected boolean isDiving; //diving means that it extited formation to attack the player
    protected boolean isOffsetYChanging;

    protected final PointOfPath formationPoint;
    protected final int POINTS_TO_CALCULATE_WITH_OFFSET;

    //----------------------------
    //PRIVATE ALIEN VARIABLES
    //----------------------------

    private ArrayList<PointOfPath> pathArrayList;
    private LinkedList<PointOfPath> lastPoints;
    private int pointsCounter;
    protected int offset;


    //----------------------
    //PROTECTED COSTRUCTOR
    //----------------------
    
    protected Alien(int width, int height, int speed/*points skipped per frame*/, WorldBounds bounds, Queue<PointOfPath> path, boolean isOneShot, RotationDirection direction, int POINTS_TO_CALCULATE_WITH_OFFSET, PointOfPath formationPoint ) {
        super( INIT_X, INIT_Y, width, height, speed, bounds, direction );
        this.path = path;
        pathArrayList = new ArrayList<PointOfPath>(path);
        this.isOneShot = isOneShot;
        this.isAttacking = true;
        pointsCounter = 0;
        lastPoints = new LinkedList<PointOfPath>();
        isDiving = false;
        this.POINTS_TO_CALCULATE_WITH_OFFSET = POINTS_TO_CALCULATE_WITH_OFFSET;
        offset = 0;
        this.formationPoint = formationPoint;
        isOffsetYChanging = false;
        
    }// end costructor


    //--------------------------------
    //PUBLIC ABSTRACT METHODS
    //--------------------------------

    public abstract Alien copyAlien();//alien copy method to implement in concrete class


    //----------------------------
    //PUBLIC METHODS
    //----------------------------

    @Override
    public void update( int frameNumber ) {

        //init offsets
        int formationOffsetX = offset;
        int formationOffsetY = 0;
        int formationOffsetXWhenYChanging = offset / 2;


        //if in formation
        if( !isAttacking ){

            //calculate distance from center
            double distanceFromCenterX = CENTER_POINT_FOR_OFFSET.x() - ( formationPoint.x() + (this.width/2 +1) );
            double distanceFromCenterY = CENTER_POINT_FOR_OFFSET.y() - ( formationPoint.y() + (this.height/2 +1) );
            //double distanceFromCenter = Math.sqrt(distanceFromCenterX*distanceFromCenterX + distanceFromCenterY*distanceFromCenterY); //didnt use MAth.pow because expensive
            double scaleFactorX = distanceFromCenterX / MAX_DISTANCE_FROM_CENTERX;
            double scaleFactorY = distanceFromCenterY / MAX_DISTANCE_FROM_CENTERY;
        
            //check if formationOffsetY should start changing
            if( GameModel.AreAllStageAlienPathsEmpty() && offset == 0 ){
                isOffsetYChanging = true;
            }
            //change formationOffsetY  if needed and scale both
            if( isOffsetYChanging ){

                formationOffsetX = (int)(formationOffsetXWhenYChanging*scaleFactorX);
                formationOffsetY = (int)Math.abs( offset*scaleFactorY );

                //check for alien on the left of the screen and put x offset negative
                if( formationPoint.x() < ( bounds.width()/2 ) ){
                    formationOffsetX = -Math.abs( formationOffsetX ); 
                }
                //fix also aliens on the right
                else{
                    formationOffsetX = Math.abs( formationOffsetX ); 
                }
            }



            direction = RotationDirection.U;

            //state in formation changer
            if( frameNumber <= GameController.getFramePerSeconds()/2 ) animationFrame = 1;
            else if( frameNumber > GameController.getFramePerSeconds()/2 ) animationFrame = 2;

            //offset change 
            x = (int)formationPoint.x() + formationOffsetX;
            y = (int)formationPoint.y() + formationOffsetY;

            //update angle if in formation
            updateAngle( new PointOfPath( x - formationOffsetX, y - formationOffsetY ) );
        }

        //if not in formation
        else{


            //if reaching formation
            //skip as many points of the path as the speed indicate, also update angle
            int pointsSkipped = 0;
            while( ( pointsSkipped < speed ) ){

                PointOfPath nextPoint = path.poll();

                int dx = 0;

                //CHECK IF NEXT POINT MUST ME OFFSETTED
                if( path.size() <= POINTS_TO_CALCULATE_WITH_OFFSET && (formationOffsetX != 0) ){
                    dx = (int)( (double)formationOffsetX / POINTS_TO_CALCULATE_WITH_OFFSET * ( POINTS_TO_CALCULATE_WITH_OFFSET - path.size() ) );
                }


                //if going for formation
                if( nextPoint != null ){

                    this.x = (int)nextPoint.x() + dx;
                    this.y = (int)nextPoint.y();
                }
                //if not just break, set not attacking and clear lastPoints
                else { 
                    isAttacking = false;
                    lastPoints.clear();
                    break;
                }

                
                //cycle interator
                pointsSkipped++;
                pointsCounter++;
            }
                        
            //update angle if reaching formation
            if( ! isDiving ) updateAngle( null );
            
            //if attacking after formation
            if( isDiving ){
                
                //TO IMPLEMENT ATTACK MOVEMENT
                direction = RotationDirection.D;
            }

        }
                
    }//end update
        
    
    public Queue<PointOfPath> getPathCopy(){ return new LinkedList<PointOfPath>( path ); }
    public boolean isAttacking(){ return isAttacking; }
    public boolean isPathEmpty(){ return path.isEmpty(); }
    public boolean isOneShot(){ return isOneShot; }
    public int getXFromCenterX( int centerX ){ return( centerX - ( this.width/2 )); }
    public int getYFromCenterY( int centerY ){ return( centerY - ( this.height/2 )); }
    public void updateOffset( int offset ) { this.offset = offset; }

    
    //-----------------
    //COLLISION METHOD
    //-----------------

    //check collision with entity e, set to remove if true
    //not used pow nor sqrt cause thei're expensive
    public boolean checkCollisionWithPlayerShot( PlayerShot pShot ){

        boolean didCollide = false;

        //for aliens uses radius big as the max dimension

        //calculate radius squared
        double radius = Math.max( this.width, this.height)/2;
        double radiusSquared = radius*radius;
        //calculate closest point of pShot to the alien circle
        double pShotXMin = pShot.getX();
        double pShotXMax = pShot.getX() + pShot.getWidth();
        double pShotYMin = pShot.getY();
        double pShotYMax = pShot.getY() + pShot.getHeight();
        double pShotClosestPointToTheCircleX = ( Math.min( pShotXMax, Math.max(this.getCenterX(), pShotXMin)));
        double pShotClosestPointToTheCircleY = ( Math.min( pShotYMax, Math.max(this.getCenterY(), pShotYMin)));
        double pShotDistanceToCircleCenterSquared = ( this.getCenterX() - pShotClosestPointToTheCircleX )*( this.getCenterX() - pShotClosestPointToTheCircleX ) + 
                                                    ( this.getCenterY() - pShotClosestPointToTheCircleY )*( this.getCenterY() - pShotClosestPointToTheCircleY ) ;

        //check if closest point is less than radius of alien circle
        if( pShotDistanceToCircleCenterSquared < radiusSquared ){
            didCollide = true;
            pShot.isToRemove = true;
            //check if it wasn't oneShot
            if( !this.isOneShot ) this.isOneShot = true;
            else this.isToRemove = true;
        }

        return didCollide;
    }

    
    //----------------------------
    //PRIVATE METHODS
    //----------------------------

    private void updateAngle( PointOfPath newP ){

        final int LAST_POINTS_SIZE = 10;
        final int RADIUS = LAST_POINTS_SIZE / 2 - 1;

        //update lastPoints
        if( newP != null){ //if newP present then add it to the last points 
            if( lastPoints.size() >= LAST_POINTS_SIZE ){ lastPoints.poll(); }
            lastPoints.add( newP );
        }
        if( newP == null ){ //if no newP then just copy the points from the path
            lastPoints = new LinkedList<PointOfPath>( pathArrayList.subList( Math.max(0, pointsCounter - RADIUS ), Math.min( pathArrayList.size()-1, pointsCounter + RADIUS  )) );
        }

        //create temp list
        ArrayList<PointOfPath> tempList = new ArrayList<PointOfPath>( lastPoints );

        // calculate startI and endI checking for bounds
        int startI = 0;
        int endI   = tempList.size() - 1;

        //calculate dx and dy
        double dx = tempList.get( endI ).x() - tempList.get( startI ).x();
        double dy = tempList.get( endI ).y() - tempList.get( startI ).y();

        // calculate angle
        double angle = Math.toDegrees(Math.atan2(dy, dx)) + 90; //90 to get the tangent instead of perpendicular

        //check for all same points (formation case)
        boolean areAllSame = true;
        for( PointOfPath p: tempList ){
            if( ! tempList.get(0).equals( p ) ) areAllSame = false;
        }
        if( areAllSame ) angle = 0;

        // set new RotationDirection
        direction = RotationDirection.fromAngle( angle );
    }
}