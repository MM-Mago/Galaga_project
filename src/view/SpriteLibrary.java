package view;

import java.awt.geom.AffineTransform;
import java.awt.image.AffineTransformOp;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.imageio.ImageIO;

import shared.Entities;
import shared.RotationDirection;


    //------------------------------------------------------------------------------------------------
    // THIS CLASS IS ONLY USED TO GET ANY ENTITY SPRITE GIVEN NAME AND ROTATIONDIRECTION
    //------------------------------------------------------------------------------------------------

// EVERYTHING PACKAGE-PROTECTED OR PRIVATE
class SpriteLibrary {


    //--------------------------------
    // PRIVATE VARIABLES
    //--------------------------------

    private static final String INITIAL_SCREEN_SPRITES_RELATIVE_PATH = "src//view//galaga_png//initial_screen_sprites.png";
    private static final String SPRITES_RELATIVE_PATH = "src//view//galaga_png//sprites.png";
    private static final String COIN_INSERTED_SCREEN_RELATIVE_PATH = "src//view//galaga_png//coin_inserted_screen.png";
    private static final String NUMBERS_RELATIVE_PATH = "src//view//galaga_png//numbers.png";
    private static final String LOADING_SCREEN_SPRITES_RELATIVE_PATH = "src//view//galaga_png//loading_screen_sprites.png";
    private static final String CHALLENGING_STAGE_RELATIVE_PATH = "src//view//galaga_png//challenging_stage.png";
    private static  BufferedImage spritesWholeImage;
    private static BufferedImage initialScreenSpritesWholeImage;
    private static BufferedImage coinInsertedScreenWholeImage;
    private static BufferedImage numbersWholeImage;
    private static BufferedImage loadingScreenSpritesWholeImage;
    private static BufferedImage challengingStageSpritesWholeImage;
    private static Map<String, BufferedImage> spritesMap = new HashMap<>(); //key: ENTITY_NAME_DIRECTION, Value: Sprite immage

    private static final int INITIAL_SCREEN_SPRITES_MAX_WIDTH = 222;
    private static final int INITIAL_SCREEN_SPRITES_MAX_HEIGHT = 21;

    

    //--------------------------------
    // PRIVATE COSTRUCTOR
    //--------------------------------

    private SpriteLibrary(){}

    
    //--------------------------------
    // PRIVATE STATIC METHODS
    //--------------------------------

    private static BufferedImage flipImage( BufferedImage img, boolean flipX, boolean flipY ) {

        double sx; //mirroring xScale
        double sy; //mirroring yScale
        double tx; //traslation xScale
        double ty; //traslation yScale
        if( flipX ){ sx = -1; tx = -img.getWidth();  } else{ sx = 1; tx = 0; };
        if( flipY ){ sy = -1; ty = -img.getHeight(); } else{ sy = 1; ty = 0; };


        // get trasform matrix from vector
        AffineTransform tMatrix = AffineTransform.getScaleInstance( sx, sy ); // scale -1 on X to mirror orizzontally
        // modify matrix to shift image back in visible space
        tMatrix.translate( tx, ty );
        // create operator wich will actually modify our image,
        // giving him the rounding type nearest neighbor: in case of imprecise coordinates mantains pixels separated
        AffineTransformOp operator = new AffineTransformOp(tMatrix, AffineTransformOp.TYPE_NEAREST_NEIGHBOR);
        // make the operator do his work without giving him a destination image
        return operator.filter(img, null);

    }


    //--------------------------------
    // PACKAGE-PRIVATE STATIC METHODS
    //--------------------------------
    
