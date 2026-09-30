import setComunas from "./comunas.js";
// Agregar comunas en el formulario cuando se selecciona la región
const regionSelect = document.getElementById("region")
setComunas(regionSelect.dataset.selected)
regionSelect.addEventListener("change", () => {
    setComunas(regionSelect.dataset.selected)
    setComunas(regionSelect.value)
});
const selects = document.querySelectorAll(
    "select[data-selected]"
)
for (const select of selects){
    select.value = select.dataset.selected
}
