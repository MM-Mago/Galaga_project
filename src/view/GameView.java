package view;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.LinkedList;

import javax.swing.JFrame;
import javax.swing.JPanel;

import model.api.ModelForView;
import shared.Events;
import shared.SharedConstants;
import view.api.ViewForController;
import controller.api.ActionHandlerForView;

public class GameView extends JPanel implements ViewForController, KeyListener{
    
    
    //--------------------------------
    //PRIVATE STATIC FINAL COSTANTS
    //--------------------------------

    private static final int GAME_PANEL_WIDTH = 448;
    private static final int GAME_PANEL_HEIGHT = 576;

    
    //------------------
    //PRIVATE VARIABLES
    //------------------

    private static GameView view;
    private ModelForView model;
    private ActionHandlerForView actionHandler;
    private JFrame gameFrame;

    private double scaleX;
    private double scaleY;

    private int frameNumber;// number from 1 to GameController.getFramePerSeconds()
    

    //------------------------------------
    //COSTRUCTOR + 2 SINGLETON METHODS
    //------------------------------------

    private GameView( ModelForView model ){

        //reference to model
        this.model = model;

        //init frameNumber
        frameNumber = 0;

        //init BackgroundPainter
        BackgroundPainter.initBackgroundPainter();

        //init spriteLibrary
        SpriteLibrary.initSprites();

        //init soundManager
        SoundManager.initSoundManager();

        //init frame and panel
        initGameFrame();
        final int X_OFFSET_CORRECTION = 0;
        final int Y_OFFSET_CORRECTION = 0;
        this.setPreferredSize( new Dimension(GAME_PANEL_WIDTH + X_OFFSET_CORRECTION, GAME_PANEL_HEIGHT + Y_OFFSET_CORRECTION ) ); //numbers to fix offset

        //compose window
        gameFrame.add(this);
        gameFrame.setVisible(true);
        gameFrame.pack();

    } //end costructor

    public static ViewForController initView( ModelForView model ){
        if( view == null ) view = new GameView( model );
        return view;
    } //end initView

    public static ViewForController getInstanceForController(){
        if(view == null ) throw new IllegalStateException("view not initialized! first call getInstance(model) ");
        return view;
    } //end getInstance
    

    //-------------------------
    //JPANEL IMPLEMENTATION
    //-------------------------

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Color oldColor = g.getColor();

        //update scale
        this.updateScale((Graphics2D)g);
        
        //paint space background
        BackgroundPainter.paintBackrgound( (Graphics2D)g, frameNumber, model );

        //paint all entities
        EntityPainter.paintEntities((Graphics2D)g, model.getEntityInfoListForView(), model );

        //paint interface
        InterfacePainter.paintInterface((Graphics2D)g, frameNumber, model );

        //paint external overlay
        int margin = 20;
        g.fillRect( SharedConstants.MODEL_SCREEN_WIDTH , 0, this.getWidth() - SharedConstants.MODEL_SCREEN_WIDTH + margin, this.getHeight() + margin );
        g.fillRect( 0 , SharedConstants.MODEL_SCREEN_HEIGHT, this.getWidth() + margin, this.getHeight() - SharedConstants.MODEL_SCREEN_HEIGHT + margin );


        g.setColor(oldColor);
    }

    
    //---------------------------
    //PACKAGE-PROTECTED METHODS
    //---------------------------

    int getFrameNumber(){ return frameNumber; }

    //--------------------
    //PRIVATE METHODS
    //--------------------

    private void initGameFrame(){

        this.gameFrame = new JFrame("Galaga");
        gameFrame.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );

    }//end initGameFrame

    private void updateScale( Graphics2D g2d ){

        this.scaleX = GAME_PANEL_WIDTH/SharedConstants.MODEL_SCREEN_WIDTH;
        this.scaleY = GAME_PANEL_HEIGHT/SharedConstants.MODEL_SCREEN_HEIGHT;
        double scale = Math.min( this.scaleX, this.scaleY );
        g2d.scale(scale, scale);
        
    }//end updateScale


    //--------------------------------
    //PUBLIC METHODS FOR CONTROLLER
    //--------------------------------

    //listener setups
    public void setupInputs( ActionHandlerForView actionHandler ){
        this.actionHandler = actionHandler;
        this.addKeyListener(this);
        this.setFocusable(true); //so that key inputs can be focused on it
        this.requestFocusInWindow(); //set focus on this view
    }

    //view refresh
    public void refresh( int frameNumber ){

        //update frameNumber
        this.frameNumber = frameNumber;

        //paint everything again
        this.repaint();
        
        //play a sound if needed
        LinkedList<Events> eventsList = model.getEventsQueue();
        SoundManager.playSounds( eventsList );

        //to do...........
    }


    //------------------------
    //KEYLISTENER METHODS
    //------------------------

    @Override
    public void keyTyped(KeyEvent e) {} //never used
    
    @Override
    public void keyPressed(KeyEvent e) {
        int key = e.getKeyCode();
        switch (key) {

            case KeyEvent.VK_C:
                actionHandler.cmdCoinInserted();
                break;

            case KeyEvent.VK_LEFT:
                actionHandler.cmdMovingLeft( true );
                break;

            case KeyEvent.VK_RIGHT:
                actionHandler.cmdMovingRight( true );
                break;
            
            case KeyEvent.VK_SPACE:
                actionHandler.cmdAction();
                break;
            
            case KeyEvent.VK_N: // only for test
                actionHandler.cmdNukeAll();
                break;

            default:
                break;
        }
    }//end keyPressed

    @Override
    public void keyReleased(KeyEvent e) {
        int key = e.getKeyCode();
        switch (key) {

            case KeyEvent.VK_LEFT:
                actionHandler.cmdMovingLeft( false );
                break;

            case KeyEvent.VK_RIGHT:
                actionHandler.cmdMovingRight( false );
                break;
            
            default:
                break;
        }
    }//end keyReleased
}