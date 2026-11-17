import * as validators from "./validators.js"


function loadNotas(){
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "/notas/"+avistamientoId, true)

  xhr.onload = function(){
    let notas = JSON.parse(xhr.responseText);
    let notasSection = document.getElementById("notas");
    notasSection.replaceChildren()

    let notaFinal = document.createElement("p")
    let nombre = document.createElement("b");
    nombre.textContent="Nota: "
    notaFinal.appendChild(nombre);
    let promedio = notas[0].nota
    if (promedio == -1){
      promedio = "-"
    }
    notaFinal.appendChild(document.createTextNode(`${promedio}`))
    notasSection.appendChild(notaFinal);
  }

  xhr.send();
}

if (!(typeof avistamientoId === 'undefined')){
  loadNotas();
}

function validarFormulario(){
  let val = validators.validateLength("nota", 1, 1, 1, 1) &&
    validators.validateRegex("nota", /^[1,2,3,4,5,6,7]$/, "Usa caracteres válidos (Número entre 1 y 7)") 
  return val 
}
const form = document.getElementById("form-nota");
form.addEventListener("submit", function(event){
  event.preventDefault()
  if (validarFormulario()){
    let notaobj = document.getElementById("nota")
    let nota = notaobj.value
    let selected = document.getElementById("selected").value
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:8080/api/evaluar", true);

    xhr.setRequestHeader(
      "Content-Type",
      "application/json"
    );

    xhr.onload = function() {
      let respuesta = JSON.parse(xhr.responseText);
      alert(respuesta.mensaje);
      if (respuesta.mensaje == "Nota agregada"){
        notaobj.value = ''
      }
      loadNotas();
    }
  
    xhr.send(JSON.stringify({
      avistamientoId: selected,
      nota: nota,
    }))
  }
  })
