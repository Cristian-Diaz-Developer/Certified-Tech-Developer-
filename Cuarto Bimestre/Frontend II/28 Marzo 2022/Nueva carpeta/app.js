/* -------------------------------- VARIABLES ------------------------------- */
const formulario = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const contrasenia = document.querySelector('#pass');
const telefono =  document.querySelector('#tel');
const hobbies =  document.getElementsByName('hobbies');
const nacionalidades = document.getElementsByName('nacionalidad');
const terminos = document.getElementsByName('pregunta');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if(limita(nombre, maximoCaracteres)) {
        let maxCaracteresNombre = 150;
        if (nombre.length < 1 || nombre.length >= maxCaracteresNombre){
        alert("La cantidad de caracteres para el campo nombre no es valida.");
        nombre.value = " ";
        }   
    }


    // if(limitaPass(maximoCaracteresPass, minCaracteresPass, contrasenia)) {
    //     alert("LA CANTIDAD DE CARACTERES PARA LA CONTRASEÑA NO SON LOS ESTABLECIDOS.");
    //     contrasenia.value = " ";
    // }
 
    let lista = [];
    hobbies.forEach( hobbie => {
        if(hobbie.checked){
            console.log(hobbie.id);
            lista.push(hobbie.id);
        }
    });

    let pais;
    nacionalidades.forEach( radio =>{
        if(radio.checked){
            console.log(radio.id);
            pais = radio.id;
        }
    });

    terminos.forEach( opcion => {
        if(opcion.checked) {
            console.log(opcion.value);
        }
    });

    validarForm(event, lista, pais);
    console.log(normalizar(nombre.value, contrasenia.value, telefono.value, lista, pais));
});


/* -------------------------------- FUNCIONES ------------------------------- */
function normalizar(nom, pass, tel, listadoHobbies, nacionalidad) {

    const datos = {
        name: nom,
        password: pass,
        phone: tel,
        hobbies: listadoHobbies,
        nationality: nacionalidad
    }

    return datos;
}

// let maximoCaracteres = 25;

// function limita(nom, maxCaracteres) {
//     if(nom.value.length >= maxCaracteres) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let maximoCaracteresPass = 20;
// let minCaracteresPass = 8;

// function limitaPass(maxCaracteresPass, minimCaracteres, passw) {
//     if(passw.value.length >= minimCaracteres && passw.value.length <= maxCaracteresPass) {
//         return false;
//     } else {
//         return true; 
//     }
// }

function validarForm(e, hobbies, nacionalidad) {
    
    let errores = []

    let regexNombre = /[A-Za-z] [\s]/
    let regexEspacio = /^(?:\b\w+\b[\s\r\n]*){2}/


    if(nombre.value == ""){
        errores.push("El nombre no puede estar vacío.")
    }else if(!regexNombre.test(nombre.value)){
        errores.push("El nombre debe estar en formato de texto.")
    }else if(!regexEspacio.test(nombre.value)){
        errores.push("El nombre debe estar construido por dos palabras.")
    }

    let regexPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[@$?¡\-_]){1})\S{8,16}$/
    if(contrasenia.value == ""){
        errores.push("La contraseña no puede estar vacía.")
    }else if(!regexPass.test(contrasenia.value)){
        errores.push("La contraseña debe tener entre 8 y 16 caracteres.<br>La contraseña debe tener al menos 1 letra mayúscula.<br>La contraseña debe tener al menos un caracter especial.")
    }

    if(hobbies.length < 1){
        errores.push("Debe seleccionar al menos 1 hobbie.")
    }
    if(hobbies.length > 4){
        errores.push("Debe seleccionar un máximo de 4 hobbies.")
    }

    if(nacionalidad == undefined){
        errores.push("Debe seleccionar nacionalidad.")
    }

    if(errores.length > 0){
        e.preventDefault()
        let ulErrores = document.querySelector("#erroresList")
        for(error of errores){
                ulErrores.innerHTML += "<li><small>"
                                        + error 
                                        +"<small/><li/>" 
        }
    }

    e.preventDefault()
}



