package cl.uchile.api_avistamientos.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "comentario")
public class Comentario {

    @Id
    private Integer id;

    private String nombre;

    private String texto;

    private LocalDateTime fecha;

    @ManyToOne
    @JoinColumn(name = "avistamiento_id")
    private Avistamiento avistamiento;

    public Integer getId() {
        return id;
    }
}
