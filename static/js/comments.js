import * as validators from "./validators.js"


function loadComments(){
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "/comments/"+avistamientoId, true)

  xhr.onload = function(){
    let comments = JSON.parse(xhr.responseText);
    let commentSection = document.getElementById("comments");
    commentSection.replaceChildren()
    for (let comentario of comments) {
      let p = document.createElement("p");
      let nombre = document.createElement("b");
      nombre.textContent=comentario.nombre
      p.appendChild(nombre);
      p.appendChild(
        document.createTextNode(": " + comentario.comment + " | " + comentario.date)
      )
      commentSection.appendChild(p);
    }
  }

  xhr.send();
}

if (!(typeof avistamientoId === 'undefined')){
  loadComments();
}

function validarFormulario(){
  let val = validators.validateLength("name", 3, 50, 1, 5) &&
    validators.validateLength("comment", 5, 290, 1, 290) &&
    validators.validateRegex("name", /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s-]+$/, "Usa caracteres válidos (letras, espacio y guión)") 
  return val 
}
const form = document.getElementById("form-comment");
form.addEventListener("submit", function(event){
  event.preventDefault()
  if (validarFormulario()){
    let commentobj = document.getElementById("comment")
    let nameobj = document.getElementById("name")
    let name = nameobj.value
    let comment = commentobj.value
    let selected = document.getElementById("selected").value
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/add-comment", true);

    xhr.setRequestHeader(
      "Content-Type",
      "application/json"
    );

    xhr.onload = function() {
      let respuesta = JSON.parse(xhr.responseText);
      alert(respuesta.mensaje);
      if (respuesta.mensaje == "Comentario agregado"){
        nameobj.value = ''
        commentobj.value = ''
      }
      loadComments();
    }
  
    xhr.send(JSON.stringify({
      nombre: name,
      comment: comment,
      selected: selected
    }))
  }
  })
