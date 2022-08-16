// function esPar(num){
//   if (num % 2 === 0){
//     return "El numero " + num + "es par";
//   } else {
//     return "El numero " + num + "es impar";
//   }
// }
// console.log(esPar( 10 / 2));

// function esBisiesto(year) {
//    if (year % 4 === 0){
//   console.log("El año", year, "es bisiesto");
// } else {
//     console.log("El año", year, "no es bisiesto");
// }
// }
// console.log(esBisiesto (2012));
// console.log(esBisiesto (2012));
// function tengoClases(dia) {
// 	switch (dia) {
//     	case 'lunes':  
// 			console.log("tenés clases");
// 			break;
// 		case 'miércoles ':
// 			console.log("tenés clases");
// 			break;
// 		case 'viernes':
// 			console.log("tenés clases");
// 			break;
// 		default:
// 			console.log('no tenés clases');
// 	}
// }
// console.log(tengoClases (lunes));

// let frase = "Breaking  Bad Rules!"
// console.log(frase.slice(-10));
// function dominio(string){
//  return "http://www." + string;
// }
// console.log(dominio("9gag.com"));

// function reemplazoFastFast(texto, buscar, reemplazar){    
// console.log(texto.replace(buscar, reemplazar))
// }
// console.log(reemplazoFastFast("Todo lo que pasa tiene que bajar","pasa","sube"));

// function menciona(texto, palabra){
//     if (texto.indexOf(palabra) >= 1){
//         return true
//     } else{
//         return false
//     }
// }
// console.log(menciona(("Estoy programando","mundo")));
// let frase = 'Hola!, soy Carli';
// let licenciada = frase.slice(11)
//   console.log(licenciada);

let estudiantes = [
  {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
  },
  {
    nombre: 'Daniel',
    promedio : 6,
    curso : 'Full Stack',
  },
  {
    nombre: 'Alexis',
    promedio : 3,
    curso : 'iOS',
  },
]
console.log(estudiantes.push({nombre: Juan, promedio: 5, curso: iOS}));
