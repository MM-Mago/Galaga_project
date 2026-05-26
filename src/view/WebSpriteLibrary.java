package view;

import java.util.HashMap;
import java.util.Map;

import org.teavm.jso.JSBody;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.canvas.ImageData;
import org.teavm.jso.typedarrays.Uint8ClampedArray;
import org.teavm.jso.dom.events.Event;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;
import org.teavm.jso.browser.Window;

import shared.Entities;
import shared.RotationDirection;

class WebSpriteLibrary {

    static HTMLImageElement imgSprites;
    static HTMLImageElement imgInitialScreen;
    static HTMLImageElement imgCoinInserted;
    static HTMLImageElement imgNumbers;
    static HTMLImageElement imgLoadingScreen;

    private static Map<String, HTMLCanvasElement> cache = new HashMap<>();
    private static HTMLDocument doc;

    // callback invoked once all 5 images have fired onload
    private static Runnable onAllLoaded;
    private static int loadedCount = 0;
    private static final int TOTAL_IMAGES = 5;

    private WebSpriteLibrary() {}

    // -----------------------------------------------------------------------
    // Init — starts loading; calls onLoaded when every image is ready
    // -----------------------------------------------------------------------

    static void init(Runnable onLoaded) {
        doc = Window.current().getDocument();
        onAllLoaded = onLoaded;
        loadedCount = 0;

        imgSprites       = loadImage("js/sprites/sprites.png");
        imgInitialScreen = loadImage("js/sprites/initial_screen_sprites.png");
        imgCoinInserted  = loadImage("js/sprites/coin_inserted_screen.png");
        imgNumbers       = loadImage("js/sprites/numbers.png");
        imgLoadingScreen = loadImage("js/sprites/loading_screen_sprites.png");
    }

    private static HTMLImageElement loadImage(String src) {
        HTMLImageElement img = (HTMLImageElement) doc.createElement("img");
        img.addEventListener("load", new EventListener<Event>() {
            @Override public void handleEvent(Event e) { onOneLoaded(); }
        });
        img.addEventListener("error", new EventListener<Event>() {
            @Override public void handleEvent(Event e) { onImageLoadError(src); }
        });
        img.setSrc(src);
        return img;
    }

    private static void onImageLoadError(String src) {
        logError("Failed to load image: " + src);
        loadedCount++;
        if (loadedCount == TOTAL_IMAGES) {
            logError("Some images failed to load. Attempting to start game anyway.");
            buildShots();
            if (onAllLoaded != null) onAllLoaded.run();
        }
    }

    private static void logError(String msg) {
        consoleError(msg);
    }

    @JSBody(params = "msg", script = "console.error('Galaga: ' + msg);")
    private static native void consoleError(String msg);

    private static void onOneLoaded() {
        loadedCount++;
        if (loadedCount == TOTAL_IMAGES) {
            buildShots();
            if (onAllLoaded != null) onAllLoaded.run();
        }
    }

    // -----------------------------------------------------------------------
    // Retrieval helpers (lazy — build on first access, then cache)
    // -----------------------------------------------------------------------

    static HTMLCanvasElement getSprite(Entities entity, RotationDirection dir, int animationFrame) {
        String key = entity.name() + "_" + dir.name() + "_" + animationFrame;
        if (!cache.containsKey(key)) {
            cache.put(key, buildEntitySprite(entity, dir, animationFrame));
        }
        return cache.get(key);
    }

    static HTMLCanvasElement getSprite(String name) {
        if (!cache.containsKey(name)) {
            cache.put(name, buildNamedSprite(name));
        }
        return cache.get(name);
    }

    static HTMLCanvasElement getNumberSprite(String color, int digit) {
        String key = digit + "_" + color.toUpperCase();
        if (!cache.containsKey(key)) {
            cache.put(key, buildNumberSprite(color.toUpperCase(), digit));
        }
        return cache.get(key);
    }

    // -----------------------------------------------------------------------
    // Sprite-sheet source Y offsets (mirrors SpriteLibrary exactly)
    // -----------------------------------------------------------------------

    private static int offsetYForEntity(Entities e) {
        switch (e) {
            case PLAYER:               return 1;
            case CAPTURED_PLAYER:      return 19;
            case BOSS_GALAGA:          return 37;
            case BOSS_GALAGA_ONE_SHOT: return 55;
            case GOEI:                 return 73;
            case ZAKO:                 return 91;
            default:                   return 1;
        }
    }

    // -----------------------------------------------------------------------
    // Sprite builders
    // -----------------------------------------------------------------------

    private static HTMLCanvasElement buildEntitySprite(Entities entity, RotationDirection dir, int animationFrame) {
        // shots are pre-built in buildShots() — should never arrive here, but guard anyway
        if (entity == Entities.PLAYER_SHOT || entity == Entities.ENEMY_SHOT || entity == Entities.ALIEN_SHOT) {
            return makeBlank(3, 8);
        }

        final int DIM = 16;
        final int GRID = 2;
        final int offsetX = 1;
        final int offsetY = offsetYForEntity(entity);

        int angle = dir.getAngle();
        int i;

        // wings-closed frame (frame 2, facing up only)
        if (animationFrame == 2 && angle == 0) {
            i = 7;
            return clip(imgSprites, offsetX + (DIM + GRID) * i, offsetY, DIM, DIM, false, false);
        }

        if (angle == 0 || angle == 180) {
            i = 6;
        } else {
            i = angle % 90 / 15;
        }

        boolean flipX = false, flipY = false;

        if (angle > 0 && angle < 90) {
            i = 6 - i; flipX = true;
        } else if (angle >= 90 && angle < 180) {
            i = 6 - i; flipX = true; flipY = true;
        } else if (angle == 180) {
            flipY = true;
        } else if (angle > 180 && angle < 270) {
            i = 6 - i; flipY = true;
        }
        // 270-360: no flip

        return clip(imgSprites, offsetX + (DIM + GRID) * i, offsetY, DIM, DIM, flipX, flipY);
    }

