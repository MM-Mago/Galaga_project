package model.entities;

import shared.Entities;
import shared.GameState;
import shared.RotationDirection;

public class AlienShot extends Entity {

    public AlienShot(int x, int y, int width, int height, int speed, RotationDirection direction ) {
        super(x, y, width, height, speed, direction);
        entityName = Entities.ALIEN_SHOT;
    }

    @Override
    public void update( int frameNumber, int secondsInState, GameState state ) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }
    
}
