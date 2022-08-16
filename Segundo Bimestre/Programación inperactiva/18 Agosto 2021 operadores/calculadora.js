function sumar (valor1, valor2){
    return valor1 + valor2
}
function restar (valor1, valor2){
    return valor1 - valor2
}
function multiplicar (valor1, valor2){
    return valor1 * valor2
}
function dividir (valor1, valor2){
    if(valor1 || valor2 == 0) {
        return "No es posible dividir por 0"
    }
    else{
        return valor1 / valor2
    }
    
}
function residuo (valor1,valor2){
    return valor1 % valor2
}
console.log("-------------- Testeo de Operaciones / Calculadora -------------- \n sumatoría de dos números:");
console.log(sumar(8,10))
console.log("Resta de dos números:")
console.log(restar(5,15))
console.log("Multiplicación de dos números:")
console.log(multiplicar(10,8))
console.log("División de dos números")
console.log(restar(9,0) + "\nsu residuo es: " + residuo(9,4) )


// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

function cuadradoDeUnNumero(valor1){
    let cuadrado = valor1 * valor1
    return cuadrado
}
console.log("El cuadrado del número es:", cuadradoDeUnNumero(5));

// Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

function promedioDeTresNumeros (valor3){
    let promedio = (sumar (2,12) + valor3) / 3
    return promedio
}
console.log("El promedio del número es:", promedioDeTresNumeros (8));

// Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

function calcularPorcentaje (numero_total, porcentaje){
    let calcular = multiplicar(numero_total, porcentaje) / 100
    return calcular
}
console.log(calcularPorcentaje (300,15));

// Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.

function GeneradorDePorcentaje (valor1, valor2){
    let generador = (valor1 * 100) / valor2
    return generador
} 
console.log(GeneradorDePorcentaje (40,300));