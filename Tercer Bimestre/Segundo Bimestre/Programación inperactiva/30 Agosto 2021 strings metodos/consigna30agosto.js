let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[2]);
function  mayusculas(peliculas) {
  let string = peliculas.join(", ")
  let stringEnMayuscula = string.toUpperCase();
  return stringEnMayuscula.split(" , ");
}
// console.log( mayusculas(peliculas));
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function union(peliculas) {
    peliculas.unshift(peliculasAnimadas[0], peliculasAnimadas[1], peliculasAnimadas[2], peliculasAnimadas[3])
    return peliculas;
}

console.log(mayusculas (union(peliculas)));

let borrado = peliculasAnimadas.pop();
console.log(borrado)


// let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// //console.log(peliculas[1]);
// function mayuscula(peliculas) {
//     let string = peliculas.join(", ");
//     let stringEnMayuscula = string.toUpperCase();
//     return stringEnMayuscula.split(",");
// }

// //console.log(mayuscula(peliculas));

// let animada = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// function union(peliculas) {
//     peliculas.unshift(animada[0], animada[1], animada[2], animada[3])
//     return peliculas;
// }
