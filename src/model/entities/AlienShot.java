package model.entities;

import shared.Entities;
import shared.GameState;
import shared.RotationDirection;
import shared.SharedConstants;

public class AlienShot extends Entity {


    //-------------------------------------------
    //PRIVATE STATIC FINAL ALIENSHOT VARIABLES
    //-------------------------------------------

    private static final int BOUNDS_MARGIN = 10;
    private static final int DY = 2;
    private static final double MAX_DX = 1;


    //-------------------------------------------
    //PRIVATE ALIENSHOT VARIABLES
    //-------------------------------------------

    private final double DX;
    private double decimalX;
    private double decimalY;


    public AlienShot( Alien a, Player p ) {
        super(( a.getCenterX()-( (int)Math.ceil( (double)Entities.ALIEN_SHOT.getWidth()/2) ) ), ( a.getCenterY() ), Entities.ALIEN_SHOT.getWidth(), Entities.ALIEN_SHOT.getHeight(), DY, RotationDirection.D );
        entityName = Entities.ALIEN_SHOT;
        if( p.getCenterX() == a.getCenterX() ) DX = 0;
        else{

            int xDifference =  p.getCenterX() - a.getCenterX();
            int yDifference = Math.abs( p.getCenterY() - a.getCenterY());
        
            double dx = xDifference / ( (double)yDifference / DY );
            //check for max DX
            
            if( dx > 0 ) DX = Math.min( dx, MAX_DX );
            else DX = Math.max(dx, -MAX_DX );
        }
        decimalX = x;
        decimalY = y;
            

    }//end costructor

    @Override
    public void update( int frameNumber, int secondsInState, GameState state ) {
        this.decimalX += DX;
        this.decimalY += DY;
        this.x = (int)(decimalX + DX );
        this.y = (int)(decimalY + DY );
        if (this.getY() > ( SharedConstants.MODEL_SCREEN_HEIGHT + BOUNDS_MARGIN ) ) {this.isToRemove = true;}
    }//end update

    public boolean checkCollisionWith( Entity entity ){
        boolean didCollide = false;

        if( entity instanceof EntityKiller ){
            didCollide = true;
            isToRemove = true;
        }
        else if ( entity instanceof Player ){

            //for player uses radius big as min dimension

            //calculate radius squared
            double radius = Math.min( entity.width, entity.height)/2;
            double radiusSquared = radius*radius;
            //calculate closest point of shot to the player circle
            double shotXMin = this.getX();
            double shotXMax = this.getX() + this.getWidth();
            double shotYMin = this.getY();
            double shotYMax = this.getY() + this.getHeight();
            double shotClosestPointToTheCircleX = ( Math.min( shotXMax, Math.max(entity.getCenterX(), shotXMin)));
            double shotClosestPointToTheCircleY = ( Math.min( shotYMax, Math.max(entity.getCenterY(), shotYMin)));
            double shotDistanceToCircleCenterSquared = ( entity.getCenterX() - shotClosestPointToTheCircleX )*( entity.getCenterX() - shotClosestPointToTheCircleX ) + 
                                                        ( entity.getCenterY() - shotClosestPointToTheCircleY )*( entity.getCenterY() - shotClosestPointToTheCircleY ) ;

            //check if closest point is less than radius of alien circle
            if( shotDistanceToCircleCenterSquared < radiusSquared ){
                
                entity.isToRemove = true;
                didCollide = true;
                this.isToRemove = true;
            }
        }
        return didCollide;
    }//end checkCollisionsWith

}