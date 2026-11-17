package cl.uchile.api_avistamientos.repository;

import cl.uchile.api_avistamientos.entity.Nota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NotaRepository
        extends JpaRepository<Nota, Integer> {

    @Query("""
        SELECT AVG(n.nota)
        FROM Nota n
        WHERE n.avistamiento.id = :id
    """)
    Double promedio(Integer id);

}
