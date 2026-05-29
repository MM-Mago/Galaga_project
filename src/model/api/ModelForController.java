package model.api;

import shared.GameState;

public interface ModelForController {
    

    //------------------------------
    //public methods for controller
    //------------------------------

    public void update( int frameNumber ); //method called by timer to skip to next frame

    public void spendCoin(); //remove a coin -1
    public void insertCoin(); //add coin +1
    public void startGame(); //start the game if the coin number is >0
    public void setPlayerMovingRight(Boolean movement); //start or stop player right movement
    public void setPlayerMovingLeft(Boolean movement); //start or stop player left movement
    public void shoot(); //make the player shoot
    
    //get game state
    public GameState getState(); //get the present state of the game

    //for tests
    public void nukeAll();
}