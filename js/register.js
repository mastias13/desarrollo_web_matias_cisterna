fetch("comunas-regiones.json")
    .then(response => response.json())
    .then(data => {
        const reg_select = document.getElementById("region");
        
        for (let i=0; i<16;i++){
            option = document.createElement("option")
            
            option.value = i
            option.textContent = data.regiones[i].region
            reg_select.appendChild(option)
        }
        reg_select.addEventListener("change", () => {
            const com_select = document.getElementById("comuna");
            def_option = document.createElement("option")
            def_option.value=""
            def_option.textContent="Selecciona primero la región"
            com_select.replaceChildren(def_option)

            const regionSeleccionada = reg_select.value;
            const comunas = data.regiones[regionSeleccionada].comunas
            for (const comuna of comunas){
                option = document.createElement("option")
                
                option.value = comuna
                option.textContent = comuna
                com_select.appendChild(option)
            }
        });
        
    });


const form = document.getElementById("form-registro");

form.addEventListener("submit", function(event) {
    const username = document.getElementById("username").value;
    const email = document.getElementsByName("email").value;
    const phone = document.getElementById("phone").value;
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;
    const password = document.getElementById("password").value;

    

})
