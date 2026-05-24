package model.entities;

import shared.Entities;
import shared.RotationDirection;
import shared.SharedConstants;

//da fare con singleton
public class Player extends Entity {


    //----------------------------------------
    //PRIVATE STATIC FINAL PLAYER VARIABLES
    //----------------------------------------

    private static final int INIT_X = 105;
    private static final int INIT_Y = 255;
    private static final int INIT_SPEED = 2;
    private static final int X_BOUNDS_MARGIN = 2;


    //----------------------------
    //PRIVATE PLAYER VARIABLES
    //----------------------------
    
    private boolean isPlayerMovingRight; //utilizzate così per avere un movimento fluido
    private boolean isPlayerMovingLeft;


    //------------------
    //COSTRUCTOR
    //------------------

    public Player(){
        super( INIT_X, INIT_Y, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight(), INIT_SPEED, RotationDirection.U );
        entityName = Entities.PLAYER;
    }


    //------------------------
    //PUBLIC ENTITY METHODS
    //------------------------

    @Override
    public void update( int frameNumber ){

        //update position
        if(isPlayerMovingRight) this.x = ( this.x + this.speed );
        if(isPlayerMovingLeft) this.x = ( this.x - this.speed );

        //fix if out of bounds
        fixCoordIfPlayerOutOfBounds();

    }//end player update method


    //---------------------------
    //PUBLIC PLAYER METHODS
    //---------------------------

    public void fixCoordIfPlayerOutOfBounds(){

        //left out of bounds
        if(this.x - X_BOUNDS_MARGIN < 0) this.x = X_BOUNDS_MARGIN;
        //right out of bounds
        if(this.x + this.width + X_BOUNDS_MARGIN > SharedConstants.MODEL_SCREEN_WIDTH) this.x = SharedConstants.MODEL_SCREEN_WIDTH - this.width - X_BOUNDS_MARGIN;
    }

    public void setPlayerMovingRight(Boolean moving){ this.isPlayerMovingRight = moving; }
    public void setPlayerMovingLeft(Boolean moving){ this.isPlayerMovingLeft = moving; }

    
    //-----------------
    //COLLISION METHOD
    //-----------------

    public boolean checkCollisionWithAlienShot(AlienShot aShot) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'checkCollisionWith'");
    }
}