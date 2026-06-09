package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.PointOfPath;
import shared.Entities;
import shared.GameState;
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

    public BossGalaga(int speed, int lateSpeed, Queue<PointOfPath> path, Queue<PointOfPath> divingPath, int POINTS_TO_CALCULATE_WITH_OFFSET, int DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, PointOfPath formationPoint, boolean isOfChallengingStage ) {
        super( Entities.BOSS_GALAGA.getWidth(), Entities.BOSS_GALAGA.getHeight(), speed, lateSpeed, path, divingPath, false, RotationDirection.D, POINTS_TO_CALCULATE_WITH_OFFSET, DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint, isOfChallengingStage );
        entityName = Entities.BOSS_GALAGA;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        Queue<PointOfPath> divingPath = new LinkedList<PointOfPath>(this.divingPath);
        return new BossGalaga(this.speed, this.lateSpeed, newPath, divingPath, POINTS_TO_CALCULATE_WITH_OFFSET, DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint, this.isOfChallengingStage );
    }

    @Override
    public Alien copyAlienWithNewSpeed( int newSpeed, int newlateSpeed ) {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        Queue<PointOfPath> divingPath = new LinkedList<PointOfPath>(this.divingPath);
        return new BossGalaga( newSpeed, newlateSpeed, newPath, divingPath, POINTS_TO_CALCULATE_WITH_OFFSET, DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint, this.isOfChallengingStage );
    }

    @Override
    public void update(int frameNumber, int secondsInState, GameState state ) {
    
        super.update(frameNumber, secondsInState, state );

        if( isOneShot ) this.entityName = Entities.BOSS_GALAGA_ONE_SHOT;
    }
    
    @Override
    public int getScoreValue() {
        if( isAttacking ) return SCORE_VALUE_CHARGING;
        else return SCORE_VALUE;
    }
    
}