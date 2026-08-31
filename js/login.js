const form = document.getElementById("form-registro");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const re_user = /^[a-zA-Z0-9_-]+$/
    const re_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/

    const error = document.getElementById("wrong")

    if (!re_user.test(username) || !re_password.test(password)) {
        error.classList.add("visible")
        return
    }

    window.location.assign("index.html")
})

