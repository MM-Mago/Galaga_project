package model.entities;

import shared.Entities;
import shared.GameState;
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
    private int dyingFrameNumber;


    //------------------
    //COSTRUCTOR
    //------------------

    public Player(){
        super( INIT_X, INIT_Y, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight(), INIT_SPEED, RotationDirection.U );
        entityName = Entities.PLAYER;
        dyingFrameNumber = -1;
    }


    //------------------------
    //PUBLIC ENTITY METHODS
    //------------------------

    @Override
    public void update( int frameNumber, int secondsInState, GameState state ){

        //update position if playing
        if( state != GameState.LIFE_LOST  ){
            if(isPlayerMovingRight) this.x = ( this.x + this.speed );
            if(isPlayerMovingLeft) this.x = ( this.x - this.speed );
        }

        //fix if out of bounds
        fixCoordIfPlayerOutOfBounds();

        //check if killed and start dying animation
        if( isToRemove == true ){

            //stop movement
            isPlayerMovingLeft = false;
            isPlayerMovingRight = false;

            //set initial frameNumber
            if( dyingFrameNumber == -1 ) dyingFrameNumber = frameNumber;
            final int FRAMES_PER_SPRITE = 12;
            //update sprites every n frames
            if( ( frameNumber - dyingFrameNumber) % FRAMES_PER_SPRITE == 0 ) animationFrame ++;
            //check for animation ending
            if( animationFrame > 5 ){
                animationFrame = 0;
                dyingFrameNumber = -1;
                isToRemove = false;
                x = INIT_X;
                y = INIT_Y;
            }
        }
        //if state back to playing
        if( state == GameState.PLAYING ){
            isToRemove = false;
            animationFrame = 1;
        }


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