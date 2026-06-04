package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.PointOfPath;
import shared.Entities;
import shared.RotationDirection;

public class Zako extends Alien {

    
    //------------------
    //PRIVATE VARIABLES
    //------------------

    protected final int SCORE_VALUE = 50;
    protected final int SCORE_VALUE_CHARGING = 100;
    

    //------------------
    //COSTRUCTOR
    //------------------

    public Zako(int speed, int stageSpeed, Queue<PointOfPath> path, Queue<PointOfPath> divingPath, int POINTS_TO_CALCULATE_WITH_OFFSET, int DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, PointOfPath formationPoint, boolean isOfChallengingStage ) {
        super( Entities.BOSS_GALAGA.getWidth(), Entities.BOSS_GALAGA.getHeight(), speed, stageSpeed, path, divingPath, true, RotationDirection.D, POINTS_TO_CALCULATE_WITH_OFFSET, DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint, isOfChallengingStage );
        entityName = Entities.ZAKO;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        Queue<PointOfPath> divingPath = new LinkedList<PointOfPath>(this.divingPath);
        return new Zako(this.speed, this.stageSpeed, newPath, divingPath, POINTS_TO_CALCULATE_WITH_OFFSET, DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint, this.isOfChallengingStage );
    }  

    @Override
    public Alien copyAlienWithNewSpeed( int newSpeed, int newStageSpeed) {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        Queue<PointOfPath> divingPath = new LinkedList<PointOfPath>(this.divingPath);
        return new Zako( newSpeed, newStageSpeed, newPath, divingPath, POINTS_TO_CALCULATE_WITH_OFFSET, DIVING_POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint, this.isOfChallengingStage );
    }

    @Override
    public int getScoreValue() {
        if( isAttacking ) return SCORE_VALUE_CHARGING;
        else return SCORE_VALUE;
    }

}