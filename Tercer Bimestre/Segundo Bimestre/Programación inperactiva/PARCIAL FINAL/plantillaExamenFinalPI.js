const jsonHelper = require("./jsonHelper");


const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "CRISTIAN DIAZ";
const tema = "TEMA 1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

/* A  Crear un objeto literal que represente la aplicación. 
El objeto será la representación de nuestro sistema de gestión de películas, podemos llamarlo gestionDePeliculas y contendrá todas las propiedades y métodos necesarios.*/
let gestionDePeliculas = {

// /* B Agregar una propiedad llamada peliculas en la que asignarás las películas obtenidas a partir del método leer del objeto requerido como módulo (jsonHelper.js), el cual debes requerir como cualquier módulo, al comienzo del archivo, como hemos visto en las prácticas previas.*/
  peliculas: jsonHelper.leerJson("peliculas"),


/* C  Agregar un método listarPeliculas que reciba como parámetro un array de películas y los imprima por consola.
Este método deberá imprimir por consola un mensaje con el siguiente formato:
{titulo}, de {director}. Duración de {duración} minutos, {premiada} ({calificación} en IMDB)
*/
  listarPeliculas : function (arrayPeliculas) {
    arrayPeliculas.forEach((pelicula)=>{
        let premiada = pelicula.fuePremiada ? "premiada" : "sin premios"
        console.log(` ${pelicula.titulo}, de ${pelicula.director}, Duración de ${pelicula.duracion} minutos, ${premiada = true}, ${pelicula.calificacionIMDB}/10 en IMDB)`)
            })

    },

/* D Agregar un método buscarPorTitulo que permita buscar una película en función de su título.*/
  buscarPorTitulo : function (tituloPelicula) {
    return this.peliculas.find((pelicula)=> pelicula.titulo === tituloPelicula)
  },
/* E Agregar un método peliculasPremiadas, que retorne todas las películas premiadas, es decir, aquellas que tengan la propiedad fuePremiada en true.*/

  peliculasPremiadas:function(){
  return this.peliculas.filter((pelicula)=> pelicula.fuePremiada === true)
},
/* F Agregar un método filtrarPorDuracion que permita filtrar las películas que tengan una duración que esté entre el mínimo y máximo enviado.
*/
  filtrarPorDuracion: function (minDuracion, maxDuracion) {
        return this.peliculas.filter((pelicula)=>(pelicula.duracion >= minDuracion) && (pelicula.duracion <= maxDuracion))
      },

/* G Agregar un método ordenarPorCalificacion que permita ordenar las películas recibidas de menor a mayor según su calificación.
*/
  ordenarPorCalificacion : function () {
          return this.peliculas.sort((calificacionA, calificacionB)=> calificacionA.calificacionIMDB - calificacionB.calificacionIMDB )
      },
/* H Agregar un método duracionTotal que permita calcular la duración total en minutos de todas las películas.
*/
  duracionTotal : function () {
          let sumaDuracionPeliculas = this.peliculas.reduce((acum, pelicula)=> acum + pelicula.duracion, 0);
          return (`La duracion de todas las películas sumadas es de ${sumaDuracionPeliculas} minutos `)
      },

/* I Agregar un método premiarPeliculaPorTitulo que permita premiar una película en función de su título y guardar los cambios en el archivo JSON.*/
  premiarPeliculaPorTitulo : function (tituloPelicula) {
          let encontrarPelicula = this.buscarPorTitulo(tituloPelicula);
          if (encontrarPelicula) {
              encontrarPelicula.fuePremiada = true;
              jsonHelper.escribirJson('peliculas', this.peliculas)
          }
      }
}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorTitulo('Our Idiot Brother'));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
console.log(gestionDePeliculas. peliculasPremiadas());
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
console.log(gestionDePeliculas.filtrarPorDuracion(80,100));
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
console.log(gestionDePeliculas.ordenarPorCalificacion());
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionTotal ());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.log(gestionDePeliculas.peliculas);
console.log(gestionDePeliculas.premiarPeliculaPorTitulo('Axed')); 
console.log(gestionDePeliculas.peliculas);
console.log(o);
