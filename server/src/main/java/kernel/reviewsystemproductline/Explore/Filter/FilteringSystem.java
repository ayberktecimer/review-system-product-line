package kernel.reviewsystemproductline.Explore.Filter;

import kernel.reviewsystemproductline.Helpers.ReadFile;
import kernel.reviewsystemproductline.Utility.Image;

import java.io.FileNotFoundException;

public class FilteringSystem {

    boolean hasAgeLimit;
    AgeLimitation ageLim;

    public FilteringSystem(String type) {
        System.out.println("filtering system is generated");

        try {
            hasAgeLimit = Boolean.parseBoolean(ReadFile.readFile("hasAgeLimit"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (hasAgeLimit) {
            ageLim = new AgeLimitation();
        }
    }

}
