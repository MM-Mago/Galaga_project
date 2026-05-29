package view;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.imageio.ImageIO;

import model.api.ModelForView;
import shared.GameState;
import shared.SharedConstants;


//TO DO STOP AT LOADING

//------------------------------------------------------------------------------------------------
//THIS CLASS IS ONLY USED TO PAINT THE BACKGROUND WITH THE RIGHT FRAMES
//------------------------------------------------------------------------------------------------

//EVERYTHING PACKAGE-PROTECTED OR PRIVATE
public class BackgroundPainter {
    
    

    //--------------------------------
    //PRIVATE STATIC VARIABLES
    //--------------------------------

    private static int oldViewFrame; //used to not increase DY in case of infra-frame repaint
    private static int presentFrame;
    private static int presentDY;
    private final static int MAX_FRAME_INDEX = 3;
    private final static String FRAME_0_PATH = "src//view//galaga_png//background-frame-0.png" ;
    private final static String FRAME_1_PATH = "src//view//galaga_png//background-frame-1.png" ;
    private final static String FRAME_2_PATH = "src//view//galaga_png//background-frame-2.png" ;
    private final static String FRAME_3_PATH = "src//view//galaga_png//background-frame-3.png" ;
    private static ArrayList<BufferedImage> frameList;
    private static BufferedImage FRAME_0;
    private static BufferedImage FRAME_1;
    private static BufferedImage FRAME_2;
    private static BufferedImage FRAME_3;
    
    //--------------------------------
    //PRIVATE COSTRUCTOR
    //--------------------------------

    private BackgroundPainter(){}


    //--------------------------------
    //PACKAGE-PRIVATE STATIC METHODS
    //--------------------------------

    static void initBackgroundPainter(){

        //load images
            try {
                FRAME_0 = ImageIO.read(new File(FRAME_0_PATH) );
                FRAME_1 = ImageIO.read(new File(FRAME_1_PATH) );
                FRAME_2 = ImageIO.read(new File(FRAME_2_PATH) );
                FRAME_3 = ImageIO.read(new File(FRAME_3_PATH) );

            } catch (IOException e) { e.printStackTrace(); }
    
        //init variables
        presentFrame = 0;
        presentDY = 0;
        frameList = new ArrayList<BufferedImage>();
        frameList.add( FRAME_0 );
        frameList.add( FRAME_1 );
        frameList.add( FRAME_2 );
        frameList.add( FRAME_3 );        

    }// end initBackgroundPainter

    static void paintBackrgound( Graphics g, int frameOfview, ModelForView model ){

        g = (Graphics2D)g;
        Color oldColor = g.getColor();

        final int MAX_BACKGROUND_DY = SharedConstants.MODEL_SCREEN_WIDTH;
        GameState gameState = model.getState();
        int secondsInState = model.getSecondsInState();

        //check if initialized
        if( FRAME_0 == null ||  FRAME_1 == null ||  FRAME_2 == null ||  FRAME_3 == null ){
            throw new IllegalStateException( "first initialize BackgroundPainter class");
        }


        //update frame counter every eight of a second
        int frameChagesPerSecond = 8;
        presentFrame = ( frameOfview / frameChagesPerSecond ) % (MAX_FRAME_INDEX + 1);
        if( presentFrame > MAX_FRAME_INDEX ) presentFrame = 0;


        //paint space background in 3 sequencial Ys
        g.drawImage( frameList.get( presentFrame ), 0, presentDY, null );
        g.drawImage( frameList.get( presentFrame ), 0, ( - MAX_BACKGROUND_DY + presentDY), null );
        g.drawImage( frameList.get( presentFrame ), 0, ( MAX_BACKGROUND_DY + presentDY), null );


        //update DX only in correct states and only if frame changed
        if( oldViewFrame != frameOfview ){
            if( gameState == GameState.INITIAL_SCREEN || gameState == GameState.COIN_INSERTED || gameState == GameState.PLAYING || gameState == GameState.LOADING_NOT_FIRST_STAGE || ( gameState == GameState.LOADING_FIRST_STAGE && secondsInState > 3 ) ) presentDY++;
            if( presentDY >= MAX_BACKGROUND_DY) presentDY = 0;
        }

        //set oldViewFrame
        oldViewFrame = frameOfview;

        g.setColor(oldColor);
    }// end paintBackground
}