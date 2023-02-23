const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const invitado = document.getElementById("button")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "1234") {
        alert("Inicia como administrador");
        location.href = "/admin/admin1.html";
    } else {
        if (username === "invitado" && password === "1234") {
            alert("Inicia como invitado");
            location.href = "/admin/admin2.html";
        } else {
            alert("para iniciar como usuario invitado(user:invitado password:1234)")
        }
    }
});
invitado.addEventListener("click", (e) =>{
    e.preventDefault();
    location.href = "/admin/admin2.html";
})