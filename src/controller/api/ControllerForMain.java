package controller.api;

public interface ControllerForMain {
    
    
    //------------------------
    //public methods for main
    //------------------------

    /** Execute one game loop step: update model + refresh view. Called by the platform timer. */
    public void tick();
    
}