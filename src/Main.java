


import controller.GameController;
import model.GameModel;
import view.GameView;

public class Main {
    public static void main(String[] args){
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run () {
                GameModel.initModel();
                GameView.initView(GameModel.getInstanceForView());
                GameController.initController(GameView.getInstance(), GameModel.getInstanceForController());
                GameController.getInstanceForMain().startTimer();
            }
        });
    }
}
