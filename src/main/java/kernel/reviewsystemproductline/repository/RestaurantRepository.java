package kernel.reviewsystemproductline.repository;

import kernel.reviewsystemproductline.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
}
