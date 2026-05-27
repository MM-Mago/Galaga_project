package controller.api;

public interface ControllerForMain {
    
    
    //------------------------
    //public methods for main
    //------------------------

    /** Execute one game loop step: update model + refresh view. Called by the platform timer. */
    public void tick();
    
    /** Update model only (no rendering). Useful when running multiple fixed-step updates per frame. */
    public void updateModelOnly();
    
    /** Render the view once after model updates. */
    public void renderView();
    
}