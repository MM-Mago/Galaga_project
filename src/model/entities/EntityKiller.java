package model.entities;

import shared.SharedConstants;

public class EntityKiller extends Entity {

    private EntityKiller entityKiller;

    private EntityKiller() {
        super(0, 0, SharedConstants.MODEL_SCREEN_WIDTH, SharedConstants.MODEL_SCREEN_HEIGHT, 0, null );
    }

    public void initEntityKiller(){
        this.entityKiller = new EntityKiller();
    }

    public EntityKiller getEntityKiller(){ 
        if( entityKiller == null ) throw new IllegalStateException( "first init EntityKiller" );
        return this.entityKiller; 
    }

    @Override
    public void update(int frameNumber) {
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }
    
}
