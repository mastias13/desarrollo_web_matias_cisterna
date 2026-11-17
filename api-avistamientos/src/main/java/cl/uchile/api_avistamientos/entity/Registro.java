package cl.uchile.api_avistamientos.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "registro")
public class Registro {

    @Id
    private Integer id;

    @Column(name = "ruta_archivo")
    private String rutaArchivo;

    @Column(name = "nombre_archivo")
    private String nombreArchivo;

    @ManyToOne
    @JoinColumn(name = "avistamiento_id")
    private Avistamiento avistamiento;

    public Integer getId() {
        return id;
    }
}
