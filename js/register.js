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


const form = document.getElementById("form-registro");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;
    const password = document.getElementById("password").value;

    const re_user = /^[a-zA-Z0-9_-]{3,16}$/
    const re_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const re_phone = /^[0-9]{9}$/
    const re_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/

    const error_username = document.getElementById("error-username");
    const error_email = document.getElementById("error-email");
    const error_phone = document.getElementById("error-phone");
    const error_region = document.getElementById("error-region");
    const error_comuna = document.getElementById("error-comuna");
    const error_password = document.getElementById("error-password");

    if (!re_user.test(username)){
        error_username.classList.add("visible")
        return
    } else {
        error_username.classList.remove("visible")
    }
    if (!re_email.test(email)){
        error_email.classList.add("visible")
        return
    } else {
        error_email.classList.remove("visible")
    }

    if (!re_phone.test(phone)){
        error_phone.classList.add("visible")
        return
    } else {
        error_phone.classList.remove("visible")
    }
    if (region == ""){
        error_region.classList.add("visible")
        return
    } else {
        error_region.classList.remove("visible")
    }
    if (comuna == ""){
        error_comuna.classList.add("visible")
        return
    } else {
        error_comuna.classList.remove("visible")
    }
    if (!re_password.test(password)){
        error_password.classList.add("visible")
        return
    } else {
        error_password.classList.remove("visible")
    }

    document.location.assign("success.html")


})

function view_pass() {
    const pass_box = document.getElementById("password");
    if (pass_box.type == "text") {
        pass_box.type = "password"
    } else {
        pass_box.type = "text"
    }
}