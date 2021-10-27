//Concurso de clavados
let participanteA = [5, 8, 4, 9, 5]
let participanteB = [8, 7, 8, 6, 8]
let participanteC = [7, 5, 10, 8, 3]

function puntajePromedio(participante) {
    let suma = 0;
    for (let i = 0; i < participante.length; i++) {
        suma = suma + participante[i]
    }
    return suma / participante.length
}

console.log(puntajePromedio(participanteB))