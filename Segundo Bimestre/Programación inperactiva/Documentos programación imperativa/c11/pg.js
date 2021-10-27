function loro(texto) {
    for (let vuelta = 1; vuelta <= 5; vuelta++) {
        console.log("soy un " + texto)
    }
}

console.log(loro("hola"))

function noParesDeContarImparesHasta(numero) {
    // Escribe aqui tu código
    let suma = 0;
    for (let vuelta = 0; vuelta <= numero; vuelta++) {
        if (vuelta % 2 !== 0) {
            suma = suma + vuelta
        }
    }
    return suma
}
console.log(noParesDeContarImparesHasta(4))

