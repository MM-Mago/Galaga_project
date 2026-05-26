# Web Port — Implementation Notes

This document describes the design decisions and implementation details behind
porting the Galaga desktop (Java/Swing) game to the web using TeaVM.

---

## Goal

Run the game in a browser without rewriting the game logic. Only the view layer
is replaced. All model and controller code is unchanged.

---

## Technology choice: TeaVM

TeaVM compiles Java source (via bytecode) to JavaScript or WebAssembly. It was
chosen over alternatives for these reasons:

- Keeps Java as the single source language across both desktop and web builds
- Swing/AWT is not emulated — only the view layer needs to be replaced, which
  was always the plan
- Smaller JS output than CheerpJ (no JVM emulator bundled)
- Simpler modern build (Maven plugin) compared to GWT
- The game logic is already complete, so community-support risk for TeaVM is
  low: the only new TeaVM-specific code is the canvas bindings in the web view

---

## Architecture overview

The original project uses a clean MVC pattern with interface boundaries between
layers. The web port exploits those boundaries directly:

```
┌─────────────────────────────────────────────────────────┐
│                     Unchanged code                       │
│  model/**   controller/**   shared/**                    │
│  GameModel  GameController  Entities  EntityInfo  …      │
└─────────────────────────────────────────────────────────┘
          ▲ ModelForView          ▲ ViewForController
          │                       │
┌─────────┴───────────────────────┴─────────────────────┐
│                   Web view layer (new)                  │
│  WebGameView  WebSpriteLibrary                          │
│  WebBackgroundPainter  WebEntityPainter                 │
│  WebInterfacePainter                                    │
└─────────────────────────────────────────────────────────┘
          ▲
┌─────────┴──────────────────┐
│  Platform entry points      │
│  Main.java    (desktop)     │
│  WebMain.java (web/TeaVM)   │
└────────────────────────────┘
```

The two entry points are the only place where the build diverges. Everything
else compiles identically.

---

## Files changed or added

### `src/controller/api/ControllerForMain.java` — modified

The original interface exposed `startTimer()` and `stopTimer()`, which assumed
a `javax.swing.Timer` existed inside `GameController`. This tied the loop
mechanism to the Swing platform.

**Change:** replaced both methods with a single `tick()` method. The controller
no longer owns or starts any timer — it only advances one frame when told to.

```java
// before
public void startTimer();
public void stopTimer();

// after
public void tick();   // advance model + view by one frame
```

### `src/controller/GameController.java` — modified

- Removed `javax.swing.Timer` field and `initTimer()` method
- Removed the import for `javax.swing.Timer`
- Implemented `tick()`, which calls `updateFramenumber()`, `model.update()`,
  and `view.refresh()` in sequence — the same work the Swing lambda did before

The controller is now platform-neutral.

### `src/Main.java` — modified (desktop entry point)

The Swing timer is now owned here instead of inside the controller. On each
tick it calls `controller.tick()`.

```java
javax.swing.Timer swingTimer = new javax.swing.Timer(
    MILLISECONDS_PER_FRAME, e -> controller.tick());
swingTimer.start();
```

This keeps `javax.swing` entirely out of the controller and therefore out of
the TeaVM compilation path.

### `src/WebMain.java` — new (web entry point)

TeaVM's entry point. Bootstraps the same MVC singletons as `Main.java` but
drives the loop using `Window.requestAnimationFrame`. A timestamp comparison
enforces the 60 FPS target — `requestAnimationFrame` fires as fast as the
display refresh rate, so without throttling the game would run at 120+ FPS on
high-refresh-rate monitors.

```java
private static void loop(double timestamp) {
    if (timestamp - lastTime >= MS_PER_FRAME) {
        lastTime = timestamp;
        controller.tick();
    }
    Window.requestAnimationFrame(WebMain::loop);
}
```

### `src/view/WebGameView.java` — new

Implements `ViewForController`, the only interface the controller calls on the
view. Responsibilities:

