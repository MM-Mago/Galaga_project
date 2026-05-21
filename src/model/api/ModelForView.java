package model.api;

import java.util.ArrayList;
import java.util.List;

import model.data.Initials;
import model.data.WorldBounds;
import shared.EntityInfo;
import shared.GameState;

public interface ModelForView {
    

    //------------------------
    //public methods for view
    //------------------------
    
    //game state
    public GameState getState(); //get the present state of the game
    public WorldBounds getBounds(); //get the world bounds dimensions
    public int getSecondsInState(); //get seconds passed in a certain state

    //entities and records
    public List<Record> getRecordList(); //get the best five records 
    public Initials getSelectionInitials(); //get the present initials that are being chosen
    public ArrayList<EntityInfo> getEntityListForView(); //get a list of EntityInfo records

    //game stats
    public int getScore();
    public int getHighScore();
    public int getLives();
    public int getCoins();
    public int getNumStage();

}