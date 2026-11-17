package cl.uchile.api_avistamientos.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "region")
public class Region {

    @Id
    private Integer id;

    private String nombre;

    @OneToMany(mappedBy = "region")
    private List<Comuna> comunas;

    public Integer getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public List<Comuna> getComunas() {
        return comunas;
    }
}
