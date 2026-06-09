package model.entities;

import shared.Entities;
import shared.GameState;
import shared.RotationDirection;

public class AlienExplosion extends Entity{

    private int initialFrameNumber;
    private final static int FRAMES_PER_SPRITE = 3;

    public AlienExplosion(int x, int y ) {
        super(x, y, Entities.ALIEN_EXPLOSION.getWidth(), Entities.ALIEN_EXPLOSION.getHeight(), 0, RotationDirection.U );
        initialFrameNumber = -1;
        entityName = Entities.ALIEN_EXPLOSION;
    }

    @Override
    public void update(int frameNumber, int secondsInState, GameState state ) {
        if( initialFrameNumber == -1 ) initialFrameNumber = frameNumber - 1 ;
        if( ( frameNumber - initialFrameNumber ) % FRAMES_PER_SPRITE == 0 ){
            animationFrame ++;
        }
        if( animationFrame > 5 ){ this.isToRemove = true; }
    }
    
}
