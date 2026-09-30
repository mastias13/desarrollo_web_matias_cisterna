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


function validate(){
    let valid=  validators.validateRegex("name", /^[a-zA-Z0-9_-]+$/, "Caracteres permitidos (a-zA-Z0-9_-)") &&
    validators.validateLength("name", 3, 16, 1, 1) &&
    validators.validateRegex("email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Ingresa un correo válido")&&
    validators.validateRegex("phone", /^[0-9]{9}$/, "Ingresa un número de teléfono válido")&&
    validators.validateSelection("region", "región") &&
    validators.validateSelection("comuna", "comuna") &&
    validators.validateRegex("password", /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/, "Ingresa una contraseña válida (8-15 caracteres, simbolos, mayusculas y minusculas)")
    console.log(valid)
    

    return valid
}


const form = document.getElementById("form-registro");
form.addEventListener("submit", function(event) {
    if (!validate()){
        event.preventDefault()
    }

})


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", function(){
    view_pass()
})
export function view_pass() {
    const pass_box = document.getElementById("password");
    if (pass_box.type == "text") {
        pass_box.type = "password"
    } else {
        pass_box.type = "text"
    }
}