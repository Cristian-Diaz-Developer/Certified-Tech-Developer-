console.log(10 / 0)

console.log("10" / 2)


function esPar(num) {
    if (num % 2 === 0) {
        return "El numero " + num + "es par"
    }
    else {
        return "el numero" + num + "es impar"
    }
}

console.log(esPar(10 / 2))

function esBisiesto(anio) {
    if (anio % 4 === 0) {
        return `${anio} es un año bisiesto`
    }
    else {
        return `${anio} NO es un año bisiesto`
    }
}

console.log(esBisiesto(2021))