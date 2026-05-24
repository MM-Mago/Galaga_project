package model.entities;

import model.data.WorldBounds;

public class EntityKiller extends Entity {

    private EntityKiller entityKiller;

    private EntityKiller( WorldBounds bounds ) {
        super(0, 0, bounds.width(), bounds.height(), 0, bounds, null );
    }

    public void initEntityKiller( WorldBounds bounds ){
        this.entityKiller = new EntityKiller(bounds);
    }

    public EntityKiller getEntityKiller(){ 
        if( entityKiller == null ) throw new IllegalStateException( "first init EntityKiller" );
        return this.entityKiller; 
    }

    @Override
    public void update(int frameNumber) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }
    
}
