package shared;

public record EntityInfo(   Entities entity, 
                            int x, 
                            int y, 
                            RotationDirection direction, 
                            int animationFrame,  // ( 1: wings closed, ) ( 2: wings opened )
                            boolean isToRemove
                        ) {

    public int getCenterX(){
        return (int)Math.ceil( (double)x + entity.getWidth()/2 ); //ceil approssimation for odd numbers
    }
    public int getCenterY(){
        return (int)Math.ceil( (double) y + entity.getHeight()/2 ); //ceil approssimation for odd numbers
    }
}