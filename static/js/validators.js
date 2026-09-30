// Validates the length of words and characters
export function validateLength(id, minchars, maxchars, minwords, maxwords, msg=""){
    const input = document.getElementById(id)
    const error = document.getElementById(`error-${id}`)
    const palabras = input.value.trim().split(/\s+/).length
    const caracteres = input.value.length

    if (palabras<minwords || palabras > maxwords || input == "") {
        console.log("HOls")
        error.textContent = `Usa entre ${minwords} y ${maxwords} palabras`;
        if (msg){
            error.textContent = msg
        }
        error.classList.add("visible")
        return false
    }
    if (minchars > 0 && maxchars > 0){
        if (caracteres<minchars || caracteres > maxchars) {
            error.textContent = `Usa entre ${minchars} y ${maxchars} caracteres`;
            error.classList.add("visible")
            return false
        }
    }

    error.classList.remove("visible")
    return true

}

// Validates a regular expression
export function validateRegex(id, regex, errorMsg){
    const input = document.getElementById(id)
    const error = document.getElementById(`error-${id}`)

    if (!regex.test(input.value)) {
        error.textContent = errorMsg;
        error.classList.add("visible")
        return false
    }
    error.classList.remove("visible")
    return true
}

// Validate the amount of files
export function validateLengthFiles(files_id, min, max, valid_files){
    const files = document.getElementById(files_id)
    const error = document.getElementById(`error-${files_id}`)

    if(files.files.length<min || files.files.length>max){
        error.textContent= `Sube entre ${min} a ${max} archivos`
        error.classList.add("visible")
        return false
    }
    if (valid_files) error.classList.remove("visible")
    return true
}

// Validates the files are images, videos and the ammount
export function validateFiles(files_id, max){
    const files = document.getElementById(files_id)
    const error = document.getElementById(`error-${files_id}`)
    const preview = document.getElementById(`preview-${files_id}`)
    const re_filetype = /\.(mkv|png|jpg|mp4|mov|avi|jpeg)$/
    preview.replaceChildren()
    
    if (files.files.length > max) return false

    for(const file of files.files){
        if (!re_filetype.test(file.name)){
            error.textContent="Sube un archivo válido (imagenes o videos)"
            error.classList.add("visible")
            preview.replaceChildren()
            return false
        }else{
            const img_prev = document.createElement("img")
            img_prev.src=URL.createObjectURL(file)
            preview.appendChild(img_prev)
            error.classList.remove("visible")
        }
    }

    return true
}

// Validates the date and time
export function validateDateTime(date_id, time_id, days){
    const date = document.getElementById(date_id)
    const time = document.getElementById(time_id)
    const date_error = document.getElementById(`error-${date_id}`)
    const time_error = document.getElementById(`error-${time_id}`)
    
    const today = new Date()
    
    if (date.value == ""){
        date_error.textContent="Selecciona una fecha"
        date_error.classList.add("visible")
        return false
    }
    if(time.value == ""){
        time_error.textContent="Selecciona una hora"
        time_error.classList.add("visible")
        return false
    }
    const selected = new Date(`${date.value}T${time.value}`)

    if (selected > today){
        date_error.textContent="La fecha y hora no pueden ser futuras"
        time_error.textContent="La fecha y hora no pueden ser futuras"
        date_error.classList.add("visible")
        time_error.classList.add("visible")
        return false
    }
    const minDate = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);

    if (selected<minDate){
        time_error.textContent=`La fecha y hora deben estar dentro de los últimos ${days} dias`
        date_error.textContent=`La fecha y hora deben estar dentro de los últimos ${days} dias`
        time_error.classList.add("visible")
        date_error.classList.add("visible")
        return false
    }
    time_error.classList.remove("visible")
    date_error.classList.remove("visible")
    return true
}

// Validates if an option is selected in a select
export function validateSelection(id, name){
    const selection = document.getElementById(id).value
    const error = document.getElementById(`error-${id}`)

    if (selection === ""){
        error.textContent = `Selecciona una ${name}`
        error.classList.add("visible")
        return false
    }
    error.classList.remove("visible")
    return true
}