    static void initSprites(){


        //------------
        // LOAD IMAGES
        //------------

        try {
            spritesWholeImage = ImageIO.read(new File(SPRITES_RELATIVE_PATH) );
        } catch (IOException e) { e.printStackTrace(); }

        try {
            initialScreenSpritesWholeImage = ImageIO.read(new File(INITIAL_SCREEN_SPRITES_RELATIVE_PATH) );
        } catch (IOException e) { e.printStackTrace(); }
    
        try {
            coinInsertedScreenWholeImage = ImageIO.read(new File(COIN_INSERTED_SCREEN_RELATIVE_PATH) );
        } catch (IOException e) { e.printStackTrace(); }

        try {
            numbersWholeImage = ImageIO.read(new File(NUMBERS_RELATIVE_PATH) );
        } catch (IOException e) { e.printStackTrace(); }

        try {
            loadingScreenSpritesWholeImage = ImageIO.read(new File(LOADING_SCREEN_SPRITES_RELATIVE_PATH) );
        } catch (IOException e) { e.printStackTrace(); }

        try {
            challengingStageSpritesWholeImage = ImageIO.read(new File(CHALLENGING_STAGE_RELATIVE_PATH) );
        } catch (IOException e) { e.printStackTrace(); }

        //-------------------------
        // POPULATE SPRITESMAP
        //-------------------------


        // GET ALIENS AND PLAYER
        for( Entities name: Entities.values() ){


            // calculate offsets based on entityName
            int offsetX = 1;
            int offsetY = 1;
            int spriteDimensions = 16; 
            int gridThickness = 2;
            switch (name) {
                case PLAYER:
                    offsetX = 1;
                    offsetY = 1;
                    break;
            
                case CAPTURED_PLAYER:
                    offsetX = 1;
                    offsetY = 19;
                    break;
            
                case BOSS_GALAGA:
                    offsetX = 1;
                    offsetY = 37;                        
                    break;
            
                case BOSS_GALAGA_ONE_SHOT:
                    offsetX = 1;
                    offsetY = 55;
                    break;
            
                case GOEI:
                    offsetX = 1;
                    offsetY = 73;
                    break;
            
                case ZAKO:
                    offsetX = 1;
                    offsetY = 91;
                    break;
            
                default:
                    break;
            }
            
            //cycle animation frame
            for( int animationFrame = 1; animationFrame <= 2; animationFrame++ ){

                // cycle directions
                for( RotationDirection dir: RotationDirection.values() ){

                    int angle = dir.getAngle(); // angle
                    BufferedImage sprite; // sprite to load
                    int i; // sprite index

                    // if wings closed
                    if( animationFrame == 2 ){
                        if( angle == RotationDirection.U.getAngle() ){
                            i = 7;
                            spritesMap.put(  name.name() + "_" + dir.name() + "_" + animationFrame, spritesWholeImage.getSubimage( offsetX + ( spriteDimensions + gridThickness)*i , offsetY, spriteDimensions, spriteDimensions ) );
                            continue;
                        }
                    }
                    
                    // get sprite index ( 0 to 6 )
                    if( angle == 0 || angle == 180 ) i = 6; // case vertical sprite (6)
                    else i = angle % 90 / 15; //case orizontal or rotated sprite (0 to 5)

                    // invert index for certain angles
                    if( (0 < angle && angle < 90) ||  (180 < angle && angle < 270) ){ i = 6-i; }

                    sprite = spritesWholeImage.getSubimage( ( offsetX + ( spriteDimensions + gridThickness)*i ), ( offsetY ), spriteDimensions, spriteDimensions );
                    

                    // check angles to flip sprite
                    if( 0 < angle && angle < 90 ){ 
                        sprite = flipImage( sprite, true, false ); 
                    }

                    else if( 90 <= angle && angle < 180 ){
                        sprite = flipImage( sprite, true, true ); 
                    }

                    else if( angle == 180 ){ 
                        sprite = flipImage( sprite, false, true );
                    }

                    else if( 180 < angle && angle < 270 ){ 
                        sprite = flipImage( sprite, false, true ); 
                    }

                    else if( 270 <= angle && angle <= 360 ){ 
                        // do nothing
                    }

                    // add sprite
                    spritesMap.put( ( name.name() + "_" + dir.name() + "_" + animationFrame ), sprite );


                }// end cycle directions
                    
            }//end animationFrame directions

            // TO ADD second aliens sprite in formation



        }// end get aliens and player


        //GET ALIEN EXPLOSION SPRITE

        BufferedImage explosionSprite;
        for( int i = 0; i < 4; i ++ ){
            final int EXPLOSION_SPRITE_DIMENSIONS = 32;
            explosionSprite = spritesWholeImage.getSubimage( 18 * ( 16 + 2*i ) + 1 , 1, EXPLOSION_SPRITE_DIMENSIONS, EXPLOSION_SPRITE_DIMENSIONS );
            spritesMap.put( "ALIEN_EXPLOSION" + "_" + (i+1), explosionSprite );
        }


        //GET SHOTS

        BufferedImage playerShot = spritesWholeImage.getSubimage( 313, 123, 3, 8 );
        spritesMap.put( Entities.PLAYER_SHOT.name() + "_" + "U" + "_" + 1 , playerShot);
        BufferedImage enemyShot = spritesWholeImage.getSubimage( 313, 123 + 16, 3, 8 );
        spritesMap.put( Entities.ENEMY_SHOT.name() + "_" + "D" + "_" + 1 , enemyShot );


        //GET MEDALS

        BufferedImage medal;
        final int xInitialOffsetForMedals = 17*(16 + 2) + 1;
        final int yOffsetForMedals = 9*(16 + 2) + 1 + 9;
        final int medalHeight = 16;
        final int smallerMedalsWidth = 8;
        final int largerMedalsWidth = 16;
        medal = spritesWholeImage.getSubimage( xInitialOffsetForMedals, yOffsetForMedals, smallerMedalsWidth, medalHeight );
        spritesMap.put( "MEDAL" + "_" + 1, medal );
        medal = spritesWholeImage.getSubimage( xInitialOffsetForMedals + (smallerMedalsWidth + 2), yOffsetForMedals, smallerMedalsWidth, medalHeight );
        spritesMap.put( "MEDAL" + "_" + 5, medal );
        medal = spritesWholeImage.getSubimage( xInitialOffsetForMedals + (smallerMedalsWidth + 2)*2, yOffsetForMedals, largerMedalsWidth, medalHeight );
        spritesMap.put( "MEDAL" + "_" + 10, medal );
        medal = spritesWholeImage.getSubimage( xInitialOffsetForMedals + (smallerMedalsWidth + 2)*2 + (largerMedalsWidth + 2), yOffsetForMedals, largerMedalsWidth, medalHeight );
        spritesMap.put( "MEDAL" + "_" + 20, medal );
        medal = spritesWholeImage.getSubimage( xInitialOffsetForMedals + (smallerMedalsWidth + 2)*2 + (largerMedalsWidth + 2)*2, yOffsetForMedals, largerMedalsWidth, medalHeight );
        spritesMap.put( "MEDAL" + "_" + 30, medal );
        medal = spritesWholeImage.getSubimage( xInitialOffsetForMedals + (smallerMedalsWidth + 2)*2 + (largerMedalsWidth + 2)*3, yOffsetForMedals, largerMedalsWidth, medalHeight );
        spritesMap.put( "MEDAL" + "_" + 50, medal );


        //GET ALL INITIAL SCREEN SPRITES

        spritesMap.put( "1UP", initialScreenSpritesWholeImage.getSubimage(0, 0, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        spritesMap.put( "HIGH_SCORE", initialScreenSpritesWholeImage.getSubimage(0, INITIAL_SCREEN_SPRITES_MAX_HEIGHT, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        spritesMap.put( "GALAGA", initialScreenSpritesWholeImage.getSubimage(0, INITIAL_SCREEN_SPRITES_MAX_HEIGHT*2, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        spritesMap.put( "SCORE", initialScreenSpritesWholeImage.getSubimage(0, INITIAL_SCREEN_SPRITES_MAX_HEIGHT*3, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        spritesMap.put( "50_100", initialScreenSpritesWholeImage.getSubimage(0, INITIAL_SCREEN_SPRITES_MAX_HEIGHT*4, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        spritesMap.put( "80_160", initialScreenSpritesWholeImage.getSubimage(0, INITIAL_SCREEN_SPRITES_MAX_HEIGHT*5, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        spritesMap.put( "CREDIT", initialScreenSpritesWholeImage.getSubimage(0, INITIAL_SCREEN_SPRITES_MAX_HEIGHT*6, INITIAL_SCREEN_SPRITES_MAX_WIDTH, INITIAL_SCREEN_SPRITES_MAX_HEIGHT ));
        

        //GET COIN_INSERTED_SCREEN

        spritesMap.put( "COIN_INSERTED_SCREEN", coinInsertedScreenWholeImage );
        

        //GET ALL LOADING SCREEN SPRITES

        spritesMap.put( "PLAYER", loadingScreenSpritesWholeImage.getSubimage(0, 0, INITIAL_SCREEN_SPRITES_MAX_WIDTH, ( INITIAL_SCREEN_SPRITES_MAX_HEIGHT ) ) );
        spritesMap.put( "STAGE", loadingScreenSpritesWholeImage.getSubimage(0, ( INITIAL_SCREEN_SPRITES_MAX_HEIGHT ), INITIAL_SCREEN_SPRITES_MAX_WIDTH, ( INITIAL_SCREEN_SPRITES_MAX_HEIGHT ) ) );

        //GET CHALLENGING STAGE SPRITE
    
        spritesMap.put( "CHALLENGING_STAGE", challengingStageSpritesWholeImage ); //width 394, height 21

        //GET NUMBERS

        for( int i = 0; i < 10; i++ ){
            final int NUMBER_WIDTH = 24;
            final int NUMBER_HEIGHT = 24;
            final int offSetX = 25;
            final int offsetY = 26;
            for( int colorN = 0; colorN < 3; colorN++ ){

                BufferedImage numberSprite = numbersWholeImage.getSubimage( ( (offSetX)*i ), ( (offsetY)*colorN ), ( NUMBER_WIDTH ), ( NUMBER_HEIGHT ) );
                
                if( colorN == 0 ){ spritesMap.put( i + "_" + "BLUE", numberSprite ); }
                if( colorN == 1 ){ spritesMap.put( i + "_" + "YELLOW", numberSprite ); }
                if( colorN == 2 ){ spritesMap.put( i + "_" + "WHITE", numberSprite ); }
                
            
            }
        }// end get numbers

    }// end init sprites

    //used only for sprites in sprites.png
    static BufferedImage getSprite( Entities name, RotationDirection dir, int animationFrame ) {
        if( spritesMap == null ) throw new IllegalStateException( "SpriteLibrary not initialized" );
        return spritesMap.get( name.name() + "_" + dir.name() + "_" + animationFrame );
    }

    //used only for sprites in sprites.png without directions ( like ALIEN_EXPLOSION )
    static BufferedImage getSprite( Entities name, int animationFrame ) {
        if( spritesMap == null ) throw new IllegalStateException( "SpriteLibrary not initialized" );
        return spritesMap.get( name.name() + "_" + animationFrame );
    }

    //used only for medals in sprites.png
    static BufferedImage getMedal( String name, int value ) {
        if( spritesMap == null ) throw new IllegalStateException( "SpriteLibrary not initialized" );
        if( !( "1,5,10,20,30,50".contains( "" + value ) ) ) throw new IllegalArgumentException( "values for medals must be chosen from 1, 5, 10, 20, 30, 50" );
        return spritesMap.get( name + "_" + value );
    }

    //used only for sprites in initial_screen_sprites.png, coin_inserted_screen.png, loading_screen_sprites.png, challenging_stage.png
    static BufferedImage getSprite( String name ) {
        if( spritesMap == null ) throw new IllegalStateException( "SpriteLibrary not initialized" );
        return spritesMap.get( name );
    }

    /*used only for numbers, number must be from 0 to 9 */
    static BufferedImage getNumberSprite( String color, int i ) {
        color = color.toUpperCase();
        if( spritesMap == null ) throw new IllegalStateException( "SpriteLibrary not initialized" );
        if( i<0 || i>9 ) throw new IllegalArgumentException( "must be an int between 0 and 9 both included" );
        if( !( color == "BLUE" || color == "YELLOW" || color == "WHITE") ) throw new IllegalArgumentException( "color must be white, yellow or blue" );
        return spritesMap.get( i + "_" + color );
    }
}