package cl.uchile.api_avistamientos.service;

import cl.uchile.api_avistamientos.dto.SearchResultDTO;
import cl.uchile.api_avistamientos.entity.Avistamiento;
import cl.uchile.api_avistamientos.entity.Nota;
import cl.uchile.api_avistamientos.repository.AvistamientoRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    private final AvistamientoRepository repository;

    public SearchService(
            AvistamientoRepository repository
    ) {
        this.repository = repository;
    }

    public List<SearchResultDTO> search(String q) {

        return repository.search(q)
                .stream()
                .map(this::toDto)
                .toList();
    }

    private SearchResultDTO toDto(
            Avistamiento a
    ) {

        Double promedio = null;

        if (!a.getNotas().isEmpty()) {

            promedio =
                a.getNotas()
                 .stream()
                 .mapToInt(Nota::getNota)
                 .average()
                 .orElse(0);
        }

        return new SearchResultDTO(
                a.getId(),
                a.getVoluntario().getNombre(),
                a.getAve().getNombre(),
                a.getComuna().getNombre(),
                a.getFechaHora().toString(),
                promedio
        );
    }
}
