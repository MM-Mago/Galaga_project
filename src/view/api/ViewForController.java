package view.api;

import controller.api.ActionHandlerForView;

public interface ViewForController {
    
    //--------------------------------
    //PUBLIC METHODS FOR CONTROLLER
    //--------------------------------

    //listener setups
    public void setupInputs( ActionHandlerForView controller );

    //view refresh
    public void refresh( int frameNumber );

}