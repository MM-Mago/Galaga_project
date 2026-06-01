package view;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.FloatControl;

import shared.Events;


    //------------------------------------------------------------------------------------------------
    // THIS CLASS IS ONLY USED TO PLAY SOUNDS
    //------------------------------------------------------------------------------------------------

// EVERYTHING PACKAGE-PROTECTED OR PRIVATE
public class SoundManager {
    

    //-------------------------
    // PRIVATE VARIABLES
    //-------------------------

    private static Map<Events, File> fileMap;

    private static String bossDamage = "src//view//galaga_wov//boss_damage.wav";
    private static String bossDestroy = "src//view//galaga_wov//boss_destroy.wav";
    private static String challengingStageStart = "src//view//galaga_wov//challenging_stage_start.wav";
    private static String credit = "src//view//galaga_wov//credit.wav";
    private static String dive = "src//view//galaga_wov//dive.wav";
    private static String explosion = "src//view//galaga_wov//explosion.wav";
    private static String fire = "src//view//galaga_wov//fire.wav";
    private static String goeiDestroy = "src//view//galaga_wov//goei_destroy.wav";
    private static String stageCount = "src//view//galaga_wov//stage_count.wav";
    private static String start = "src//view//galaga_wov//start.wav";
    private static String zakoDestroy = "src//view//galaga_wov//zako_destroy.wav";

    //-------------------------
    // PRIVATE COSTRUCTOR
    //-------------------------

    private SoundManager(){}


    //------------------------------------
    // PACKAGE-PROTECTED STATIC METHODS
    //------------------------------------

    static void initSoundManager(){


        //init map
        try{
            
            //populate map
            fileMap = new HashMap<Events, File>();
            for( Events e : Events.values() ){
                
                File file = null;
                switch (e) {
                    case ZAKO_EXPLODED:
                        file = new File(zakoDestroy);
                        break;
                    case BOSS_GALAGA_EXPLODED:
                            file = new File(bossDestroy);
                            break;
                    case GOEI_EXPLODED:
                            file = new File(goeiDestroy);
                            break;
                    case NEXT_STAGE:
                            file = new File(stageCount);
                            break;
                    case CHALLENGING_STAGE:
                            file = new File(challengingStageStart);
                            break;
                    case PLAYER_SHOOTING:
                            file = new File(fire);
                            break;
                    case COIN_SCREEN_OPENED:
                            file = new File(credit);
                            break;
                    case GAME_STARTED:
                            file = new File(start);
                            break;
                    case BOSS_GALAGA_NOW_ONESHOT:
                            file = new File(bossDamage);
                            break;
                    case ALIEN_DIVING:
                            file = new File(dive);
                            break;
                    case LIFE_LOST:
                        file = new File(explosion);
                        break;
                    default:
                        break;
                }
                fileMap.put(e, file );

            }
        }
        catch( Exception e ){ e.printStackTrace(); }

        //play sound to init hardware
        forceHardwareInitialization(null);
    }

    //play sound from event
    public static void playSounds( LinkedList<Events> eventsQueue ) {

        if (fileMap == null) { throw new IllegalStateException("First Initialize SoundManager"); }
        if( eventsQueue == null) return; 
        if ( eventsQueue.isEmpty() ) return;

        while( !eventsQueue.isEmpty() ){
        
            Events e = eventsQueue.poll();

            // 1. Init clip
            Clip audioClip = null;

            try {
                File soundFile = fileMap.get(e);

                // 2. open stream and automatically close it at the end of the try block
                try (AudioInputStream ais = AudioSystem.getAudioInputStream(soundFile)) {
                    
                    AudioFormat af = ais.getFormat();
                    int bufferSize = (int) ais.getFrameLength() * af.getFrameSize();
                    DataLine.Info dataLineInfo = new DataLine.Info(Clip.class, af, bufferSize);

                    if (!AudioSystem.isLineSupported(dataLineInfo)) {
                        throw new IOException("Error: AudioSystem does not support this DataLine");
                    }

                    audioClip = (Clip) AudioSystem.getLine(dataLineInfo);
                    audioClip.open(ais);
                }
                
            } catch (Exception exc) {
                exc.printStackTrace();
            }

            // 3. Play the sound if the clip was created
            if (audioClip != null) {

                // 4. convert to final variable to use lambda
                final Clip clipToPlay = audioClip;

                // Garbage Collection Audio: free memory when the sound ends
                clipToPlay.addLineListener(event -> {
                    if (event.getType() == javax.sound.sampled.LineEvent.Type.STOP) {
                        clipToPlay.close();
                    }
                });

                // Start the sound inside the if statement to prevent NullPointerException
                clipToPlay.start();
            }
        }
    }

    //sound hardware warmup to fix first sound freeze
    private static void forceHardwareInitialization(File sampleFile) {

    try {

        // open stream and line in the game thread
        try (AudioInputStream ais = AudioSystem.getAudioInputStream( new File(start))) {
            AudioFormat af = ais.getFormat();
            DataLine.Info info = new DataLine.Info(Clip.class, af);
            
            if (AudioSystem.isLineSupported(info)) {
                Clip warmupClip = (Clip) AudioSystem.getLine(info);
                warmupClip.open(ais);
                
                // Set clip volume to 0
                if (warmupClip.isControlSupported(FloatControl.Type.MASTER_GAIN)) {
                    FloatControl gain = (FloatControl) warmupClip.getControl(FloatControl.Type.MASTER_GAIN);
                    gain.setValue(gain.getMinimum());
                }
                
                // start and stop to let the system import actual audio drivers.
                warmupClip.start();
                warmupClip.stop();
                warmupClip.close();
            }
        }
    } catch (Exception e) {
        System.err.println("Audio hardware warmup skipped or failed: " + e.getMessage());
    }
}
}