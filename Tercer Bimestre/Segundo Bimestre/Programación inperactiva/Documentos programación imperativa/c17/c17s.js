//ARROW FUNCTION
//Tal vez los siguientes enunciados resulten familiares, solo que esta vez la realizaremos utilizando arrow function en vez de la forma tradicional

// 1-- Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
//1 pulgada = 2.54 cm

let convertCM = pulgadas => pulgadas * 2.54

console.log(convertCM(2))

// 2-- Crear una función que recibe un string y lo convierte en una una URL. 
//ej: “pepito” es devuelto como “http://www.pepito.com”
let convertURL = string => `http://www.${string}.com`

console.log(convertURL("digitalhouse"))

// 3-- Crear una función que recibe un string y devuelve la misma frase pero con admiración.
let admiracion = string => `${string}!`

console.log(admiracion("hola"));

// 4-- Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
let edadPerro = edad => edad * 7

console.log(edadPerro(2));

// 5-- Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
// PD considera que tu mes de trabajo tiene 40 horas.
let calculoHoraTrabajo = sueldo => sueldo / 40

console.log(calculoHoraTrabajo(10000));

// 6-- Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  
// Luego, ejecutar la función probando diferentes valores.

let calculadorIMC = (altura, peso) => peso / (altura ^ 2)

console.log(calculadorIMC(1.63, 70));

// 7-- Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
//Investiga que hace el método de strings .toUpperCase()
let minAmay = string => string.toUpperCase()

console.log(minAmay("hola"));

// 8-- Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
//pista: te servirá revisar que hace la palabra reservada typeof.

let tipoDeDato = dato => typeof dato

console.log(tipoDeDato(false));

// 9-- Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia
//Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi
let calculaCircunferencia = radio => 2 * Math.PI * radio;

console.log(calculaCircunferencia(1));

//CALLBACKS
//A partir del siguiente array de nombres, crear una función que reciba un parámetro string,  para realizar la búsqueda de elementos que coincidan con dicho parámetro, y retorna un mensaje en caso de encontrar .
//Array de nombres
const nombres = ['Martin', 'Homero', 'Cosme', 'Steven', 'Adam'];
function buscarNombre(nombre, callback) {
    //Escriba aqui su codigo
    let resultado = "";
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombre) {
            resultado = nombres[i]
        }
    }
    return callback(resultado);
}
//Ejemplo de invocacion
//console.log(buscarNombre('Martin')); //El nombre Martin fue encontrado 


function mostrarResultado(res) {
    return res ? "El nombre fue encontrado" : "Nombre no encontrado";
}

console.log(buscarNombre("Cosme", mostrarResultado));