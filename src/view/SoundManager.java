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

    private static Map<Events, Clip[]> clipArrayMap;

    private static final int CLIP_PER_ARRAY = 10;

    private static final String BOSS_DAMAGE_PATH = "src//view//galaga_wov//boss_damage.wav";
    private static final String BOSS_DESTROY_PATH = "src//view//galaga_wov//boss_destroy.wav";
    private static final String CHALLENGING_STAGE_START_PATH = "src//view//galaga_wov//challenging_stage_start.wav";
    private static final String CREDIT_PATH = "src//view//galaga_wov//credit.wav";
    private static final String DIVE_PATH = "src//view//galaga_wov//dive.wav";
    private static final String EXPLOSION_PATH = "src//view//galaga_wov//explosion.wav";
    private static final String FIRE_PATH = "src//view//galaga_wov//fire.wav";
    private static final String GOEI_DESTROY_PATH = "src//view//galaga_wov//goei_destroy.wav";
    private static final String STAGE_COUNT_PATH = "src//view//galaga_wov//stage_count.wav";
    private static final String START_PATH = "src//view//galaga_wov//start.wav";
    private static final String ZAKO_DESTROY_PATH = "src//view//galaga_wov//zako_destroy.wav";

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
            
            //populate map for audioPooling
            clipArrayMap = new HashMap<Events, Clip[]>();

            int tempClipPerArray = CLIP_PER_ARRAY;

            for( Events e : Events.values() ){
                

                File soundFile = null;

                switch (e) {
                    case ZAKO_EXPLODED:
                        soundFile = new File(ZAKO_DESTROY_PATH);
                        break;
                    case BOSS_GALAGA_EXPLODED:
                        soundFile = new File(BOSS_DESTROY_PATH);
                        break;
                    case GOEI_EXPLODED:
                        soundFile = new File(GOEI_DESTROY_PATH);
                        break;
                    case NEXT_STAGE:
                        soundFile = new File(STAGE_COUNT_PATH);
                        break;
                    case CHALLENGING_STAGE:
                        soundFile = new File(CHALLENGING_STAGE_START_PATH);
                        tempClipPerArray = 1;
                        break;
                    case PLAYER_SHOOTING:
                        soundFile = new File(FIRE_PATH);
                        break;
                    case COIN_SCREEN_OPENED:
                        soundFile = new File(CREDIT_PATH);
                        tempClipPerArray = 1;
                        break;
                    case GAME_STARTED:
                        soundFile = new File(START_PATH);
                        tempClipPerArray = 1;
                        break;
                    case BOSS_GALAGA_NOW_ONESHOT:
                        soundFile = new File(BOSS_DAMAGE_PATH);
                        break;
                    case ALIEN_DIVING:
                        soundFile = new File(DIVE_PATH);
                        break;
                    case LIFE_LOST:
                        soundFile = new File(EXPLOSION_PATH);
                        tempClipPerArray = 1;
                        break;
                    default:
                        break;
                }// end switch

                Clip[] clipArray = new Clip[tempClipPerArray];

                //continue in case of not used events
                if (soundFile == null || ( ! soundFile.exists() ) ) { continue; }

                //create n clips
                for( int i = 0; i < tempClipPerArray; i ++ ){

                    // 1. Init clip
                    Clip audioClip = null;

                    try {

                        // 2. open stream
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

                    // 3. add clip to array
                    clipArray[i] = audioClip;

                }// end fill array

            //populate clipArrayMap
            clipArrayMap.put( e, clipArray );

            }// end cicle events

        }// end try

        catch( Exception e ){ e.printStackTrace(); }

        //play sound to init hardware
        forceHardwareInitialization(null);

    }//end init sound manager
    

    //play sound from event
    public static void playSounds( LinkedList<Events> eventsQueue ) {

        if (clipArrayMap == null) { throw new IllegalStateException("First Initialize SoundManager"); }
        if( eventsQueue == null) return; 
        if ( eventsQueue.isEmpty() ) return;

        while( !eventsQueue.isEmpty() ){
        
            Events e = eventsQueue.poll();

            //use audioPooling method
            Clip[] pool = clipArrayMap.get(e);
            if (pool != null) {
                playSoundFromClipArray(pool);
            }
            
        }
    }

    //audioPooling method
    private static void playSoundFromClipArray( Clip[] clipArray ){

        //search for free clip
        for( Clip c: clipArray ){

            //free clip found
            if( ! c.isRunning() ){
                c.setFramePosition(0);
                c.start();
                return;
            }
            
        }

        //free clip not found
        clipArray[0].stop();
        clipArray[0].setFramePosition(0);
        clipArray[0].start();

    }// end playSoundFromClipArray

    //sound hardware warmup to fix first sound freeze
    private static void forceHardwareInitialization(File sampleFile) {
        try {
            // open stream with random file
            try (AudioInputStream ais = AudioSystem.getAudioInputStream(new File(START_PATH))) {
                AudioFormat af = ais.getFormat();
                DataLine.Info info = new DataLine.Info(Clip.class, af);
                
                if (AudioSystem.isLineSupported(info)) {
                    Clip warmupClip = (Clip) AudioSystem.getLine(info);
                    warmupClip.open(ais);
                    
                    // set volume to 0
                    if (warmupClip.isControlSupported(FloatControl.Type.MASTER_GAIN)) {
                        FloatControl gain = (FloatControl) warmupClip.getControl(FloatControl.Type.MASTER_GAIN);
                        gain.setValue(gain.getMinimum());
                    }
                    
                    // start clip
                    warmupClip.start();
                    
                    // give time to native hardware to wake up and  load drivers.
                    // just 50 milliseconds so that player cant feel them but audio warms ups
                    try {
                        Thread.sleep(50); 
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                    
                    // clean clip
                    warmupClip.stop();
                    warmupClip.close();
                }
            }
        } catch (Exception e) {
            System.err.println("Audio hardware warmup skipped or failed: " + e.getMessage());
        }
    }// end force hardware initialization
}