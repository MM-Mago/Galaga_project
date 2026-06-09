package model.entities;

import shared.GameState;
import shared.SharedConstants;

public class EntityKiller extends Entity {

    final static int margin = 0;

    public EntityKiller() {
        super(-margin, -margin, SharedConstants.MODEL_SCREEN_WIDTH + margin, SharedConstants.MODEL_SCREEN_HEIGHT + margin, 0, null );
    }

    @Override
    public void update(int frameNumber, int secondsInState, GameState state ) {
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }
    
}
