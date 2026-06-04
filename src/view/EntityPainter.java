package view;

import java.util.ArrayList;

import model.api.ModelForView;
import shared.EntityInfo;
import shared.GameState;
import shared.Entities;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;


//------------------------------------------------------------------------------------------------
//THIS CLASS IS ONLY USED TO PAINT ALL THE ENTITIES IN THE LIST USING THE RIGHT SPRITES
//------------------------------------------------------------------------------------------------

//EVERYTHING PACKAGE-PROTECTED OR PRIVATE
class EntityPainter {
    

    //--------------------------------
    //PRIVATE COSTRUCTOR
    //--------------------------------

    private EntityPainter(){}


    //--------------------------------
    //PACKAGE-PRIVATE STATIC METHODS
    //--------------------------------
    
    static void paintEntities( Graphics2D g, ArrayList<EntityInfo> entities, ModelForView model ){
        
        Color oldColor = g.getColor();

        final GameState gameState = model.getState();
        final int secondsInState = model.getSecondsInState();

        Rectangle2D.Double rect = new Rectangle2D.Double();

        
        //cycle all entities
        for( EntityInfo entityInfo: entities ){

            rect.setRect( entityInfo.x(), entityInfo.y(), entityInfo.entity().getWidth(), entityInfo.entity().getHeight() );

            //check entity type
            switch( entityInfo.entity() ) {
                
                case Entities.PLAYER:
                    if( gameState == GameState.PLAYING || gameState == GameState.LIFE_LOST || gameState == GameState.LOADING_NOT_FIRST_STAGE || ( gameState == GameState.LOADING_FIRST_STAGE && secondsInState > 5 ) ){
                        paintEntity(g, entityInfo);
                    }
                    break;
                    
                default:
                    paintEntity(g, entityInfo);

            }// end check entity tipe
            
        }// end cycle all entities

        g.setColor(oldColor);
    }

    
    //--------------------------------
    //PRIVATE STATIC METHODS
    //--------------------------------
    private static void paintEntity( Graphics2D g, EntityInfo entityInfo ){

        if( entityInfo.animationFrame() != 0 ){
            BufferedImage sprite = SpriteLibrary.getSprite( entityInfo.entity(), entityInfo.direction(), entityInfo.animationFrame() );
            int spriteX = entityInfo.x() - ( (int)Math.ceil( (double) (sprite.getWidth() - entityInfo.entity().getWidth() ) / 2 ) ); //trim the border for entities with smaller sprites //ceil approssimation for odd numbers
            int spriteY = entityInfo.y() - ( (int)Math.ceil( (double)  (sprite.getHeight() - entityInfo.entity().getHeight() ) / 2 ) ); //trim the border for entities with smaller sprites //ceil approssimation for odd numbers
            g.drawImage( sprite, null, spriteX, spriteY );
        }
        
    }// end paint entity

}