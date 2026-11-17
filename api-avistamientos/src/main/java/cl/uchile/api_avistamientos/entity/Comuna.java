package cl.uchile.api_avistamientos.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "comuna")
public class Comuna {

    @Id
    private Integer id;

    private String nombre;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

    public Integer getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public Region getRegion() {
        return region;
    }
}
