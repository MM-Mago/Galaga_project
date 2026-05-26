package view;

import java.util.ArrayList;

import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;

import controller.GameController;
import model.api.ModelForView;
import model.data.WorldBounds;
import shared.Entities;
import shared.GameState;
import shared.RotationDirection;

class WebInterfacePainter {

    private static final int SPRITE_W = 76;
    private static final int SPRITE_H = 8;

    private WebInterfacePainter() {}

    static void paint(CanvasRenderingContext2D ctx, int frameOfView, ModelForView model) {
        final GameState state       = model.getState();
        final WorldBounds bounds    = model.getBounds();
        final int score             = model.getScore();
        final int highScore         = model.getHighScore();
        final int lives             = model.getLives();
        final int secondsInState    = model.getSecondsInState();
        final int credits           = model.getCoins();
        final int fps               = GameController.getFramePerSeconds();

        // --- 1UP (flashes 2x/sec except on title/coin/gameover screens) ---
        final int FLASHES = 2;
        final int ONE_UP_X = 20;
        if (state != GameState.INITIAL_SCREEN && state != GameState.COIN_INSERTED && state != GameState.GAME_OVER) {
            if ((frameOfView / (fps / (FLASHES * 2))) % FLASHES == 0) {
                drawSprite(ctx, WebSpriteLibrary.getSprite("1UP"), ONE_UP_X, 1, SPRITE_W, SPRITE_H);
            }
        } else {
            drawSprite(ctx, WebSpriteLibrary.getSprite("1UP"), ONE_UP_X, 1, SPRITE_W, SPRITE_H);
        }

        // --- HIGH SCORE label ---
        drawSprite(ctx, WebSpriteLibrary.getSprite("HIGH_SCORE"), 77, 1, SPRITE_W, SPRITE_H);

        // --- high score number ---
        paintNumberRTL(ctx, highScore, "WHITE", 55 + SPRITE_W, SPRITE_H + 1);

        // --- CREDITS ---
        if (state == GameState.INITIAL_SCREEN || state == GameState.COIN_INSERTED
                || (state == GameState.LOADING_FIRST_STAGE && secondsInState < 4)) {
            int margin = 1;
            int px = Entities.PLAYER.getWidth();
            drawSprite(ctx, WebSpriteLibrary.getSprite("CREDIT"), px, bounds.height() - SPRITE_H - margin, SPRITE_W, SPRITE_H);
            paintNumberLTR(ctx, credits, "WHITE", px * 4, bounds.height() - SPRITE_H - margin);
        }

        // --- LIFE SPRITES ---
        if ((state == GameState.LOADING_FIRST_STAGE && secondsInState > 3)
                || state == GameState.PLAYING
                || state == GameState.LIFE_LOST
                || state == GameState.LOADING_NOT_FIRST_STAGE) {
            int pw = Entities.PLAYER.getWidth();
            int ph = Entities.PLAYER.getHeight();
            int sep = 2, margin = 2;
            for (int i = 0; i < lives - 1 && i < 8; i++) {
                HTMLCanvasElement playerSprite = WebSpriteLibrary.getSprite(Entities.PLAYER, RotationDirection.U, 1);
                ctx.drawImage(playerSprite, (pw + sep) * i + margin, bounds.height() - ph);
            }
        }

        // --- GALAGA title ---
        if (state == GameState.INITIAL_SCREEN && secondsInState > 0) {
            int x = bounds.width() / 2 - 22;
            int y = Entities.PLAYER.getHeight() * 2;
            drawSprite(ctx, WebSpriteLibrary.getSprite("GALAGA"), x, y, SPRITE_W, SPRITE_H);
        }

        // --- SCORE label ---
        if (state == GameState.INITIAL_SCREEN && secondsInState > 1) {
            int x = bounds.width() / 2 - 40;
            int y = Entities.PLAYER.getHeight() * 3 + SPRITE_H;
            drawSprite(ctx, WebSpriteLibrary.getSprite("SCORE"), x, y, SPRITE_W, SPRITE_H);
        }

        // --- 50/100 row + blinking ZAKO ---
        if (state == GameState.INITIAL_SCREEN && secondsInState > 2) {
            int x = bounds.width() / 2 - 15;
            int y = Entities.PLAYER.getHeight() * 4 + SPRITE_H * 2;
            drawSprite(ctx, WebSpriteLibrary.getSprite("50_100"), x, y, SPRITE_W, SPRITE_H);
            int anim = frameOfView < fps / 2 ? 1 : 2;
            HTMLCanvasElement zako = WebSpriteLibrary.getSprite(Entities.ZAKO, RotationDirection.U, anim);
            ctx.drawImage(zako, x - 40, y - 4, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight());
        }

        // --- 80/160 row + blinking GOEI ---
        if (state == GameState.INITIAL_SCREEN && secondsInState > 3) {
            int x = bounds.width() / 2 - 15;
            int y = Entities.PLAYER.getHeight() * 5 + SPRITE_H * 3;
            drawSprite(ctx, WebSpriteLibrary.getSprite("80_160"), x, y, SPRITE_W, SPRITE_H);
            int anim = frameOfView < fps / 2 ? 1 : 2;
            HTMLCanvasElement goei = WebSpriteLibrary.getSprite(Entities.GOEI, RotationDirection.U, anim);
            ctx.drawImage(goei, x - 40, y - 4, Entities.PLAYER.getWidth(), Entities.PLAYER.getHeight());
        }

        // --- COIN INSERTED screen ---
        if (state == GameState.COIN_INSERTED) {
            HTMLCanvasElement bg = WebSpriteLibrary.getSprite("COIN_INSERTED_SCREEN");
            ctx.drawImage(bg, 0, 0, bounds.width(), bounds.height());
            int pw = Entities.PLAYER.getWidth();
            int ph = Entities.PLAYER.getHeight();
            HTMLCanvasElement player = WebSpriteLibrary.getSprite(Entities.PLAYER, RotationDirection.U, 1);
            for (int i = 0; i < 3; i++) {
                ctx.drawImage(player, pw / 2, (int)(pw * (8 + 1.5 * i) + 4), pw, ph);
            }
        }

        // --- SCORE number ---
        if (state != GameState.INITIAL_SCREEN && state != GameState.COIN_INSERTED) {
            int yMargin = 1, xMargin = 41, xZero = 33;
            if (score < 10) {
                paintNumberRTL(ctx, 0, "WHITE", xZero, SPRITE_H + yMargin);
            }
            paintNumberRTL(ctx, score, "WHITE", xMargin, SPRITE_H + yMargin);
        }

        // --- PLAYER 1 text ---
        if (state == GameState.LOADING_FIRST_STAGE && (secondsInState < 4 || secondsInState > 5)) {
            HTMLCanvasElement playerImg = WebSpriteLibrary.getSprite("PLAYER");
            int cx = bounds.width() / 2;
            if (secondsInState < 4) {
                drawSprite(ctx, playerImg, cx - 35, bounds.height() / 2 + 2, SPRITE_W, SPRITE_H);
                paintNumberLTR(ctx, 1, "BLUE", cx + 20, bounds.height() / 2 + 2);
            } else {
                int h2 = playerImg.getHeight() / 2;
                drawSprite(ctx, playerImg, cx - 35, bounds.height() / 2 - h2 - 2, SPRITE_W, SPRITE_H);
                paintNumberLTR(ctx, 1, "BLUE", cx + 20, bounds.height() / 2 - h2 - 2);
            }
        }

        // --- STAGE N text ---
        if ((state == GameState.LOADING_FIRST_STAGE && secondsInState > 3)
                || (state == GameState.LOADING_NOT_FIRST_STAGE && secondsInState > 1)) {
            HTMLCanvasElement stageImg = WebSpriteLibrary.getSprite("STAGE");
            int cx = bounds.width() / 2;
            drawSprite(ctx, stageImg, cx - 35, bounds.height() / 2 + 2, SPRITE_W, SPRITE_H);
            paintNumberLTR(ctx, model.getNumStage(), "BLUE", cx + 10, bounds.height() / 2 + 2);
        }
    }

