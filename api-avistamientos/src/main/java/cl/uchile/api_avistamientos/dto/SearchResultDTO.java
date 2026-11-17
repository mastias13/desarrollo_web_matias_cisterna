package cl.uchile.api_avistamientos.dto;

public record SearchResultDTO(
        Integer id,
        String voluntario,
        String ave,
        String comuna,
        String fecha,
        Double nota
) {
}
