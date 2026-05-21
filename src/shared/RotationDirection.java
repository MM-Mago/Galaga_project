package shared;

public enum RotationDirection {
    
    U(0.0),      UUUR(15.0),   UUR(30.0),    UR(45.0),    URR(60.0),    URRR(75.0),
    R(90.0),     DRRR(105.0),  DRR(120.0),   DR(135.0),   DDR(150.0),   DDDR(165.0),
    D(180.0),    DDDL(195.0),  DDL(210.0),   DL(225.0),   DLL(240.0),   DLLL(255.0), 
    L(270.0),    ULLL(285.0),  ULL(300.0),   UL(315.0),   UUL(330.0),   UUUL(345.0);

    private final double angle;

    //private costructor to init all angles
    RotationDirection(double angle) {
        this.angle = angle;
    }

    public int getAngle() {
        return (int)angle;
    }

    
    //Gets direction from angle (0-360)
    public static RotationDirection fromAngle(double inputAngle) {

        //normalize angle, manage both negatives and over 360 numbers 
        double normalizedAngle = ((inputAngle % 360) + 360) % 360;
        
        RotationDirection closest = U;
        double minDifference = Double.MAX_VALUE;

        for (RotationDirection dir : RotationDirection.values()) {

            //calculate min angular difference ( also manage 360-0 jump )
            double diff = Math.abs(normalizedAngle - dir.angle);
            if (diff > 180) diff = 360 - diff;

            if (diff < minDifference) {
                minDifference = diff;
                closest = dir;
            }
        }
        return closest;
    }
}