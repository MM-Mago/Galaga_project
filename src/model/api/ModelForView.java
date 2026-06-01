package model.api;

import java.util.ArrayList;
import java.util.LinkedList;

import shared.EntityInfo;
import shared.Events;
import shared.GameState;

public interface ModelForView {
    

    //------------------------
    //public methods for view
    //------------------------
    
    //game state
    public GameState getState(); //get the present state of the game
    public int getSecondsInState(); //get seconds passed in a certain state

    //entities
    public ArrayList<EntityInfo> getEntityInfoListForView(); //get a list of EntityInfo records

    //game stats
    public int getScore();
    public int getHighScore();
    public int getLives();
    public int getCoins();
    public int getNumStage();

    //event
    public LinkedList<Events> getEventsQueue();

}