package model.entities;

import java.util.LinkedList;
import java.util.Queue;

import model.data.PointOfPath;
import model.data.WorldBounds;
import shared.Entities;
import shared.RotationDirection;

public class BossGalaga extends Alien {


    //------------------
    //COSTRUCTOR
    //------------------

    public BossGalaga(int speed, WorldBounds bounds, Queue<PointOfPath> path) {
        super( Entities.BOSS_GALAGA.getWidth(), Entities.BOSS_GALAGA.getHeight(), speed, bounds, path, false, RotationDirection.D );
        entityName = Entities.BOSS_GALAGA;
    }

    @Override
    public Alien copyAlien() {
        Queue<PointOfPath> newPath = new LinkedList<PointOfPath>(this.path);
        return new BossGalaga(this.speed, this.bounds, newPath);
    }
}