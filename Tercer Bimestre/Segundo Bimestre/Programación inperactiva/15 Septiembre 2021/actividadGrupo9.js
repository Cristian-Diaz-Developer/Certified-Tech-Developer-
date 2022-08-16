/*1.Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/
let pulgadas = centimetros => centimetros * 2.54
console.log(pulgadas(20));

/*2. Crear una función que recibe un string y lo convierte en una una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com” */
let url = texto => 'http://www.' + texto + '.com'
console.log(url('PlayGround'));

/*3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.*/
let admiracion = frase => '¡' + frase + '!'
console.log(admiracion('Hola a todos'));
/*4.Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */
let edadPerro = edadHumano => edadHumano * 7
console.log(edadPerro(10)); 
/*5.Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas. */
let horaTrabajo = SueldoMensual => SueldoMensual / 40
console.log(horaTrabajo(1500000) );
/*6.Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */
let IMC = (altura, peso) => peso / (altura*altura)
console.log(IMC(1.80,90));
/*7.Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.  */
let mayus = texto => texto.toUpperCase()
console.log(mayus('Hola'));
/*8.Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.  */
let tipoDato = parametro => typeof(parametro)
console.log(tipoDato(true));
/*9.Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia */
let circunferencia = radio => (2*  Math.PI * radio).toFixed(3)
console.log(circunferencia(5));

//Callbacks
/*1.A partir del siguiente array de nombres, crear una función que reciba un parámetro string,  para realizar la búsqueda de elementos que coincidan con dicho parámetro, y retorna un mensaje en caso de encontrar . */
//Array de nombres
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];
function buscarNombre(nombre){
//Escriba aqui su codigo
for (let i = 0; i < nombres.length; i++) {
  const iterador =nombres[i]
  if (nombre === iterador) 
    return `${iterador} Fue encontrado`
  }  
}

console.log(buscarNombre('Martin')); //El nombre Martin fue encontrado 

/*Para manejar el error en caso de no encontrar coincidencias crearemos una función llamada mostrarResultado que reciba un parámetro, la misma deberá consultar si el parámetro es un string vacío mostrar un mensaje de “Nombre no encontrado”, en caso contrario mostrar el mensaje “El nombre fue encontrado”.*/
function mostrarResultado(res){
 	//Su código
if (res === '') {
  return "Nombre no encontrado";
}else{
  return "El nombre fue encontrado";
}
}
console.log(mostrarResultado(''));

/*Ahora editaremos la función buscarNombre para que la misma reciba un callback como parámetro y sea invocada una vez recorrido todo el array de nombre, enviando como parámetro un string vacío en caso de no encontrar coincidencias, caso contrario enviar el elemento coincidente (función desarrollada en el punto anterior)*/
 
function buscarNombre(nombre, callback){
    //Su código
    if (nombre === buscarNombre[i]) {
      return 
    }
}
buscarNombre('Martin',mostrarResultado)