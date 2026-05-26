package view;

import org.teavm.jso.canvas.CanvasRenderingContext2D;

import model.GameModel;
import model.api.ModelForView;
import shared.GameState;

class WebBackgroundPainter {

    private static int oldViewFrame = -1;
    private static int presentFrame = 0;
    private static int presentDY = 0;

    private static final int MAX_FRAME_INDEX = 3;
    private static final int FRAME_CHANGES_PER_SECOND = 8;
    private static final int MAX_BACKGROUND_DY = GameModel.getSreenHeight();

    // background frame image paths (relative to index.html)
    private static final String[] FRAME_PATHS = {
        "js/sprites/background-frame-0.png",
        "js/sprites/background-frame-1.png",
        "js/sprites/background-frame-2.png",
        "js/sprites/background-frame-3.png"
    };

    private static org.teavm.jso.dom.html.HTMLImageElement[] frames;

    private WebBackgroundPainter() {}

    static void init() {
        org.teavm.jso.dom.html.HTMLDocument doc = org.teavm.jso.browser.Window.current().getDocument();
        frames = new org.teavm.jso.dom.html.HTMLImageElement[4];
        for (int i = 0; i < 4; i++) {
            org.teavm.jso.dom.html.HTMLImageElement img =
                (org.teavm.jso.dom.html.HTMLImageElement) doc.createElement("img");
            img.setSrc(FRAME_PATHS[i]);
            frames[i] = img;
        }
        presentFrame = 0;
        presentDY = 0;
        oldViewFrame = -1;
    }

    static void paint(CanvasRenderingContext2D ctx, int frameOfView, ModelForView model) {
        GameState state = model.getState();
        int secondsInState = model.getSecondsInState();

        presentFrame = (frameOfView / FRAME_CHANGES_PER_SECOND) % (MAX_FRAME_INDEX + 1);

        org.teavm.jso.dom.html.HTMLImageElement img = frames[presentFrame];

        ctx.drawImage(img, 0, presentDY);
        ctx.drawImage(img, 0, -MAX_BACKGROUND_DY + presentDY);
        ctx.drawImage(img, 0,  MAX_BACKGROUND_DY + presentDY);

        if (oldViewFrame != frameOfView) {
            boolean scroll = state == GameState.INITIAL_SCREEN
                || state == GameState.COIN_INSERTED
                || state == GameState.PLAYING
                || state == GameState.LOADING_NOT_FIRST_STAGE
                || (state == GameState.LOADING_FIRST_STAGE && secondsInState > 3);
            if (scroll) presentDY++;
            if (presentDY >= MAX_BACKGROUND_DY) presentDY = 0;
        }

        oldViewFrame = frameOfView;
    }
}
