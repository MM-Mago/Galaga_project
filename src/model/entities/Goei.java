package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.data.PointOfPath;
import model.data.WorldBounds;
import shared.Entities;
import shared.RotationDirection;

public class Goei extends Alien {

    
    //------------------
    //COSTRUCTOR
    //------------------

    public Goei( int speed, WorldBounds bounds, Queue<PointOfPath> path, int POINTS_TO_CALCULATE_WITH_OFFSET, PointOfPath formationPoint ) {
        super( Entities.GOEI.getWidth(), Entities.GOEI.getHeight(), speed, bounds, path, true, RotationDirection.D, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint );
        entityName = Entities.GOEI;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        return new Goei( this.speed, this.bounds, newPath, POINTS_TO_CALCULATE_WITH_OFFSET, formationPoint );
    }
}