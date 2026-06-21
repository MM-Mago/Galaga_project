import org.teavm.classlib.ResourceSupplier;
import org.teavm.classlib.ResourceSupplierContext;

public class GalagaResourceSupplier implements ResourceSupplier {
    @Override
    public String[] supplyResources(ResourceSupplierContext context) {
        return new String[] { "model/formations.txt", "model/divingPaths.txt" };
    }
}
