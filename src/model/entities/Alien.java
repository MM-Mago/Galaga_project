package model.entities;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

import controller.GameController;
import model.data.PointOfPath;
import model.data.WorldBounds;
import shared.RotationDirection;

public abstract class Alien extends Entity {


    //----------------------------
    //PROTECTED ALIEN COSTANTS
    //----------------------------

    protected static final int INIT_X = -16;
    protected static final int INIT_Y = -16;


    //----------------------------
    //PROTECTED ALIEN VARIABLES
    //----------------------------

    protected Queue<PointOfPath> path;
    protected boolean isOneShot; //one shot to kill
    protected boolean isAttacking; //attacking means going to formation or already exited it
    protected boolean isDiving; //diving means that it extited formation to attack the player

    

    //----------------------------
    //PRIVATE ALIEN VARIABLES
    //----------------------------

    private ArrayList<PointOfPath> pathPointsList;
    private int pointsCounter;


    //----------------------
    //PROTECTED COSTRUCTOR
    //----------------------
    
    protected Alien(int width, int height, int speed/*points skipped per frame*/, WorldBounds bounds, Queue<PointOfPath> path, boolean isOneShot, RotationDirection direction ) {
        super( INIT_X, INIT_Y, width, height, speed, bounds, direction );
        this.path = path;
        this.isOneShot = isOneShot;
        this.isAttacking = true;
        pathPointsList = new ArrayList<PointOfPath>( path );
        pointsCounter = 0;
        isDiving = false;
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


            //if in formation
            if( !isAttacking ){

                //TO IMPLEMENT MOVEMENT IN FORMATION

                direction = RotationDirection.U;

                //state in formation changer
                if( frameNumber <= GameController.getFramePerSeconds()/2 ) animationFrame = 1;
                else if( frameNumber > GameController.getFramePerSeconds()/2 ) animationFrame = 2;

            }

            //if not in formation
            else{


                //skip as many points of the path as the speed indicate, also update angle
                int pointsSkipped = 0;
                while( ( pointsSkipped < speed ) ){

                    PointOfPath nextPoint = path.poll();

                    //if going for formation
                    if( nextPoint != null ){
                        this.x = (int)nextPoint.x();
                        this.y = (int)nextPoint.y();
                    }
                    //if not just break and set not attacking
                    else { isAttacking = false; break;}

                    //update angle
                    updateAngleReachingFormation(nextPoint);
                    
                    //cycle interator
                    pointsSkipped++;
                    pointsCounter++;
                }

                //if attacking after formation
                if( isDiving ){
                    
                    //TO IMPLEMENT ATTACK MOVEMENT
                    direction = RotationDirection.D;
                }
            }
        }//end update
        
    
    public Queue<PointOfPath> getPathCopy(){ return new LinkedList<PointOfPath>( path ); }
    public boolean isAttacking(){ return isAttacking; }
    public boolean isOneShot(){ return isOneShot; }
    public int getXFromCenterX( int centerX ){ return( centerX - ( this.width/2 )); }
    public int getYFromCenterY( int centerY ){ return( centerY - ( this.height/2 )); }

    
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
        double pShotDistanceToCircleCenterSquared =    ( this.getCenterX() - pShotClosestPointToTheCircleX )*( this.getCenterX() - pShotClosestPointToTheCircleX ) + 
                                            ( this.getCenterY() - pShotClosestPointToTheCircleY )*( this.getCenterY() - pShotClosestPointToTheCircleY );

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

    private void updateAngleReachingFormation( PointOfPath newP ){

        //init radius
        int RADIUS = 5;

        // calculate startI and endI checking for bounds
        int startI = Math.max(0, pointsCounter - RADIUS);
        int endI   = Math.min(pathPointsList.size() - 1, pointsCounter + RADIUS);

        //calculate dx and dy
        double dx = pathPointsList.get( endI ).x() - pathPointsList.get( startI ).x();
        double dy = pathPointsList.get( endI ).y() - pathPointsList.get( startI ).y();

        // calculate angle
        double angle = Math.toDegrees(Math.atan2(dy, dx)) + 90; //90 to get the tangent instead of perpendicular

        // set new RotationDirection only if enough data is present (fix last positions fluttering)
        if( pathPointsList.size() - endI > RADIUS ) direction = RotationDirection.fromAngle( angle );
    }
}