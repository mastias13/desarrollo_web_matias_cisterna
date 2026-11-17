package cl.uchile.api_avistamientos.controller;

import cl.uchile.api_avistamientos.dto.NotaRequestDTO;
import cl.uchile.api_avistamientos.service.NotaService;

import java.util.Map;
import java.util.HashMap;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class NotaController {

    private final NotaService service;

    public NotaController(
            NotaService service
    ) {
        this.service = service;
    }

    @PostMapping("/evaluar")
    public Map<String, String> evaluar(
            @RequestBody NotaRequestDTO dto
    ) {
        Double promedio = service.evaluar(
                dto.avistamientoId(),
                dto.nota()
        );
        Map<String, String> response = new HashMap<>();

        response.put("mensaje", "Nota agregada");
        return response;
    }

    @GetMapping("/nota")
    public Map<String, Double> getNota(
          @RequestParam Integer id
        ){
      Map<String, Double> response =
        new HashMap<>();

      response.put(
          "nota",
          service.obtenerPromedio(id)
          );
      return response;
        }
}
