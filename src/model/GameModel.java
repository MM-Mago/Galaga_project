package model;

import java.util.ArrayList;

import model.api.ModelForController;
import model.api.ModelForView;
import model.data.Initials;
import model.entities.Alien;
import model.entities.AlienShot;
import model.entities.Entity;
import model.entities.Player;
import model.entities.PlayerShot;
import shared.EntityInfo;
import shared.GameState;
import shared.SharedCostants;

public class GameModel implements ModelForView, ModelForController{

        
    //--------------------------------
    //PRIVATE STATIC FINAL VARIABLES
    //--------------------------------

    private static final int MODEL_SCREEN_WIDTH = 224;
    private static final int MODEL_SCREEN_HEIGHT = 288;
    private static final int SCORE_PER_LIFE = 70000;
    private static final int SCORE_FOR_FIRST_LIFE = 20000;
    

    //------------------
    //PRIVATE VARIABLES
    //------------------

    //model instance
    private static GameModel model;

    //game state
    private GameState state;

    //alien handler
    private static AlienHandler alienHandler;

    //four separate lists to better manage collisions
    private ArrayList<Entity> entitiesList;
    private ArrayList<Alien> aliensList; 
    private ArrayList<AlienShot> alienShotsList;
    private ArrayList<PlayerShot> playerShotsList;

    //records
    private ArrayList<Record> recordList;
    private Initials selectionInitials;

    //counters
    private int coins;
    private int lives;
    private int score;
    private int highScore;
    private int numStage;

    //player
    private Player player;
    private int activePlayerShotsCount; //number of active player shots, added in this.shoot() and removed in update()

    //frame number
    private int frameNumber;
    private int secondsInState;

    //----------------------------------
    //COSTRUCTOR + 2 SINGLETON METHODS
    //----------------------------------

    private GameModel(){

        //lists
        entitiesList = new ArrayList<Entity>();
        aliensList = new ArrayList<Alien>();
        alienShotsList = new ArrayList<AlienShot>();
        playerShotsList = new ArrayList<PlayerShot>();

        //gameState
        state = GameState.INITIAL_SCREEN;

        //init alienHandler
        alienHandler = new AlienHandler( this );

        //init player
        player = new Player();
        addEntity(player);

        //counters
        activePlayerShotsCount = 0;
        numStage = 1;
        frameNumber = 0;
        secondsInState = 0;
        coins = 0;
        lives = 3;
        score = 0;
        highScore = 20000;

    } //end costructor

    public static void initModel(){
        if( model == null ) model = new GameModel();
    } //end initView

    public static ModelForView getInstanceForView(){
        if(model == null ) throw new IllegalStateException("model not initialized! first call getInstance() ");
        return model;
    } //end getInstance

        public static ModelForController getInstanceForController(){
        if(model == null ) throw new IllegalStateException("model not initialized! first call getInstance() ");
        return model;
    } //end getInstance


    //-----------------------
    //PUBLIC STATIC METHODS
    //-----------------------

    public static int getSreenWidth(){ return MODEL_SCREEN_WIDTH; }
    public static int getSreenHeight(){ return MODEL_SCREEN_HEIGHT; }
    public static boolean isStageFull(){ return alienHandler.isStageFull(); }
    public static boolean AreAllStageAlienPathsEmpty(){ return alienHandler.AreAllStageAlienPathsEmpty(); }
    

    //------------------
    //PRIVATE METHODS
    //------------------

    //add the entity in every right list. entities has a boolean variable wich determine when to cancel them, so they can be precisely canceled from every list
    private void addEntity( Entity e ){
        entitiesList.add(e);
        if(e instanceof Alien ) aliensList.add((Alien)e);
        else if (e instanceof AlienShot ) alienShotsList.add((AlienShot)e);
        else if (e instanceof PlayerShot ){ playerShotsList.add((PlayerShot)e);}
    } //end addEntity


    //------------------------
    //PUBLIC METHODS FOR VIEW
    //------------------------
    
    //game state
    @Override
    public int getSecondsInState() { return secondsInState; }
    @Override //all Overrides repetitive but needed
    public GameState getState(){ return this.state; } //get the present state of the game

    //entities and records
    @Override
    public ArrayList<Record> getRecordList(){ return this.recordList; } //get the best five records 
    @Override
    public Initials getSelectionInitials(){ return this.selectionInitials; } //get the present initials that are being chosen
    @Override
    public ArrayList<EntityInfo> getEntityListForView(){
        
        ArrayList<EntityInfo> entityInfos = new ArrayList<EntityInfo>();

        for( Entity e: entitiesList ){
            entityInfos.add( new EntityInfo( e.getEntityName(), e.getX(), e.getY(), e.getDirection(), e.getAnimationFrame(), e.isToRemove() ) );
        }
    
        return entityInfos;

    } //get the whole list of active entities

    //game stats
    @Override
    public int getScore(){ return this.score; }
    @Override
    public int getHighScore() { return highScore; }
    @Override
    public int getLives(){ return this.lives; }
    @Override
    public int getCoins(){ return this.coins; }
    @Override
    public int getNumStage(){ return this.numStage; }


    //------------------------------
    //PUBLIC METHODS FOR CONTROLLER
    //------------------------------

