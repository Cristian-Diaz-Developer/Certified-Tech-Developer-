const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanador(a, b) {
    //su solución aquí
    let puntosA = 0
    let puntosB = 0
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > b[i]) {
            puntosA = puntosA + 1
        }
        else if (a[i] < b[i]) {
            puntosB = puntosB + 1
        } else {
            console.log("Empataron, nadie recibe puntos")
        }
    }
    if (puntosA > puntosB) {
        return "El Ganador es el Participante A, con " + puntosA + " puntos."
    }
    else if (puntosB > puntosA) {
        return "El Ganador es el Participante B, con " + puntosB + " puntos."
    }
}
console.log(encontrarGanador(alicia, bob));


//EXTRABONUS

function digitalHouse(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log("Digital House")
        }
        else if (i % num1 === 0) {
            console.log("Digital")
        }
        else if (i % num2 === 0) {
            console.log("House")
        } else {
            console.log(i);
        }
    }
}

console.log(digitalHouse(3, 2));


//sumArray reloaded

function sumArray(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}

console.log(sumArray([1, 2, 2]));
