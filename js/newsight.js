fetch("./assets/data/comunas-regiones.json")
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



const form = document.getElementById("form-new-bird");

let isimgvalid = false

form.addEventListener("submit", function(event){
    event.preventDefault()
    const name = document.getElementById("name").value;
    const species = document.getElementById("species").value;
    const desc = document.getElementById("desc").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;

    const date_msec = new Date(date)

    const today = new Date()

    const days_difference = Math.floor(today / (1000 * 60 * 60 * 24)) - Math.floor(date_msec / (1000 * 60 * 60 * 24))-1

    console.log(days_difference)

    const error_date = document.getElementById("error-date");
    const error_time = document.getElementById("error-time");
    const error_name = document.getElementById("error-name");
    const error_desc = document.getElementById("error-desc");
    const error_species = document.getElementById("error-species");
    const error_region = document.getElementById("error-region");
    const error_comuna = document.getElementById("error-comuna");

    re_name = /^[a-zA-Z0-9_-áéíóúÁÉÍÓÚÑñüÜ]{3,16}$/
    re_species = /^[a-zA-Z0-9_-áéíóúÁÉÍÓÚÑñüÜ]{3,}/
    re_desc = /^[a-zA-Z0-9_-áéíóúÁÉÍÓÚÑñüÜ]+/;


    if (!re_name.test(name)) {
        error_name.classList.add("visible")
        return
    } else {
        error_name.classList.remove("visible")
    }
    if (!re_species.test(species)) {
        error_species.classList.add("visible")
        return
    } else {
        error_species.classList.remove("visible")
    }
    if (!re_desc.test(desc)) {
        error_desc.classList.add("visible")
        return
    } else {
        error_desc.classList.remove("visible")
    }
    if (region == ""){
        error_region.classList.add("visible")
    } else {
        error_region.classList.remove("visible")
    }
    if (comuna == ""){
        error_comuna.classList.add("visible")
    } else {
        error_comuna.classList.remove("visible")
    }
    if (Math.floor(days_difference) > 14 || date == "" || days_difference < 0) {
        error_date.classList.add("visible")
        return
    } else {
        error_date.classList.remove("visible")
    }
    if (time == "") {
        error_time.classList.add("visible")
        return
    } else {
        error_time.classList.remove("visible")
    }
    const error_file = document.getElementById("error-file");
    if (!isimgvalid) {
        error_file.classList.add("visible")
        error_file.textConten = "Ingrese entre 1 y 3 archivos"
        return
    }

    document.location.assign("success.html")
    
    
})

file_input = document.getElementById("img")

file_input.addEventListener("change", function(event){
    event.preventDefault()

    const files = file_input.files
    const re_filename = /\.(mkv|png|jpg|mp4|mov|avi|jpeg)$/
    const preview = document.getElementById("preview")

    const error_file = document.getElementById("error-file");
    
    preview.replaceChildren()

    if (files.length == 0 || files.length > 3) {
        error_file.classList.add("visible")
        error_file.textContent = "Ingrese entre 1 y 3 archivos"
        isimgvalid = false
    } else {
        for (file of files) {
            if(!re_filename.test(file.name)){
                error_file.classList.add("visible")
                error_file.textContent="Ingrese un archivo válido"
                isimgvalid = false
                preview.replaceChildren()
            } else {
                const img_prev = document.createElement("img")
                img_prev.src=URL.createObjectURL(file)
                preview.appendChild(img_prev)
                error_file.classList.remove("visible")
                isimgvalid = true
            }
        }
    }

})