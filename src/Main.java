
import controller.GameController;
import controller.api.ControllerForMain;
import model.GameModel;
import view.GameView;

public class Main {
    private static final int FRAME_PER_SECONDS = 60;
    private static final int MILLISECONDS_PER_FRAME = 1000 / FRAME_PER_SECONDS;

    public static void main(String[] args){
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run () {
                GameModel.initModel();
                GameView.initView(GameModel.getInstanceForView());
                GameController.initController(GameView.getInstance(), GameModel.getInstanceForController());
                ControllerForMain controller = GameController.getInstanceForMain();
                javax.swing.Timer swingTimer = new javax.swing.Timer(MILLISECONDS_PER_FRAME, e -> controller.tick());
                swingTimer.start();
            }
        });
    }
}
