package controller;

import javax.swing.Timer;

import controller.api.ActionHandlerForView;
import controller.api.ControllerForMain;
import model.api.ModelForController;
import shared.GameState;
import shared.SharedCostants;
import view.api.ViewForController;

public class GameController implements ControllerForMain, ActionHandlerForView {
        

    //------------------
    //COSTANTS
    //------------------

    private static final int FRAMES_PER_SECOND = SharedCostants.FRAMES_PER_SECOND;
    private static final int MILLISECONDS_PER_FRAME = (int)(1000/FRAMES_PER_SECOND);
    

    //------------------
    //STATIC VARIABLES
    //------------------

    private static GameController controller;


    //------------------
    //PRIVATE VARIABLES
    //------------------

    private ViewForController view;
    private ModelForController model;
    private Timer timer;
    private int frameNumber; //number from 1 to FRAME_PER_SECOND


    //-----------------------------------
    //COSTRUCTOR + 2 SINGLETON METHODS
    //-----------------------------------

    private GameController( ViewForController view, ModelForController model ){

        this.view = view;
        this.model = model;

        //ask view to manage imputs
        view.setupInputs(this);

        //initialize timer
        initTimer();

        frameNumber = 0;
        
    } //end costructor

    public static void initController( ViewForController view, ModelForController model ){
        if( controller == null ) controller = new GameController( view, model );
    } //end initView

    public static ControllerForMain getInstanceForMain(){
        if(controller == null ) throw new IllegalStateException("controller not initialized! first call getInstance( view, model)");
        return controller;
    } //end getInstance

    public static ActionHandlerForView getIstanceForView(){
        if(controller == null ) throw new IllegalStateException("controller not initialized! first call getInstance( view, model)");
        return controller;
    }


    //------------------------
    //PRIVATE METHODS
    //------------------------

    private void initTimer(){
        
        //lambda espression for slimmer code, with also frame number update
        this.timer = new Timer(MILLISECONDS_PER_FRAME,( e ) -> { updateFramenumber(); model.update( frameNumber ); view.refresh( frameNumber ); }); //can't use:: cause of multiple methods
    }

    private void updateFramenumber(){
        if( this.frameNumber > FRAMES_PER_SECOND ) this.frameNumber = 0;
        this.frameNumber++;
    }

    
    //---------------------------------------
    //PUBLIC METHODS FOR VIEW
    //---------------------------------------

    @Override
    public void cmdMovingLeft( boolean active ){
        GameState state = model.getState();
        switch( state ) {
            case PLAYING, LOADING_NOT_FIRST_STAGE:
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
            case PLAYING, LOADING_NOT_FIRST_STAGE:
                model.setPlayerMovingRight(active);
                break;

            default:
                break;
        }
    }//end cmdMovingRight

    @Override
    public void cmdCoinInserted(){
        model.insertCoin();
    }//end cmdCoingInserted

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

    @Override
    public void startTimer(){
        timer.start();
    }

    @Override
    public void stopTimer(){
        timer.stop();
    }
}