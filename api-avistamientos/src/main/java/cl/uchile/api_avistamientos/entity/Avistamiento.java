package cl.uchile.api_avistamientos.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "avistamiento")
public class Avistamiento {

    @Id
    private Integer id;

    @Column(name = "fecha_hora")
    private LocalDateTime fechaHora;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "voluntario_id")
    private Voluntario voluntario;

    @ManyToOne
    @JoinColumn(name = "ave_id")
    private Ave ave;

    @ManyToOne
    @JoinColumn(name = "comuna_id")
    private Comuna comuna;

    @OneToMany(mappedBy = "avistamiento")
    private List<Registro> registros;

    @OneToMany(mappedBy = "avistamiento")
    private List<Comentario> comentarios;

    @OneToMany(mappedBy = "avistamiento")
    private List<Nota> notas;

    public Integer getId() {
        return id;
    }

    public Voluntario getVoluntario() {
        return voluntario;
    }

    public Ave getAve() {
        return ave;
    }

    public Comuna getComuna() {
        return comuna;
    }

    public List<Nota> getNotas() {
        return notas;
    }

    public LocalDateTime getFechaHora() {
        return fechaHora;
    }
}
