package controller;

import controller.api.ActionHandlerForView;
import controller.api.ControllerForMain;
import model.api.ModelForController;
import shared.GameState;
import shared.SharedConstants;
import view.api.ViewForController;

public class GameController implements ControllerForMain, ActionHandlerForView {


    //------------------
    //COSTANTS
    //------------------

    private static final int FRAMES_PER_SECOND = SharedConstants.FRAMES_PER_SECOND;
    private static final int MILLISECONDS_PER_FRAME = (int)Math.round(1000.0/FRAMES_PER_SECOND);
    

    //------------------
    //STATIC VARIABLES
    //------------------

    private static GameController controller;


    //------------------
    //PRIVATE VARIABLES
    //------------------

    private ViewForController view;
    private ModelForController model;
    private int frameNumber; //number from 1 to FRAME_PER_SECOND


    //-----------------------------------
    //COSTRUCTOR + 3 SINGLETON METHODS
    //-----------------------------------

    private GameController( ViewForController view, ModelForController model ){

        this.view = view;
        this.model = model;

        //ask view to manage imputs
        view.setupInputs(this);

        frameNumber = 0;

    } //end costructor

    public static void initController( ViewForController view, ModelForController model ){
        if( controller == null ) controller = new GameController( view, model );
    } //end initView

    public static ControllerForMain getInstanceForMain(){
        if(controller == null ) throw new IllegalStateException("controller not initialized! first call getInstance( view, model)");
        return controller;
    } //end getInstanceForMain

    //------------------------
    //PRIVATE METHODS
    //------------------------

    private void updateFramenumber(){
        if( this.frameNumber >= FRAMES_PER_SECOND ) this.frameNumber = 0;
        this.frameNumber++;
    }

    
    //---------------------------------------
    //PUBLIC METHODS FOR VIEW
    //---------------------------------------

    @Override
    public void cmdMovingLeft( boolean active ){
        GameState state = model.getState();
        switch( state ) {
            case PLAYING, LOADING_NOT_FIRST_STAGE, LIFE_LOST:
                model.setPlayerMovingLeft(active);
                break;

            default:
                break;
        }
    }//end cmdMovingLeft

    @Override
    public void cmdMovingRight( boolean active){
        GameState state = model.getState();
        switch( state )  {
            case PLAYING, LOADING_NOT_FIRST_STAGE, LIFE_LOST:
                model.setPlayerMovingRight(active);
                break;

            default:
                break;
        }
    }//end cmdMovingRight

    @Override
    public void cmdCoinInserted(){
        model.insertCoin();
    }//end cmdCoinInserted

    @Override
    public void cmdAction(){
        GameState state = model.getState();
        switch (state) {
            case COIN_INSERTED:
                model.startGame();
                break;
        
            case PLAYING:
                model.shoot();
                break;

            case LOADING_NOT_FIRST_STAGE:
                model.shoot();
                break;

            default:
                break;
        }
    }//end cmdAction

    @Override
    public void cmdNukeAll() {
        model.nukeAll();
    }


    //------------------------------
    //PUBLIC METHODS FOR MAIN
    //------------------------------

    /** Called once per frame by the platform-specific entry point (Swing timer or rAF). */
    @Override
    public void tick(){
        updateFramenumber();
        model.update( frameNumber );
        view.refresh( frameNumber );
    }

    /** Update model only (no rendering). Useful when running multiple fixed-step updates per frame. */
    public void updateModelOnly(){
        updateFramenumber();
        model.update(frameNumber);
    }

    /** Render the view once after model updates. */
    public void renderView(){
        view.refresh(frameNumber);
    }
}