import setComunas from "./comunas.js";
import * as validators from "./validators.js"
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


let valid_files = false

const files = document.getElementById("img")
files.addEventListener("change", function(event){
    event.preventDefault()
    valid_files = validators.validateFiles("img", 3)
})


// Validaciones
function validarFormulario(){
    

    let val = validators.validateSelection("species", "especie") &&
    validators.validateRegex("desc", /^[a-zA-Z0-9_-áéíóúÁÉÍÓÚÑñüÜ]+/, "Usa caracteres válidos (a-zA-Z0-9áéíóúñüÁÉÍÓÚÑÜ\s)")&&
    validators.validateLength("desc", 10, 500, 10, 100)&&
    validators.validateDateTime("date", "time", 14) &&
    validators.validateSelection("region", "región")&&
    validators.validateSelection("comuna", "comuna") &&
    validators.validateLengthFiles("img", 1,3, valid_files) &&
    valid_files
    return val

}


const form = document.getElementById("form-new-bird");
form.addEventListener("submit", function(event){
    if(!validarFormulario()){
        event.preventDefault()
    }
    
})
