package elecciones.elecciones.repository;

import elecciones.elecciones.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Puedes agregar métodos personalizados aquí si es necesario
}
