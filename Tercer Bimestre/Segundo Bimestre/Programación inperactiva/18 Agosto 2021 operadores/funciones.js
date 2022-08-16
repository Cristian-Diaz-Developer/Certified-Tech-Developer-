// ¿Qué devuelve cada función? En este ejercicio deberás pensar qué devuelve cada función sin ejecutarla en la consola. Micro Desafío 1

// function test1 (x,y){
//     return y -x
// }

// console.log(test1 (10,40));
// 1.¿Qué devuelve cada función?
// En este ejercicio deberás pensar qué devuelve cada función sin ejecutarla en la
// consola.

// Micro Desafío 1
// function pulgadas(centimetros){
//     return centimetros * 2.54
// }
// console.log(pulgadas(5));

// 2.Crear una función que recibe un string y lo convierte en una URL.
// Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.
// 

function perimetro(radio){
    return 2*radio*Math.PI   
}

function tipoDato(dato){
    return typeof(dato);
}

function mayuscula(texto){
    return texto.toUpperCase();
}

function calculadorIMC(altura, peso){
    return peso/(altura*altura);
}
console.log(calculadorIMC(1.85,68));

function valorHora(salario){
    return salario/40;
}


function inch2cm(value){
    if( typeof value === 'number' && isFinite(value) ){
        return value/2.54
    }
    else{
        return "El valor ingresado no es un número válido"
    }
}

function edadPerro(edad){
    if(typeof(edad)==='number'){
        return edad*7;
    }
    else{
        return "El dato ingresado no es número";
    }
}

function mayuscula(texto){
    return texto.toUpperCase();    
}
function url(string){
    return 'http://www.' + string + '.com';
 }
console.log(url("IamCristian"));