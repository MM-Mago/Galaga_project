package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.data.PointOfPath;
import model.data.WorldBounds;
import shared.Entities;
import shared.RotationDirection;

public class BossGalaga extends Alien {


    //------------------
    //PRIVATE VARIABLES
    //------------------

    protected final int SCORE_VALUE = 150;
    protected final int SCORE_VALUE_CHARGING = 400;


    //------------------
    //COSTRUCTOR
    //------------------

    public BossGalaga(int speed, WorldBounds bounds, Queue<PointOfPath> path, int POINTS_TO_CALCULATE_WITH_OFFSET, PointOfPath formationPoint ) {
        super( Entities.BOSS_GALAGA.getWidth(), Entities.BOSS_GALAGA.getHeight(), speed, bounds, path, false, RotationDirection.D, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint);
        entityName = Entities.BOSS_GALAGA;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        return new BossGalaga(this.speed, this.bounds, newPath, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint );
    }

    @Override
    public void update(int frameNumber) {
    
        super.update(frameNumber);

        if( isOneShot ) this.entityName = Entities.BOSS_GALAGA_ONE_SHOT;
    }
    
    @Override
    public int getScoreValue() {
        if( isAttacking ) return SCORE_VALUE_CHARGING;
        else return SCORE_VALUE;
    }
    
}