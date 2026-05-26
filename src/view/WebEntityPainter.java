package view;

import java.util.ArrayList;

import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;

import model.api.ModelForView;
import shared.Entities;
import shared.EntityInfo;
import shared.GameState;

class WebEntityPainter {

    private WebEntityPainter() {}

    static void paint(CanvasRenderingContext2D ctx, ArrayList<EntityInfo> entities, ModelForView model) {
        final GameState state = model.getState();
        final int secondsInState = model.getSecondsInState();

        for (EntityInfo info : entities) {
            switch (info.entity()) {
                case PLAYER:
                    // mirror desktop: only show player once it has appeared
                    if (state == GameState.PLAYING
                            || state == GameState.LOADING_NOT_FIRST_STAGE
                            || (state == GameState.LOADING_FIRST_STAGE && secondsInState > 5)) {
                        paintEntity(ctx, info);
                    }
                    break;
                default:
                    paintEntity(ctx, info);
            }
        }
    }

    private static void paintEntity(CanvasRenderingContext2D ctx, EntityInfo info) {
        HTMLCanvasElement sprite = WebSpriteLibrary.getSprite(info.entity(), info.direction(), info.animationFrame());
        // centre sprite on entity hitbox (same offset logic as desktop EntityPainter)
        int spriteX = info.x() - (int) Math.ceil((double)(sprite.getWidth()  - info.entity().getWidth())  / 2);
        int spriteY = info.y() - (int) Math.ceil((double)(sprite.getHeight() - info.entity().getHeight()) / 2);
        ctx.drawImage(sprite, spriteX, spriteY);
    }
}
