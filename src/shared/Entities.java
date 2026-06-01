package shared;

public enum Entities {
    PLAYER(16,16),
    CAPTURED_PLAYER(16,16),
    BOSS_GALAGA(15,16),
    BOSS_GALAGA_ONE_SHOT(15,16),
    GOEI(13,10),
    ZAKO(13,10),
    PLAYER_SHOT(3,8),
    ENEMY_SHOT(3,8),
    ALIEN_SHOT(3,8),
    ALIEN_EXPLOSION( 32, 32 );

    private final int width, height;
    Entities(int w, int h) { this.width = w; this.height = h; }
    public int getWidth() { return width; }
    public int getHeight() { return height; }
}