    //method called by timer to skip to next frame
        @Override
        public void update( int frameNumber ){

            //save initial frame score
            int initialScore = score;


            //update frameNumber
            this.frameNumber = frameNumber; 
            if( frameNumber == SharedCostants.FRAMES_PER_SECOND ) secondsInState++;


            //--------------------------------------
            //UPDATE PRESENT ENTITIES
            //--------------------------------------

            for( Entity e: entitiesList ){
                e.update( this.frameNumber );
            }


            //--------------------------------------
            //DO ONLY IF PLAYING
            //--------------------------------------

            if( state == GameState.PLAYING ){


                //--------------------------------------
                //GET NEW ALIENS AND ADD THEM
                //--------------------------------------

                ArrayList<Alien> aliensToAdd = alienHandler.updateHandlerAndGetNewAliens( frameNumber );
                for( Alien a: aliensToAdd){ addEntity(a); }


                //--------------------------------------
                //TO DO CHECK COLLISIONS
                //--------------------------------------
                //use radius = half max dimension
                for( PlayerShot pShot: playerShotsList ){
                    for( Alien a: aliensList ){
                        if( a.checkCollisionWithPlayerShot(pShot) && a.isToRemove() ){
                            score += a.getScoreValue();
                            break; // without break would kill more than one
                        }
                    }
                }
            }
            

            //--------------------------------------
            //REMOVE ENTITIES TO REMOVE
            //--------------------------------------

            //Lambda expression wich remove all Entities set for removal, and also decrement active shots count if it's a player shot
            entitiesList.removeIf(e -> {

                //if not to remove exit now
                if (!e.isToRemove()) return false; 

                //check for player shots to decrement counter
                if (e instanceof PlayerShot) {
                    activePlayerShotsCount--;
                    playerShotsList.remove(e);
                }

                //check for aliens
                if( e instanceof Alien ) aliensList.remove(e);
                if( e instanceof AlienShot ) alienShotsList.remove(e);

                return true; 
            }); 

            

            
            //--------------------------------------
            //CHECK IF STAGE CHANGED
            //--------------------------------------

            if( (this.numStage != alienHandler.getNumStage()) && ( state == GameState.PLAYING ) ){
                state = GameState.LOADING_NOT_FIRST_STAGE;
                secondsInState = 0;
                this.numStage = alienHandler.getNumStage(); 
            }


            //--------------------------------------
            //UPDATE COUNTERS
            //--------------------------------------

            //update highScore
            if( score > highScore ) highScore = score;

            //update state
            if( state == GameState.LOADING_FIRST_STAGE && secondsInState > 6 ){
                state = GameState.PLAYING;
                secondsInState = 0;
            }
            if( state == GameState.LOADING_NOT_FIRST_STAGE && secondsInState > 4 ){
                state = GameState.PLAYING;
                secondsInState = 0;
            }

            //update lives
            if( initialScore <= SCORE_FOR_FIRST_LIFE){ // case first life
                if( SCORE_FOR_FIRST_LIFE <= score ){ // check if already gotten
                    lives++;
                }
            }
            else{ //case other lives
                int totalLifeToHaveAcquired = 1 + ( ( initialScore ) / SCORE_PER_LIFE );
                int scoreForPresentLife = ( totalLifeToHaveAcquired ) * SCORE_PER_LIFE; 
                if( initialScore < scoreForPresentLife && score >= scoreForPresentLife ){ // check if already gotten and if to get
                    lives++;
                }
            }

        }// end update 

    //add coin number +1
    @Override
    public void insertCoin(){
        this.coins ++;
        if( state == GameState.INITIAL_SCREEN){ state = GameState.COIN_INSERTED; secondsInState = 0; }
    }

    //remove coin -1
    @Override
    public void spendCoin(){
        if( this.coins > 0 ) this.coins --;
    }
    
    //start the game if coins>0 and spend coin
    @Override
    public void startGame(){
        if( coins>0){
            state = GameState.LOADING_FIRST_STAGE;
            secondsInState = 0;  //TO CHANGE LATER
            spendCoin();
        }
    }
    
    //move player position right
    @Override
    public void setPlayerMovingRight(Boolean moving){ player.setPlayerMovingRight(moving); }

    //move player position left
    @Override
    public void setPlayerMovingLeft(Boolean moving){ player.setPlayerMovingLeft(moving); }

    //make the player shoot
    @Override
    public void shoot(){
        if( this.activePlayerShotsCount < 2 ){
        PlayerShot shot = new PlayerShot( this.player );
        addEntity(shot);
        activePlayerShotsCount++;
        }
    }

    //moves between 3 letters and change them, for example if we got ABC and present letter is the middle B, calling moveLetterSelection(3,-4) will result in firstly looping back to B, then changing it to X
    @Override 
    public void moveLetterSelection( int orizontalMovement, int verticalMovement){
        //to do
    }
    
    //confirm the 3 initials displayed for the new record
    @Override
    public void confirmInitials(){
        //to do
    }

    @Override
    public void nukeAll() {
        ArrayList<Entity> listCopy = new ArrayList<Entity>(entitiesList);
        for( Entity e: listCopy ){
            switch (e.getEntityName()) {
                case PLAYER:
                    break;
                case PLAYER_SHOT:
                    break;
                case ALIEN_SHOT:
                    entitiesList.remove(e);
                    alienShotsList.remove(e);
                default:
                    if( e instanceof Alien ){
                        if( ((Alien)e).checkCollisionWith() ){
                            aliensList.remove(e);
                            entitiesList.remove(e);
                        }
                    }
            }
        }
    } // nuke all for tests
}