- Finds the `<canvas id="game-canvas">` element in the DOM
- Attaches `keydown`/`keyup` listeners on `document` (browser equivalent of
  `KeyListener`)
- On `refresh(frameNumber)`: saves the canvas context, applies the same
  `scale()` the desktop view uses (model coordinates 224×288 → canvas 450×600),
  then delegates to the three web painters

Key differences from the desktop `GameView`:
- No `JFrame`, no `JPanel`, no `repaint()` — the canvas is painted directly
- Input uses `e.getCode()` (e.g. `"ArrowLeft"`) instead of `KeyEvent.VK_*`
- Scaling is done via `ctx.scale()` instead of `Graphics2D.scale()`

### `src/view/WebSpriteLibrary.java` — new

Web equivalent of `SpriteLibrary`. The desktop version loads PNG files from
disk into `BufferedImage` objects and uses `AffineTransform` to flip them.
Neither `BufferedImage` nor `AffineTransform` exist in the browser.

**Approach:** each sprite-sheet image is loaded as an `HTMLImageElement` (a
standard `<img>` tag created programmatically). Sub-sprites are extracted
lazily on first access and stored as off-screen `HTMLCanvasElement` objects —
the Canvas 2D equivalent of `BufferedImage`.

**Flip transforms** are reproduced using `ctx.translate` + `ctx.scale(-1, 1)`
before drawing the source region, matching the `AffineTransformOp` logic in the
desktop version exactly.

**Caching** uses the same string key scheme as the desktop
(`"ENTITY_DIR_FRAME"`), so the painter code that builds keys is identical in
both versions.

Sprite paths point to `js/sprites/*.png` relative to `index.html`. The PNG
files are copied from `src/view/galaga_png/` into `web/js/sprites/` at project
setup time — they are the same assets, not re-exported.

Shot sprites (`PLAYER_SHOT`, `ENEMY_SHOT`, `ALIEN_SHOT`) use irregular
coordinates in the sprite sheet and are registered via `buildShots()`, called
once all images have loaded, before the game loop starts.

### `src/view/WebBackgroundPainter.java` — new

Direct port of `BackgroundPainter`. State variables (`presentFrame`,
`presentDY`, `oldViewFrame`) are static, matching the desktop. The four
background PNGs are loaded as `HTMLImageElement` objects and drawn three times
per frame (above, at, and below the current scroll offset) to produce the
infinite-scroll effect.

### `src/view/WebEntityPainter.java` — new

Direct port of `EntityPainter`. Iterates `model.getEntityListForView()`,
checks game state for player visibility rules, and calls
`WebSpriteLibrary.getSprite()`. The sprite centering offset formula is
identical to the desktop version:

```java
int spriteX = info.x() - (int) Math.ceil(
    (double)(sprite.getWidth() - info.entity().getWidth()) / 2);
```

### `src/view/WebInterfacePainter.java` — new

Direct port of `InterfacePainter`. All drawing calls are translated from
`Graphics2D.drawImage` to `ctx.drawImage`. Number rendering helpers
(`paintNumberRTL`, `paintNumberLTR`) are ported with identical digit-extraction
logic.

### `src/model/AlienFormationsLibrary.java` — modified

**Desktop:** used `FileInputStream` with a relative path (`src/model/data/formations.txt`).
This does not work in a browser — no filesystem exists.

**Web fix:** switched to `getClassLoader().getResourceAsStream("model/data/formations.txt")`.
TeaVM embeds classpath resources as base64 in the generated JS when a
`ResourceSupplier` declares them.

**`src/GalagaResourceSupplier.java`** implements `org.teavm.classlib.ResourceSupplier`
and returns `"model/data/formations.txt"`. It is registered via
`src/META-INF/services/org.teavm.classlib.ResourceSupplier` (Java ServiceLoader).
At TeaVM compile time this causes the file to be base64-encoded and embedded
directly inside `galaga.js`, so the browser can read it without an HTTP request.

