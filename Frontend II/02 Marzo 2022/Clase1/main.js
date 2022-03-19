
let arrayEntrada = [1,2,4,8];
   
function sumatoria(array) {
    let acumulador = 0
    array.forEach(element => {
        acumulador += element
        console.log("La sumatoria del array es: " + acumulador);
    });
}
sumatoria(arrayEntrada);

// let arrayEntrada = [1, 2, 4, 8];

// function sumarElementosArray(arrayEntrada, sumatoria) {
//   arrayEntrada.reduce((acumulador, e) => {
//     acumulador += e;
//     sumatoria("Numero inicial es: " + e + " El acumulador va: " + acumulador);
//     return acumulador;
//   }, 0);
// }