    // -----------------------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------------------

    private static void drawSprite(CanvasRenderingContext2D ctx, HTMLCanvasElement sprite,
            int x, int y, int w, int h) {
        ctx.drawImage(sprite, x, y, w, h);
    }

    private static void paintNumberRTL(CanvasRenderingContext2D ctx, int number, String color, int xMax, int yMin) {
        if (number < 0) number = 0;
        final int D = 8;
        ArrayList<Integer> digits = extractDigits(number);
        for (int i = 0; i < digits.size(); i++) {
            ctx.drawImage(WebSpriteLibrary.getNumberSprite(color, digits.get(i)), xMax - D * i, yMin, D, D);
        }
    }

    private static void paintNumberLTR(CanvasRenderingContext2D ctx, int number, String color, int xMin, int yMin) {
        if (number < 0) number = 0;
        final int D = 8;
        ArrayList<Integer> digits = extractDigits(number);
        int n = digits.size();
        for (int i = 0; i < n; i++) {
            ctx.drawImage(WebSpriteLibrary.getNumberSprite(color, digits.get(n - i - 1)), xMin + D * i, yMin, D, D);
        }
    }

    /** Returns digits right-to-left (least significant first), matching desktop paintNumberFromRightToLeft. */
    private static ArrayList<Integer> extractDigits(int number) {
        ArrayList<Integer> list = new ArrayList<>();
        if (number == 0) { list.add(0); return list; }
        int temp = number;
        while (temp > 0) { list.add(temp % 10); temp /= 10; }
        return list;
    }
}
