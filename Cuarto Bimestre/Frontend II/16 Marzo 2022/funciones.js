//Scope 

function funcionDeEjemplo() {
    const x = "declarada dentro de la función"; // x solo se puede utilizar en funcionDeEjemplo
    console.log("Funcion interna");
    console.log(x);
}
console.log(x); // error está fuera de su bloque 

//Scope secundario erarquía de los bloques, esto quiere decir que los scopes secundarios tienen acceso a los ámbitos primarios, pero no al revés. Por ejemplo:

function funcionPrimaria() {
    const variablePrimaria = "Me encuentro en el bloque superior";
    function funcionSecundaria() {
        const variableSecundaria = "Soy del bloque inferior";
        console.log("Dentro: "+variablePrimaria);
        console.log("Dentro: "+variableSecundaria);
    }
    funcionSecundaria();
    console.log("Fuera: "+variablePrimaria);
    console.log("Fuera: "+variableSecundaria); // error
}
funcionPrimaria();

//Arrow funtion 

let sumar = (a, b) => {
    let valor = a + b;
    return valor;
}

//Arrow funtion reducida 

// let sumar = (a, b) => a + b;

// funciones como parametros 

function ejecutor(func) {
    // código de la función
     func();
    // código de la función
 function sumar(a, b) {
     return a + b;
 }
 ejecutor(sumar(1, 2));
          