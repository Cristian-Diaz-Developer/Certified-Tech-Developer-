// function anterior(numero) {
//   return --numero;
// }

// function triple(numero) {
//   return numero * 3;
// }

// function anteriorDelTriple(numero) {
//   let resultadoParcial = triple(numero);
//   let resultado = anterior(resultadoParcial);
//   return resultado;
// }
// console.log(count);
// console.log(count++);
// console.log(count);

// let count = 0;
// let contador2 = 0;
// let contador3 = 0;

// count++;

// contador2 += 1;
// contador3 = contador3 + 1;
//concatenacion de variables con strings:
// let nombre = "Leandro";
// let apellido = "Borrelli";
// //con comillas simples o dobles y operador +
// console.log("Hola, mi nombre es: " + nombre + " " + apellido);
// // con literal templates
// console.log(`Hola, mi nombre es: ${nombre} ${apellido}`);

/////////////////
// es posible llamar funciones declaradas previo a su declaracion
console.log(suma(5, 3));
function suma(a, b) {
  return a + b;
}
// en el caso de las funciones expresadas arrojara un error.
console.log(resta(5, 3));
let resta = function pepito(x, y) {
  return x - y;
};
// de todas formas por convension es recomendable primero declarar o expresar nuestras funciones y debajo de ellas realizar la invocacion

////////////////
// scope de funciones y practicidad con variables

// es posible crear una funcion que utilice una variable que tenemos creada en nuestro archivos, de manera general
let nombre = "Leandro";
function saludar() {
  return `Hola ${nombre}`;
}
// pero al momento de la invocacion, esta solo sirve para ESE nombre en especifico, para esa variable, si quisiesemos que salude a otra persona deberiamos cambiar el valor de nombre, o reasignarlo, lo cual seria poco practico, y no nos estaria evitando repetirnos, algo que en teoria es una de las razones por las que utilizamos funciones
console.log(saludar()); // Hola Leandro
nombre = "Maria";
console.log(saludar()); // Hola Maria

// tambien podriamos crear una variable dentro de la funcion, pero esto seria un problema similar, ya que tendriamos que si o si cambiar el valor de la variable dentro de la funcion, no podemos reasignarla ya que solo existe dentro del contexto de nuestra funcion
function saludar2() {
  let nombreCompleto = "Leandro Borrelli";
  return `Hola ${nombreCompleto}`;
}
console.log(saludar2());

//lo mejor, mas practico, y mas recomendable, es utilizar parametros dentro de nuestra funcion, ya que con eso nos aseguramos de que quien se encargue de darle el valor a cada invocacion de nuestra funcion, sea el valor que le indiquemos al momento de CADA invocacion...

function saludar3(nombre) {
  return `hola ${nombre}`;
}
console.log(saludar3("Leandro")); // Hola Leandro
console.log(saludar3("Maria")); // Hola Maria
console.log(saludar3("Miguel")); // Hola Miguel
