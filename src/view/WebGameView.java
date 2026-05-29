package view;

import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;

import controller.api.ActionHandlerForView;
import model.api.ModelForView;
import view.api.ViewForController;

public class WebGameView implements ViewForController {

    private static WebGameView view;

    private final ModelForView model;
    private final HTMLCanvasElement canvas;
    private int frameNumber;

    private WebGameView(ModelForView model, Runnable onReady) {
        this.model = model;
        this.frameNumber = 0;

        HTMLDocument doc = Window.current().getDocument();
        this.canvas = (HTMLCanvasElement) doc.getElementById("game-canvas");

        WebBackgroundPainter.init();
        WebSpriteLibrary.init(onReady);
    }

    public static ViewForController initView(ModelForView model, Runnable onReady) {
        if (view == null) view = new WebGameView(model, onReady);
        return view;
    }

    public static ViewForController getInstance() {
        if (view == null) throw new IllegalStateException("WebGameView not initialized");
        return view;
    }

    @Override
    public void setupInputs(ActionHandlerForView handler) {
        Window.current().getDocument().addEventListener("keydown", new EventListener<KeyboardEvent>() {
            @Override
            public void handleEvent(KeyboardEvent e) {
                switch (e.getCode()) {
                    case "KeyC":        handler.cmdCoinInserted(); break;
                    case "ArrowLeft":   handler.cmdMovingLeft(true); break;
                    case "ArrowRight":  handler.cmdMovingRight(true); break;
                    case "Space":       handler.cmdAction(); break;
                    case "KeyN":        handler.cmdNukeAll(); break;
                }
            }
        });
        Window.current().getDocument().addEventListener("keyup", new EventListener<KeyboardEvent>() {
            @Override
            public void handleEvent(KeyboardEvent e) {
                switch (e.getCode()) {
                    case "ArrowLeft":  handler.cmdMovingLeft(false); break;
                    case "ArrowRight": handler.cmdMovingRight(false); break;
                }
            }
        });
    }

    @Override
    public void refresh(int frameNumber) {
        long t0 = System.currentTimeMillis();
        this.frameNumber = frameNumber;

        org.teavm.jso.canvas.CanvasRenderingContext2D ctx =
            (org.teavm.jso.canvas.CanvasRenderingContext2D) canvas.getContext("2d");

        double scaleX = (double) canvas.getWidth()  / shared.SharedConstants.MODEL_SCREEN_WIDTH;
        double scaleY = (double) canvas.getHeight() / shared.SharedConstants.MODEL_SCREEN_HEIGHT;
        double scale  = Math.min(scaleX, scaleY);

        ctx.save();
        ctx.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
        ctx.scale(scale, scale);

        WebBackgroundPainter.paint(ctx, frameNumber, model);
        WebEntityPainter.paint(ctx, model.getEntityInfoListForView(), model);
        WebInterfacePainter.paint(ctx, frameNumber, model);

        ctx.restore();

        long t1 = System.currentTimeMillis();
        reportRenderTime(t1 - t0);
    }

    @org.teavm.jso.JSBody(params = "ms", script = "if(window.reportRenderTime) window.reportRenderTime(ms);")
    private static native void reportRenderTime(double ms);
}
