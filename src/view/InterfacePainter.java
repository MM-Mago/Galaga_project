package view;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.util.ArrayList;

import model.api.ModelForView;
import shared.Entities;
import shared.GameState;
import shared.RotationDirection;
import shared.SharedConstants;

//------------------------------------------------------------------------------------------------
//THIS CLASS IS ONLY USED TO PAINT ALL THE ENTITIES IN THE LIST USING THE RIGHT SPRITES
//------------------------------------------------------------------------------------------------

//EVERYTHING PACKAGE-PROTECTED OR PRIVATE
class InterfacePainter {
    

    //--------------------------------
    //PRIVATE COSTRUCTOR
    //--------------------------------

    private InterfacePainter(){}


    //--------------------------------
    //PACKAGE-PRIVATE STATIC METHODS
    //--------------------------------
    
    static void paintInterface( Graphics2D g, int frameOfView, ModelForView model ){
        
        Color oldColor = g.getColor();

        final int FRAMES_PER_SECOND = SharedConstants.FRAMES_PER_SECOND;
        final int UNSCALED_MAX_WIDTH = SharedConstants.MODEL_SCREEN_WIDTH;
        final int UNSCALED_MAX_HEIGHT = SharedConstants.MODEL_SCREEN_HEIGHT;

        final int SPRITE_MODEL_WIDTH = 76;
        final int SPRITE_MODEL_HEIGHT = 8;

        final GameState gameState = model.getState();
        final int numStage = model.getNumStage();
        final int score = model.getScore();
        final int highScore = model.getHighScore();
        final int lives = model.getLives();
        final int secondsInState = model.getSecondsInState();
        final int credits = model.getCoins();

        //------------------------------
        //THINGS TO PAINT IN ANY CASE
        //------------------------------

        //1UP, WICH HAS TO FLASH 2 TIMES A SECOND
        final int FLASHES_PER_SECOND = 2;
        final int ONE_UP_OFFSET = 20;
        if( gameState != GameState.INITIAL_SCREEN && gameState != GameState.COIN_INSERTED && gameState != GameState.GAME_OVER ){
            if( ( frameOfView / ( FRAMES_PER_SECOND / (FLASHES_PER_SECOND*2) ) ) % FLASHES_PER_SECOND == 0 ) g.drawImage(SpriteLibrary.getSprite("1UP"), ONE_UP_OFFSET, 1, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);
        }
        else{
            g.drawImage(SpriteLibrary.getSprite("1UP" ), ONE_UP_OFFSET, 1, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);
        }

        //HIGH SCORE TEXT
        g.drawImage(SpriteLibrary.getSprite("HIGH_SCORE" ), 77, 1, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);

        //HIGH SCORE
        paintNumberFromRightToLeft(g, highScore, "WHITE", ( 55 + SPRITE_MODEL_WIDTH ), ( SPRITE_MODEL_HEIGHT + 1 ) );
        
        //------------------------------
        //SPRITES ONLY IN SOME STATES
        //------------------------------

        //CREDITS COUNTER
        if( gameState == GameState.INITIAL_SCREEN || gameState == GameState.COIN_INSERTED|| ( gameState == GameState.LOADING_FIRST_STAGE && secondsInState < 4 ) ){
            final int margin = 1;
            g.drawImage(SpriteLibrary.getSprite("CREDIT" ), Entities.PLAYER.getWidth(), (UNSCALED_MAX_HEIGHT - SPRITE_MODEL_HEIGHT - margin), SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);
            paintNumberFromLeftToRight(g, credits, "WHITE", Entities.PLAYER.getWidth()*4,(UNSCALED_MAX_HEIGHT - SPRITE_MODEL_HEIGHT - margin) );
        }

        //LIVES SPRITES
        if( ( gameState == GameState.LOADING_FIRST_STAGE && secondsInState > 3 ) || gameState == GameState.PLAYING ||  gameState == GameState.LIFE_LOST || gameState == GameState.LOADING_NOT_FIRST_STAGE ){
            for( int i = 0; i < ( lives - 1 ) && ( i < 8 ); i++ ){
                final int pWidth = Entities.PLAYER.getWidth();
                final int pHeight = Entities.PLAYER.getHeight();
                final int margin = 2;
                final int separator = 2;
                g.drawImage( SpriteLibrary.getSprite( Entities.PLAYER, RotationDirection.U, 1 ), ( (pWidth  + separator)*i + margin ) , UNSCALED_MAX_HEIGHT - pHeight, pWidth, pHeight, null );
            }
        }

        //GALAGA TEXT
        if( gameState == GameState.INITIAL_SCREEN ){
            if( secondsInState > 0 ){
                BufferedImage sprite = SpriteLibrary.getSprite("GALAGA");
                int offSet = 22;
                int xSprite = ( UNSCALED_MAX_WIDTH/2 ) - offSet;
                int ySprite = Entities.PLAYER.getHeight()*2;
                g.drawImage( sprite, xSprite, ySprite, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null );
            }
        }

        //SCORE TEXT
        if( gameState == GameState.INITIAL_SCREEN ){
            if( secondsInState > 1 ){
                BufferedImage sprite = SpriteLibrary.getSprite("SCORE");
                int offSet = 40;
                int xSprite = ( UNSCALED_MAX_WIDTH/2 ) - offSet;
                int ySprite = Entities.PLAYER.getHeight()*3 + SPRITE_MODEL_HEIGHT;
                g.drawImage( sprite, xSprite, ySprite, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null );
            }
        }

        //50_100 AND ZAKO
        if( gameState == GameState.INITIAL_SCREEN ){
            if( secondsInState > 2 ){
                BufferedImage sprite = SpriteLibrary.getSprite("50_100");
                int offsetX = 15;
                int zakoOffsetX = 40;
                int zakoOffsetY = 4;
                int xSprite = ( UNSCALED_MAX_WIDTH/2 ) - offsetX;
                int ySprite = Entities.PLAYER.getHeight()*4 + SPRITE_MODEL_HEIGHT*2;
                g.drawImage( sprite, xSprite, ySprite, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null );

                //used player dimensions because of default sprite dimensions
                if( frameOfView < ( FRAMES_PER_SECOND) / 2 ){
                    g.drawImage( SpriteLibrary.getSprite(Entities.ZAKO, RotationDirection.U, 1), xSprite - zakoOffsetX, ySprite - zakoOffsetY, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight(), null );
                }
                else g.drawImage( SpriteLibrary.getSprite(Entities.ZAKO, RotationDirection.U, 2), xSprite - zakoOffsetX, ySprite - zakoOffsetY, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight(), null );
            }
        }

        //80_160 AND GOEI
        if( gameState == GameState.INITIAL_SCREEN ){
            if( secondsInState > 3 ){
                BufferedImage sprite = SpriteLibrary.getSprite("80_160");
                int offsetX = 15;
                int goeiOffsetX = 40;
                int goeiOffsetY = 4;
                int xSprite = ( UNSCALED_MAX_WIDTH/2 ) - offsetX;
                int ySprite = Entities.PLAYER.getHeight()*5 + SPRITE_MODEL_HEIGHT*3;
                g.drawImage( sprite, xSprite, ySprite, SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null );

                //used player dimensions because of default sprite dimensions
                if( frameOfView < ( FRAMES_PER_SECOND / 2 ) ){
                    g.drawImage( SpriteLibrary.getSprite(Entities.GOEI, RotationDirection.U, 1), xSprite - goeiOffsetX, ySprite - goeiOffsetY, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight(), null );
                }
                else g.drawImage( SpriteLibrary.getSprite(Entities.GOEI, RotationDirection.U, 2), xSprite - goeiOffsetX, ySprite - goeiOffsetY, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight(), null );
            }
        }

        //COIN_INSERTED_SCREEN
        if( gameState == GameState.COIN_INSERTED ){
            g.drawImage( SpriteLibrary.getSprite( "COIN_INSERTED_SCREEN" ), 0, 0, UNSCALED_MAX_WIDTH, UNSCALED_MAX_HEIGHT, null);
            for( int i = 0; i < 3; i++ ){
                int animationFrame = 1;
                BufferedImage player = SpriteLibrary.getSprite( Entities.PLAYER, RotationDirection.U, animationFrame );
                int playerWidth = Entities.PLAYER.getWidth();
                int playerHeight = Entities.PLAYER.getHeight();
                int yOffset = 4;
                g.drawImage( (player),  (playerWidth/2),  (int)(playerWidth*(8 + 1.5*i) + yOffset ), (playerWidth), (playerHeight), null);
            }
        }

        //SCORE NUMBER
        if( gameState != GameState.INITIAL_SCREEN && gameState != GameState.COIN_INSERTED ){
            int yMargin = 1;
            int xMargin = 41;
            int xMarginForZero = 33;
            if( score < 10 ){
            paintNumberFromRightToLeft(g, score, "WHITE", xMargin, SPRITE_MODEL_HEIGHT + yMargin );
            paintNumberFromRightToLeft(g, 0, "WHITE", xMarginForZero , SPRITE_MODEL_HEIGHT + yMargin );

            }
            paintNumberFromRightToLeft(g, score, "WHITE", xMargin, SPRITE_MODEL_HEIGHT + yMargin );
        }

        //PLAYER 1 TEXT
        if( gameState == GameState.LOADING_FIRST_STAGE && ( secondsInState < 4 || secondsInState > 5 ) ){
            final int tempPlayerNumber = 1;
            final int tempOffsetY;
            final int tempOffsetX = -35;
            final int tempNumberOffsetX = 20;
            BufferedImage playerTempImg = SpriteLibrary.getSprite( "PLAYER" );
            if( secondsInState < 4 ){
                tempOffsetY = 2;
                g.drawImage( playerTempImg, ( UNSCALED_MAX_WIDTH / 2 + tempOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) + tempOffsetY ), SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);
                paintNumberFromLeftToRight(g, tempPlayerNumber, "BLUE", ( UNSCALED_MAX_WIDTH / 2 + tempNumberOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) + tempOffsetY ) );
            }
            else{
                tempOffsetY = -2;
               g.drawImage( playerTempImg, ( UNSCALED_MAX_WIDTH / 2 + tempOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) - ( playerTempImg.getHeight() / 2 ) + tempOffsetY ), SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);
                paintNumberFromLeftToRight(g, tempPlayerNumber, "BLUE", ( UNSCALED_MAX_WIDTH / 2 + tempNumberOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) - ( playerTempImg.getHeight() / 2 ) + tempOffsetY ) );
            }
        }

        //STAGE N TEXT
        if( ( ( gameState == GameState.LOADING_FIRST_STAGE && ( secondsInState > 3 ) ) || ( gameState == GameState.LOADING_NOT_FIRST_STAGE && secondsInState > 1 ) ) && ( ( numStage - 3 ) % 4 != 0 ) ){
            final int tempOffsetY = +2;
            final int tempOffsetX = -35;
            final int tempNumberOffsetX = 10;
            BufferedImage stageTempImg = SpriteLibrary.getSprite( "STAGE" );
            g.drawImage( stageTempImg, ( UNSCALED_MAX_WIDTH / 2 + tempOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) + tempOffsetY ), SPRITE_MODEL_WIDTH, SPRITE_MODEL_HEIGHT, null);
            paintNumberFromLeftToRight(g, model.getNumStage(), "BLUE", ( UNSCALED_MAX_WIDTH / 2 + tempNumberOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) + tempOffsetY ) );
        }    
        //CHALLENGING STAGE TEXT
        else if( ( ( gameState == GameState.LOADING_FIRST_STAGE && ( secondsInState > 3 ) ) || ( gameState == GameState.LOADING_NOT_FIRST_STAGE && secondsInState > 1 ) ) && ( ( numStage - 3 ) % 4 == 0 ) ){
            final int tempOffsetY = +2;
            final int tempOffsetX = -70;
            BufferedImage challengingStageIMG = SpriteLibrary.getSprite("CHALLENGING_STAGE" );
            //draw with width scaled as height
            g.drawImage( challengingStageIMG, ( UNSCALED_MAX_WIDTH / 2 + tempOffsetX ), ( ( UNSCALED_MAX_HEIGHT / 2 ) + tempOffsetY ), ( challengingStageIMG.getWidth() / challengingStageIMG.getHeight() * SPRITE_MODEL_HEIGHT), SPRITE_MODEL_HEIGHT, null);
        }  

        //MEDALS
        if( gameState == GameState.LOADING_FIRST_STAGE && ( secondsInState > 3 ) || ( gameState != GameState.INITIAL_SCREEN && gameState != GameState.COIN_INSERTED && gameState != GameState.LOADING_FIRST_STAGE ) ){
            final int margin = 1;
            paintMedals(g, model.getNumStage(), UNSCALED_MAX_WIDTH - margin, UNSCALED_MAX_HEIGHT );
        }

        g.setColor(oldColor);

    }//end paintInterface

    //--------------------------------
    //PRIVATE STATIC METHODS
    //--------------------------------

    /* for negatives paint 0, color must be YELLOW, BLUE OR WHITE */
    private static void paintNumberFromRightToLeft( Graphics2D g, int number, String color, int xMax, int yMin ){

        //check if negative
        if( number < 0 ) number = 0;

        //init variables
        ArrayList<Integer> digitsList = new ArrayList<Integer>();
        final int DIGIT_DIMENSIONS = 8;
        color = color.toUpperCase();
        if( !( color.equals( "BLUE" ) || color.equals("YELLOW") || color.equals("WHITE") ) ) throw new IllegalArgumentException( "color must be white, yellow or blue" );

        // Correctly isolate individual digits using base-10 math (to check algorithm), adding them from right to left
        int n = 0;
        int temp = number;
        if (temp == 0) {
            digitsList.add(0);
            n++;
        } else {
            while( temp > 0 ){
                digitsList.add(temp % 10);
                temp = temp / 10;
                n++;
            }
        }

        //paint all digits from right to left (digits already in right order)
        for( int i = 0; i < n; i++ ){
            g.drawImage( ( SpriteLibrary.getNumberSprite(color.toUpperCase(), digitsList.get(i) ) ), ( xMax - (DIGIT_DIMENSIONS)*(i) ), yMin, DIGIT_DIMENSIONS, DIGIT_DIMENSIONS, null);
        }

    }// end paintNumberFromRight

    /* for negatives paint 0, color must be YELLOW, BLUE OR WHITE */
    private static void paintNumberFromLeftToRight( Graphics2D g, int number, String color, int xMin, int yMin ){

        //check if negative
        if( number < 0 ) number = 0;

        //init variables
        ArrayList<Integer> digitsList = new ArrayList<Integer>();
        final int DIGIT_DIMENSIONS = 8;
        color = color.toUpperCase();
        if( !( color.equals( "BLUE" ) || color.equals("YELLOW") || color.equals("WHITE") ) ) throw new IllegalArgumentException( "color must be white, yellow or blue" );

        // Correctly isolate individual digits using base-10 math (to check algorithm), adding them from right to left
        int n = 0;
        int temp = number;
        if (temp == 0) {
            digitsList.add(0);
            n++;
        } else {
            while( temp > 0 ){
                digitsList.add(temp % 10);
                temp = temp / 10;
                n++;
            }
        }

        //paint all digits from right to left (digits already in right order)
        for( int i = 0; i < n; i++ ){
            g.drawImage( ( SpriteLibrary.getNumberSprite(color.toUpperCase(), digitsList.get(n - i - 1) ) ), ( xMin + (DIGIT_DIMENSIONS)*(i) ), yMin, DIGIT_DIMENSIONS, DIGIT_DIMENSIONS, null);
        }

    }// end paintNumberFromRight

    private static void paintMedals( Graphics2D g, int nStage, int xMax, int yMax ){

        ArrayList<Integer> valueList = new ArrayList<Integer>();

        if( nStage == 0 ){
            nStage = 1;
            valueList.add( nStage );
        } else {
            // medals values ordered from bigger to smaller
            int[] medals = {50, 30, 20, 10, 5, 1};
            int temp = nStage;

            // Algoritmo di scomposizione
            for (int medalValue : medals) {
                while (temp >= medalValue) {
                    valueList.add(medalValue);
                    temp -= medalValue;
                }
            }
        }

        //then draw medals
        int presentXOffset = 0;
        BufferedImage presentMedal = null;
        for (int i = valueList.size() - 1; i >= 0; i--) {

            if( i != valueList.size() - 1 ){ presentXOffset += presentMedal.getWidth(); }

            presentMedal = SpriteLibrary.getMedal("MEDAL", valueList.get(i) );

            g.drawImage(presentMedal, xMax - presentXOffset - presentMedal.getWidth(), yMax - presentMedal.getHeight(), presentMedal.getWidth(), presentMedal.getHeight(),  null);

        }


    }
}