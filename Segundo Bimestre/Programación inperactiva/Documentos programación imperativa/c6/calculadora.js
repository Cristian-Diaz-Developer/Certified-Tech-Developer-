function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

console.log("------------Testeo de Operaciones / Calculadora------------")

console.log(sumar(2, 2));
console.log(restar(10, 5));
console.log(multiplicar(5, 5));
console.log(dividir(10, 2));
console.log(dividir(10, 0));


function cuadradoDeUnNumero(num) {
    return multiplicar(num, num)
}

function promedioDeTresNumeros(a, b, c) {
    let parcial = a + sumar(b, c)
    return dividir(parcial, 3)
}

console.log(cuadradoDeUnNumero(2));
console.log(promedioDeTresNumeros(2, 2, 2));

function calcularPorcentaje(total, porcentaje) {
    let parcial = multiplicar(total, porcentaje)
    return dividir(parcial, 100)
}

console.log(calcularPorcentaje(300, 15));

function generadorDePorcentaje(a, b) {
    let parcial = dividir(a, b)
    return multiplicar(parcial, 100)
}

console.log(generadorDePorcentaje(2, 200));
