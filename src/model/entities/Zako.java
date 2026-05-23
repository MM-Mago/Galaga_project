package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.data.PointOfPath;
import model.data.WorldBounds;
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

    public Zako( int speed, WorldBounds bounds, Queue<PointOfPath> path, int POINTS_TO_CALCULATE_WITH_OFFSET, PointOfPath formationPoint ) {
        super( Entities.ZAKO.getWidth(), Entities.ZAKO.getHeight(), speed, bounds, path, true, RotationDirection.D , POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint );
        entityName = Entities.ZAKO;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        return new Zako(this.speed, this.bounds, newPath, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint );
    }  

    @Override
    public int getScoreValue() {
        if( isAttacking ) return SCORE_VALUE_CHARGING;
        else return SCORE_VALUE;
    }

}