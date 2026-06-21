package shared;

import java.io.InputStream;
import java.util.Properties;


public final class SharedConstants {
    
    private SharedConstants(){}

    //for controller
    public static final int FRAMES_PER_SECOND = 60;

    //for model
    public static final int MODEL_SCREEN_WIDTH = 224;
    public static final int MODEL_SCREEN_HEIGHT = 288;

    //from config file
    // view values
    public static final int VIEW_SCREEN_WIDTH; //used in view
    public static final int VIEW_SCREEN_HEIGHT; //used in view

    // model values
    public static final int INITIAL_LIVES; //used in model

    // Cheats
    public static final boolean CHEAT_GOD_MODE; //used in model
    public static final boolean CHEAT_INFINITE_LIVES; //used in model
    public static final boolean CHEAT_INFINITE_SHOTS; //used in model
    public static final int CHEAT_START_STAGE; //used in AlienHandler
    public static final boolean CHEAT_NUKE_BUTTON; //used in controller

    //init class
    static {
        Properties prop = new Properties();

        // set default values
        int vWidth = 448;
        int vHeight = 576;
        int lives = 3;
        int startStage = 1;
        boolean god = false;
        boolean infLives = false;
        boolean infShots = false;
        boolean nuke = false;

        // try to use config file
        try (InputStream input = SharedConstants.class.getResourceAsStream("/config.properties")) {
            if (input != null) {
                prop.load(input);
                vWidth = Integer.parseInt(prop.getProperty("VIEW_SCREEN_WIDTH", "448"));
                vHeight = Integer.parseInt(prop.getProperty("VIEW_SCREEN_HEIGHT", "576"));
                lives = Integer.parseInt(prop.getProperty("INITIAL_LIVES", "3"));
                startStage = Integer.parseInt(prop.getProperty("CHEAT_START_STAGE", "1"));
                god = Boolean.parseBoolean(prop.getProperty("CHEAT_GOD_MODE", "false"));
                infLives = Boolean.parseBoolean(prop.getProperty("CHEAT_INFINITE_LIVES", "false"));
                infShots = Boolean.parseBoolean(prop.getProperty("CHEAT_INFINITE_SHOTS", "false"));
                nuke = Boolean.parseBoolean(prop.getProperty("CHEAT_NUKE_BUTTON", "false"));
            } else {
                System.out.println("Config non found, default values will be used");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        // assign variables
        VIEW_SCREEN_WIDTH = vWidth;
        VIEW_SCREEN_HEIGHT = vHeight;
        INITIAL_LIVES = lives;
        CHEAT_START_STAGE = startStage;
        CHEAT_GOD_MODE = god;
        CHEAT_INFINITE_LIVES = infLives;
        CHEAT_INFINITE_SHOTS = infShots;
        CHEAT_NUKE_BUTTON = nuke;

    }

}//end class
