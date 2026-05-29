package model.entities;

import shared.Entities;
import shared.RotationDirection;

 //max 2 bullet at the same time    
public class PlayerShot extends Entity {


    //-------------------------------------------
    //PRIVATE STATIC FINAL PLAYERSHOT VARIABLES
    //-------------------------------------------

    private static final int INIT_SPEED = 6;
    private static final int BOUNDS_MARGIN = 10;


    public PlayerShot( Player player ) {
        //ceil approssimation for odd numbers
        super( ( player.getCenterX()-( (int)Math.ceil( (double)Entities.PLAYER_SHOT.getWidth()/2) ) ), ( player.getCenterY() ), Entities.PLAYER_SHOT.getWidth(), Entities.PLAYER_SHOT.getHeight(), INIT_SPEED, RotationDirection.U );
        entityName = Entities.PLAYER_SHOT;
    }

    @Override
    public void update( int frameNumber ) {
        this.y = (this.y - this.speed );
        if (this.getY() < ( 0-BOUNDS_MARGIN ) ) {this.isToRemove = true;}
    }
}
