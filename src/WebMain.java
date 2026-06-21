import org.teavm.jso.browser.Window;
import org.teavm.jso.JSBody;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;

import controller.GameController;
import controller.api.ControllerForMain;
import model.GameModel;
import model.api.ModelForView;
import shared.GameState;
import view.WebGameView;

public class WebMain {

    private static final int FRAME_PER_SECONDS = 60;
    private static final double MS_PER_FRAME = 1000.0 / FRAME_PER_SECONDS;

    private static ControllerForMain controller;
    private static ModelForView model;
    private static double lastTime = 0;
    private static double accumulator = 0;
    private static boolean paused = false;

    @JSBody(params = "playing", script = "window.galagaPlaying = playing;")
    private static native void setPlayingFlag(boolean playing);

    @JSBody(params = {}, script = "return document.hidden;")
    private static native boolean isDocumentHidden();

    public static void main(String[] args) {
        GameModel.initModel();
        model = GameModel.getInstanceForView();
        // initView starts loading images; the loop only begins once all are ready
        WebGameView.initView(model, WebMain::onImagesLoaded);
        GameController.initController(WebGameView.getInstance(), GameModel.getInstanceForController());
        controller = GameController.getInstanceForMain();
        // do NOT start rAF here — wait for onImagesLoaded

        // Pause when tab is hidden, resume when visible again
        Window.current().getDocument().addEventListener("visibilitychange", new EventListener<Event>() {
            @Override public void handleEvent(Event e) {
                if (isDocumentHidden()) {
                    paused = true;
                } else {
                    paused = false;
                    lastTime = 0; // reset so delta is not huge on resume
                    accumulator = 0;
                    Window.requestAnimationFrame(WebMain::loop);
                }
            }
        });
    }

    private static void onImagesLoaded() {
        Window.requestAnimationFrame(WebMain::loop);
    }

    private static void loop(double timestamp) {
        if (paused) return; // tab became hidden between scheduling and firing

        if (lastTime == 0) {
            lastTime = timestamp;
        }

        double delta = timestamp - lastTime;
        lastTime = timestamp;
        accumulator += delta;

        // Run fixed-step updates; cap to avoid spiral of death
        int maxUpdatesPerFrame = 5;
        int updates = 0;
        while (accumulator >= MS_PER_FRAME && updates < maxUpdatesPerFrame) {
            controller.updateModelOnly();
            accumulator -= MS_PER_FRAME;
            updates++;
        }

        // Render once per rAF
        controller.renderView();

        GameState state = model.getState();
        setPlayingFlag(state == GameState.PLAYING
                    || state == GameState.LOADING_FIRST_STAGE
                    || state == GameState.LOADING_NOT_FIRST_STAGE
                    || state == GameState.LIFE_LOST);

        Window.requestAnimationFrame(WebMain::loop);
    }
}
