package model.entities;

import shared.Entities;
import shared.RotationDirection;

public abstract class Entity {
    
    //-----------------------------
    //PROTECTED ENTITY VARIABLES
    //-----------------------------

    protected Entities entityName;
    protected int x;
    protected int y;
    protected int width;
    protected int height;
    protected int speed; //number of pixels or points skipped per frame
    protected boolean isToRemove; //is entity set for removal
    protected RotationDirection direction; // present direction
    protected int animationFrame; // present animation frame

    //----------------------
    //PROTECTED COSTRUCTOR
    //----------------------

    protected Entity( int x, int y, int width, int height, int speed, RotationDirection direction ){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direction;
        isToRemove = false;
        animationFrame = 1;
    }


    //----------------------------------
    //ABSTRACT PUBLIC ENTITY METHODS
    //----------------------------------

    public abstract void update( int frameNumber );


    //not used cause incapsulated in entity 
    //----------------------------------------------
    //ENTITY METHODS TO CHANGE PRIVATE VARIABLES
    //----------------------------------------------

    /*public void setX( int x){ this.x = x; }
    public void setY( int y ){ this.y = y; }
    public void setDX( int dx ){ this.dx = dx; }
    public void setDY( int dy ){ this.dy = dy; }
    public void setWidth( int collisionWidth ){ this.width = collisionWidth; }
    public void setHeight( int height ){ this.height = height; }
    public void setToRemove(){ this.isToRemove = true; }*/

    
    //------------------------------------------
    //ENTITY METHODS TO GET PRIVATE VARIABLES
    //------------------------------------------

    public Entities getEntityName(){ return this.entityName; }
    public int getX(){ return this.x; }
    public int getY(){ return this.y; }
    public int getCenterX() { return (int)Math.ceil( (double) this.x + (this.width / 2) ); } //ceil approssimation for odd numbers
    public int getCenterY() { return (int)Math.ceil( (double) this.y + (this.height / 2) ); } //ceil approssimation for odd numbers
    public int getWidth(){ return this.width; }
    public int getHeight(){ return this.height; }
    public int getSpeed(){ return this.speed; }
    public RotationDirection getDirection(){ return this.direction; }
    public boolean isToRemove(){ return this.isToRemove; }
    public int getAnimationFrame(){ return this.animationFrame; }

}