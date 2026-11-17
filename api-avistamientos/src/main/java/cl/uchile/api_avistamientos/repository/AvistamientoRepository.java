package cl.uchile.api_avistamientos.repository;

import cl.uchile.api_avistamientos.entity.Avistamiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AvistamientoRepository
        extends JpaRepository<Avistamiento, Integer> {

    @Query("""
        SELECT a
        FROM Avistamiento a
        WHERE LOWER(a.ave.nombre)
              LIKE LOWER(CONCAT('%', :q, '%'))
           OR LOWER(a.voluntario.nombre)
              LIKE LOWER(CONCAT('%', :q, '%'))
           OR LOWER(a.comuna.nombre)
              LIKE LOWER(CONCAT('%', :q, '%'))
    """)
    List<Avistamiento> search(String q);

}
