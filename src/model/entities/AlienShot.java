package model.entities;

import model.data.WorldBounds;
import shared.Entities;
import shared.RotationDirection;

public class AlienShot extends Entity {

    public AlienShot(int x, int y, int width, int height, int speed, WorldBounds bounds, RotationDirection direction ) {
        super(x, y, width, height, speed, bounds, direction);
        entityName = Entities.ALIEN_SHOT;
    }

    @Override
    public void update( int frameNumber ) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }
    
}
