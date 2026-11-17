package cl.uchile.api_avistamientos.controller;

import cl.uchile.api_avistamientos.dto.SearchResultDTO;
import cl.uchile.api_avistamientos.service.SearchService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SearchController {

    private final SearchService service;

    public SearchController(
            SearchService service
    ) {
        this.service = service;
    }

    @GetMapping("/search")
    public List<SearchResultDTO> search(
            @RequestParam String q
    ) {
        return service.search(q);
    }
}
