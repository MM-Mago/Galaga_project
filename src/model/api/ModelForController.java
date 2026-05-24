package model.api;

import java.util.List;

import model.data.Initials;
import model.data.WorldBounds;
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
    public void moveLetterSelection( int orizontalMovement, int verticalMovement); //moves between 3 letters and change them, for example if we got ABC and present letter is the middle B, calling moveLetterSelection(3,-4) will result in firstly looping back to B, then changing it to X 
    public void confirmInitials(); //confirm the 3 initials displayed for the new record

    //game state
    public GameState getState(); //get the present state of the game
    public WorldBounds getBounds(); //get the world bounds dimensions
    public int getSecondsInState(); //get seconds passed in a certain state

    //entities and records
    public List<Record> getRecordList(); //get the best five records 
    public Initials getSelectionInitials(); //get the present initials that are being chosen

    //game stats
    public int getScore();
    public int getHighScore();
    public int getLives();
    public int getCoins();
    public int getNumStage();

    //for tests
    public void nukeAll();
}