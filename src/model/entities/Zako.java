package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.data.PointOfPath;
import model.data.WorldBounds;
import shared.Entities;
import shared.RotationDirection;

public class Zako extends Alien {


    //------------------
    //COSTRUCTOR
    //------------------

    public Zako( int speed, WorldBounds bounds, Queue<PointOfPath> path) {
        super( Entities.ZAKO.getWidth(), Entities.ZAKO.getHeight(), speed, bounds, path, true, RotationDirection.D );
        entityName = Entities.ZAKO;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        return new Zako(this.speed, this.bounds, newPath);
    }  
}