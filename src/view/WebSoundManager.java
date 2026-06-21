package view;

import java.util.LinkedList;

import org.teavm.jso.JSBody;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLAudioElement;
import org.teavm.jso.dom.html.HTMLDocument;

import shared.Events;

class WebSoundManager {

    private static final int POOL_SIZE = 4;

    private static HTMLAudioElement[][] pool;
    private static int[]               poolIndex;
    private static boolean             initialized = false;

    private WebSoundManager() {}

    // -----------------------------------------------------------------------
    // Sound file paths (relative to index.html)
    // -----------------------------------------------------------------------

    private static String pathForEvent(Events e) {
        switch (e) {
            case ZAKO_EXPLODED:           return "web/js/sounds/zako_destroy.wav";
            case GOEI_EXPLODED:           return "web/js/sounds/goei_destroy.wav";
            case BOSS_GALAGA_EXPLODED:    return "web/js/sounds/boss_destroy.wav";
            case BOSS_GALAGA_NOW_ONESHOT: return "web/js/sounds/boss_damage.wav";
            case PLAYER_SHOOTING:         return "web/js/sounds/fire.wav";
            case ALIEN_DIVING:            return "web/js/sounds/dive.wav";
            case LIFE_LOST:               return "web/js/sounds/explosion.wav";
            case COIN_SCREEN_OPENED:      return "web/js/sounds/credit.wav";
            case GAME_STARTED:            return "web/js/sounds/start.wav";
            case NEXT_STAGE:              return "web/js/sounds/stage_count.wav";
            case CHALLENGING_STAGE:       return "web/js/sounds/challenging_stage_start.wav";
            default:                      return null;
        }
    }

    // -----------------------------------------------------------------------
    // Init — pre-loads a pool of audio elements per event
    // -----------------------------------------------------------------------

    static void init() {
        Events[] values = Events.values();
        int n = values.length;
        pool      = new HTMLAudioElement[n][POOL_SIZE];
        poolIndex = new int[n];

        HTMLDocument doc = Window.current().getDocument();

        for (int i = 0; i < n; i++) {
            String path = pathForEvent(values[i]);
            if (path == null) continue;
            for (int j = 0; j < POOL_SIZE; j++) {
                HTMLAudioElement audio = (HTMLAudioElement) doc.createElement("audio");
                audio.setSrc(path);
                audio.load();
                pool[i][j] = audio;
            }
            poolIndex[i] = 0;
        }
        initialized = true;
    }

    // -----------------------------------------------------------------------
    // Play — drain the events queue and trigger the matching sound
    // -----------------------------------------------------------------------

    static void playSounds(LinkedList<Events> eventsQueue) {
        if (!initialized) return;
        if (eventsQueue == null || eventsQueue.isEmpty()) return;

        while (!eventsQueue.isEmpty()) {
            Events e = eventsQueue.poll();
            int idx = e.ordinal();
            if (pool[idx] == null) continue;

            HTMLAudioElement audio = pool[idx][poolIndex[idx]];
            poolIndex[idx] = (poolIndex[idx] + 1) % POOL_SIZE;

            if (audio != null) {
                rewindAndPlay(audio);
            }
        }
    }

    @JSBody(params = "audio", script = "audio.currentTime = 0; audio.play().catch(function(){});")
    private static native void rewindAndPlay(HTMLAudioElement audio);
}
