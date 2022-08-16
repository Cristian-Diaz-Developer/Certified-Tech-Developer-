function test1(x, y) {
    return y - x
}

test1(10, 40)

function test2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
}

console.log(test2(10))


// 1 pulgada = 2.54 cm
function convertCM(pulgadas) {
    return pulgadas * 2.54
}

console.log(convertCM(2))

//Crear una función que recibe un string y lo convierte en una URL. 
//ej: “pepito” es devuelto como “http://www.pepito.com”
function convertURL(string) {
    return `http://www.${string}.com`
}

console.log(convertURL("digitalhouse"))


//Crear una función que recibe un string y devuelve la misma frase pero con admiración.
function admiracion(string) {
    return `${string}!`
}

console.log(admiracion("hola"));

//Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
function edadPerro(edad) {
    return edad * 7
}

console.log(edadPerro(2));

//Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
//PD--considera que tu mes de trabajo tiene 40 horas.
function calculoHoraTrabajo(sueldo) {
    return sueldo / 40
}

console.log(calculoHoraTrabajo(10000));

//Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores.
function calculadorIMC(altura, peso) {
    return peso / (altura ^ 2)
}

console.log(calculadorIMC(1.63, 70));

//Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
//Investiga que hace el método de strings .toUpperCase()

function minAmay(string) {
    return string.toUpperCase()
}

console.log(minAmay("hola"));

//Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
//pista: te servirá revisar que hace la palabra reservada typeof.

function tipoDeDato(dato) {
    return typeof dato
}

console.log(tipoDeDato(false));

//Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
//Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi

function calculaCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

console.log(calculaCircunferencia(1));


console.log(Math.random())

function saludar() {
    console.log("hola, tanto tiempo sin verte.");
}

saludar()


function saludarA(nombre) {
    const mensaje = "hola, tanto tiempo sin verte "
    console.log(mensaje + nombre);
}

saludarA("Ezequiel")
saludarA("Diego")