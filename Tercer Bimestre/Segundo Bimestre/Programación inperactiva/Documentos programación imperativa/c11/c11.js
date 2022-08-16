//ejercicio 1

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

function convertirAMayusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
    return array;
}

console.log(convertirAMayusculas(peliculas))


//ejercicio 2 y 3

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function pasajeDeElementos(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] !== "fortnite") {
            array1.push(array2[i])
        }
    }
    return convertirAMayusculas(array1)
}

console.log(pasajeDeElementos(peliculas, peliculasAnimadas))

//ejercicio 4
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = []
    for (let i = 0; i < asia.length; i++) {
        if (asia[i] === europa[i]) {
            comparacionesAsiaEuropa.push(true)
        } else {
            comparacionesAsiaEuropa.push(false)
        }
    }
    return comparacionesAsiaEuropa;
}

console.log(compararCalificaciones(asiaScores, euroScores))