**`pom.xml`** declares `src/` as a Maven resource directory (excluding `*.java`)
so that `model/data/formations.txt` and the `META-INF/services/` registration
file are copied into `target/classes` and included in the classpath TeaVM scans.

Also fixed: `ArrayList.getLast()` (Java 21 API not in TeaVM's classlib) replaced
with `list.get(list.size() - 1)`, and bounds-clamping added in `Alien.java` to
prevent `subList` from receiving an out-of-range index after the path queue is
exhausted.

### `web/index.html` — new

Minimal host page. Contains a single `<canvas id="game-canvas">` sized at
450×600 (matching the desktop window), centered on a black background. The CSS
property `image-rendering: pixelated` prevents the browser from blurring
pixel-art sprites when the canvas is scaled by CSS on high-DPI displays.

Includes a `window.onerror` handler that extracts Java exception details from
`e.error.javaException` and prints them to the console with class name and
stack trace — useful for debugging TeaVM runtime errors.

### `web/js/sprites/` — new directory

Holds the nine PNG assets copied from `src/view/galaga_png/`. The web view
references them with relative paths from `index.html`. No image processing or
re-export is needed — the same files used by the desktop build are served
directly.

### `pom.xml` — new

Maven build file. Key decisions:

- **Source directory** set to `src/` to match the existing project layout
- **Resource directory** also set to `src/` (excluding `*.java`) so that
  `model/data/formations.txt` and `META-INF/services/` reach `target/classes`
- **TeaVM Maven plugin** bound to the `package` phase; main class is
  `WebMain`; output is `web/js/galaga.js`; debug maps enabled
- **TeaVM version 0.14.0** — requires Java 21 bytecode; `teavm-core` must be
  an explicit project dependency (runtime stubs moved from `teavm-classlib`)

Dependencies:
- `teavm-jso`: the JSO system for calling browser APIs from Java
- `teavm-jso-apis`: bindings for `Window`, `HTMLCanvasElement`,
  `CanvasRenderingContext2D`, `HTMLImageElement`, `KeyboardEvent`, etc.
- `teavm-classlib`: TeaVM's Java standard library replacement
- `teavm-core`: runtime stubs (`PlatformDetector` etc., moved here in 0.14.0)

### `.vscode/settings.json` — modified

Removed the Windows-absolute-path reference to `fond.jar` (a university
teaching library, unused). Set `java.configuration.updateBuildConfiguration`
to `"automatic"` so VS Code picks up TeaVM JARs from Maven after `mvn package`.

---

## Build and run

```bash
# compile Java → JavaScript (first run downloads ~30 MB of TeaVM deps)
mvn package

# copy sprites (only needed once)
cp src/view/galaga_png/*.png web/js/sprites/

# serve locally (browsers block local file:// image loads)
cd web && python3 -m http.server 8080

# open in browser
open http://localhost:8080
```

For a release-optimised bundle, edit `pom.xml`:

```xml
<debugInformationGenerated>false</debugInformationGenerated>
<sourceMapsGenerated>false</sourceMapsGenerated>
<minifying>true</minifying>
```

---

## Controls

| Key | Action |
|---|---|
| `C` | Insert coin / start |
| `Space` | Start game / shoot |
| `←` / `→` | Move player |
| `N` | Debug: nuke all aliens |

---

## Known limitations and future work

- **No audio.** The desktop build also has no audio; not a regression.

- **No mobile / touch input.** Keyboard-only. An on-screen D-pad could be
  added to `index.html` and wired into the existing `ActionHandlerForView`
  interface without touching the controller or model.

- **High-DPI scaling.** The canvas is fixed at 450×600 CSS pixels. On Retina
  displays it will be upscaled by the browser. For crisp rendering, multiply
  `canvas.width/height` by `window.devicePixelRatio` and apply an inverse CSS
  scale — a pure HTML/JS change, no Java involved.

- **Diving aliens not implemented.** The `isDiving` path in `Alien.update()`
  has a `// TO IMPLEMENT` comment; this is a desktop-side gap, not a web
  regression.
