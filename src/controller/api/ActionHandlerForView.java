package controller.api;

public interface ActionHandlerForView {
    
    //controller represent an actionHandler for the view
    
    //------------------------
    //public methods for view
    //------------------------

    public void cmdMovingLeft( boolean active );
    public void cmdMovingRight( boolean active );
    public void cmdCoinInserted();
    public void cmdAction();
    public void cmdNukeAll(); //for tests

}