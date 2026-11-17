package cl.uchile.api_avistamientos.service;

import cl.uchile.api_avistamientos.entity.Nota;
import cl.uchile.api_avistamientos.repository.AvistamientoRepository;
import cl.uchile.api_avistamientos.repository.NotaRepository;

import org.springframework.stereotype.Service;

@Service
public class NotaService {

    private final NotaRepository notaRepo;
    private final AvistamientoRepository avRepo;

    public NotaService(
            NotaRepository notaRepo,
            AvistamientoRepository avRepo
    ) {
        this.notaRepo = notaRepo;
        this.avRepo = avRepo;
    }

    public Double evaluar(
            Integer avistamientoId,
            Integer nota
    ) {

        if (nota < 1 || nota > 7) {
            throw new RuntimeException(
                "La nota debe estar entre 1 y 7"
            );
        }

        Nota nuevaNota = new Nota();

        nuevaNota.setNota(nota);

        nuevaNota.setAvistamiento(
                avRepo.findById(avistamientoId)
                      .orElseThrow()
        );

        notaRepo.save(nuevaNota);

        return notaRepo.promedio(
                avistamientoId
        );
    }

    public Double obtenerPromedio(
        Integer avistamientoId
        ) {
      return notaRepo.promedio(
          avistamientoId
          );
        }
}