    private static void buildShots() {
        HTMLCanvasElement ps = clip(imgSprites, 313, 123, 3, 8, false, false);
        cache.put(Entities.PLAYER_SHOT.name() + "_U_1", ps);

        HTMLCanvasElement es = clip(imgSprites, 313, 123 + 16, 3, 8, false, false);
        cache.put(Entities.ENEMY_SHOT.name() + "_D_1", es);
        cache.put(Entities.ALIEN_SHOT.name() + "_D_1", es);
    }

    private static HTMLCanvasElement buildNamedSprite(String name) {
        final int W = 222, H = 21;
        switch (name) {
            case "1UP":                  return clip(imgInitialScreen, 0, 0,   W, H, false, false);
            case "HIGH_SCORE":           return clip(imgInitialScreen, 0, H,   W, H, false, false);
            case "GALAGA":               return clip(imgInitialScreen, 0, H*2, W, H, false, false);
            case "SCORE":                return clip(imgInitialScreen, 0, H*3, W, H, false, false);
            case "50_100":               return clip(imgInitialScreen, 0, H*4, W, H, false, false);
            case "80_160":               return clip(imgInitialScreen, 0, H*5, W, H, false, false);
            case "CREDIT":               return clip(imgInitialScreen, 0, H*6, W, H, false, false);
            case "COIN_INSERTED_SCREEN": return clipFull(imgCoinInserted);
            case "PLAYER":               return clipHalf(imgLoadingScreen, false);
            case "STAGE":                return clipHalf(imgLoadingScreen, true);
            default:                     return makeBlank(8, 8);
        }
    }

    private static HTMLCanvasElement buildNumberSprite(String color, int digit) {
        final int W = 24, H = 24, OFFX = 25, OFFY = 26;
        int colorRow = color.equals("BLUE") ? 0 : color.equals("YELLOW") ? 1 : 2;
        return clip(imgNumbers, OFFX * digit, OFFY * colorRow, W, H, false, false);
    }

    // -----------------------------------------------------------------------
    // Low-level canvas helpers
    // -----------------------------------------------------------------------

    @JSBody(params = "img", script = "return img && img.complete && img.naturalHeight !== 0;")
    private static native boolean isImageReady(HTMLImageElement img);

    private static HTMLCanvasElement clip(HTMLImageElement src,
            int sx, int sy, int sw, int sh, boolean flipX, boolean flipY) {
        HTMLCanvasElement c = makeCanvas(sw, sh);
        CanvasRenderingContext2D ctx = (CanvasRenderingContext2D) c.getContext("2d");
        ctx.save();
        if (flipX || flipY) {
            ctx.translate(flipX ? sw : 0, flipY ? sh : 0);
            ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
        }
        if (isImageReady(src)) {
            ctx.drawImage(src, sx, sy, sw, sh, 0, 0, sw, sh);
        }
        ctx.restore();
        return c;
    }

    private static HTMLCanvasElement clipFull(HTMLImageElement src) {
        int w = isImageReady(src) ? src.getWidth() : 1;
        int h = isImageReady(src) ? src.getHeight() : 1;
        HTMLCanvasElement c = makeCanvas(w, h);
        CanvasRenderingContext2D ctx = (CanvasRenderingContext2D) c.getContext("2d");
        if (isImageReady(src)) {
            ctx.drawImage(src, 0, 0);
            // PNG background is transparent; opaque near-black pixels are the NAMCO copyright text.
            // Invert only grayscale opaque pixels: black text → white, leave colors unchanged.
            ImageData data = ctx.getImageData(0, 0, w, h);
            Uint8ClampedArray px = data.getData();
            int len = w * h * 4;
            for (int i = 0; i < len; i += 4) {
                int a = px.get(i + 3);
                if (a < 128) continue; // transparent — leave alone
                int r = px.get(i), g = px.get(i + 1), b = px.get(i + 2);
                // True gray: all channels within 10 of each other (excludes yellow/cyan antialiasing)
                boolean isGray = Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && Math.abs(r - b) < 10;
                if (isGray && r < 240) {
                    // invert dark gray antialiasing → light gray for visibility on dark background
                    // leave near-white (r>=240) alone — those are already correct white text
                    int v = 255 - r;
                    px.set(i,     v);
                    px.set(i + 1, v);
                    px.set(i + 2, v);
                }
            }
            ctx.putImageData(data, 0, 0);
        }
        return c;
    }

    private static HTMLCanvasElement clipHalf(HTMLImageElement src, boolean bottom) {
        if (!isImageReady(src)) return makeBlank(222, 21); // Return blank placeholder
        int w = src.getWidth(), h = src.getHeight() / 2;
        HTMLCanvasElement c = makeCanvas(w, h);
        CanvasRenderingContext2D ctx = (CanvasRenderingContext2D) c.getContext("2d");
        int sy = bottom ? src.getHeight() / 2 : 0;
        ctx.drawImage(src, 0, sy, w, h, 0, 0, w, h);
        return c;
    }

    private static HTMLCanvasElement makeCanvas(int w, int h) {
        HTMLCanvasElement c = (HTMLCanvasElement) doc.createElement("canvas");
        c.setWidth(w);
        c.setHeight(h);
        return c;
    }

    private static HTMLCanvasElement makeBlank(int w, int h) {
        return makeCanvas(w, h);
    }
}
