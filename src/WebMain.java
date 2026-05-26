import org.teavm.jso.browser.Window;
import org.teavm.jso.JSBody;

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

    @JSBody(params = "playing", script = "window.galagaPlaying = playing;")
    private static native void setPlayingFlag(boolean playing);

    public static void main(String[] args) {
        GameModel.initModel();
        model = GameModel.getInstanceForView();
        // initView starts loading images; the loop only begins once all are ready
        WebGameView.initView(model, WebMain::onImagesLoaded);
        GameController.initController(WebGameView.getInstance(), GameModel.getInstanceForController());
        controller = GameController.getInstanceForMain();
        // do NOT start rAF here — wait for onImagesLoaded
    }

    private static void onImagesLoaded() {
        Window.requestAnimationFrame(WebMain::loop);
    }

    private static void loop(double timestamp) {
        if (timestamp - lastTime >= MS_PER_FRAME) {
            lastTime = timestamp;
            controller.tick();
            GameState state = model.getState();
            setPlayingFlag(state == GameState.PLAYING
                        || state == GameState.LOADING_FIRST_STAGE
                        || state == GameState.LOADING_NOT_FIRST_STAGE
                        || state == GameState.LIFE_LOST);
        }
        Window.requestAnimationFrame(WebMain::loop);
    }
}
