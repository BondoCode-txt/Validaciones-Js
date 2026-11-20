function validarNombre(){
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");

    if(nombre.length<3){
        errorNombre.innerText="El nombre debe tener minimo 3 caracteres";
        return false;
    }
    else{
    errorNombre.innerText="";
        return true;
    }

}

document.getElementById("nombre").addEventListener("input", validarNombre );

function validarApellidos(){
    const apellidos = document.getElementById("apellidos").value.trim();
    const errorApellidos = document.getElementById("errorApellidos");

    if (apellidos.length < 3){
        errorApellidos.textContent = "Los apellidos deben tener minimo 3 caracteres."
        return false;
    } else {
        errorApellidos.textContent = "";
        return true;
    }
}

document.getElementById("apellidos").addEventListener("input", validarApellidos);

function validarDocumento(){
    const documento = document.getElementById("documento").value.trim();
    const errorDocumento = document.getElementById("errorDocumento");

    // ! significa NOT (negacion): indica que el patron no se debe cumplir
    // / / delimitan la expresion regular.
    // ^ indica el inicio del texto
    // \d representa un digitodel 0 al 9
    // {6,10} indica que debe tener entre 6 y 10 digitos
    // $ indica el final del texto
    // .test() comprueba si el documento cumple con el patron

    if (!/^\d{6,10}$/.test(documento)){
        errorDocumento.textContent = "Ingrese un documento entre 6 y 10 numeros."
        return false;
    } else {
        errorDocumento.textContent = "";
        return true;
    }
}

document.getElementById("documento").addEventListener("input", validarDocumento)

function validarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    const errorCorreo = document.getElementById("errorCorreo");

    // ^ indica el inicio del texto.
    // [^\s@]+ permite uno o más caracteres que no sean espacios ni arrobas.
    // @ exige que exista una arroba.
    // [^\s@]+ exige caracteres después de la arroba, sin espacios ni otra arroba.
    // \. exige un punto después del dominio.
    // [^\s@]+ exige caracteres después del punto.
    // $ indica el final del texto.
    // .test() comprueba si el correo cumple el patrón.
    // ! niega el resultado: si NO cumple, muestra el error.

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errorCorreo.textContent = "Ingrese un correo electrónico válido.";
        return false;
    } else {
        errorCorreo.textContent = "";
        return true;
    }
}

document.getElementById("correo").addEventListener("input", validarCorreo);

function validarTelefono() {
    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");

    if (!/^\d{10}$/.test(telefono)) {
        errorTelefono.textContent = "El teléfono debe tener exactamente 10 números.";
        return false;
    } else {
        errorTelefono.textContent = "";
        return true;
    }
}

document.getElementById("telefono").addEventListener("input", validarTelefono);

function validarEdad() {
    const edad = parseInt(document.getElementById("edad").value.trim());
    const errorEdad = document.getElementById("errorEdad");

    if (isNaN(edad) || edad < 18 || edad > 60) {
        errorEdad.textContent = "La edad debe estar entre 18 y 60 años.";
        return false;
    } else {
        errorEdad.textContent = "";
        return true;
    }
}

function validarContrasena() {
    const contrasena = document.getElementById("contrasena").value;
    const errorContrasena = document.getElementById("errorContrasena");

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)) {
        errorContrasena.textContent = "Mínimo 8 caracteres, una mayúscula y un número.";
        return false;
    } else {
        errorContrasena.textContent = "";
        return true;
    }
}

document.getElementById("contrasena").addEventListener("input", validarContrasena);

function validarConfirmar() {
    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmar").value;
    const errorConfirmar = document.getElementById("errorConfirmar");

    if (confirmar === "" || confirmar !== contrasena) {
        errorConfirmar.textContent = "Las contraseñas no coinciden.";
        return false;
    } else {
        errorConfirmar.textContent = "";
        return true;
    }
}

document.getElementById("confirmar").addEventListener("input", validarConfirmar);
document.getElementById("contrasena").addEventListener("input", validarConfirmar);

function validarPrograma() {
    const programa = document.getElementById("programa").value;
    const errorPrograma = document.getElementById("errorPrograma");

    if (programa === "") {
        errorPrograma.textContent = "Seleccione un programa de formación.";
        return false;
    } else {
        errorPrograma.textContent = "";
        return true;
    }
}

document.getElementById("programa").addEventListener("change", validarPrograma);

function validarTerminos() {
    const terminos = document.getElementById("terminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if (!terminos) {
        errorTerminos.textContent = "Debe aceptar los términos y condiciones.";
        return false;
    } else {
        errorTerminos.textContent = "";
        return true;
    }
}

document.getElementById("terminos").addEventListener("change", validarTerminos);