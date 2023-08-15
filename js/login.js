function validarLogin() {
    var nombre = "daniel";
    var passwd = "123456"; // Cambié la contraseña a una cadena de texto

    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;

    // Se recomienda comparar cadenas en minúsculas para evitar problemas de sensibilidad a mayúsculas/minúsculas
    if (name.toLowerCase() === nombre.toLowerCase() && pwd === passwd) {
        window.location.href = "../main/main.html";
    } else {
        window.location.href = "../index.html";
    }
}
