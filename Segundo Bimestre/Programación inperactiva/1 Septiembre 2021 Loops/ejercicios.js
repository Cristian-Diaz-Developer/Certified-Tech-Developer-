// function loro(texto) {
//   for ( let repite = 1; repite <= 5; repite++)
//     console.log(texto)
// }
// console.log(loro('Hola Cristian'));
function noParesDeContarImparesHasta(numero){
    for (let contador = 0; contador <= numero; contador++) {
      if (numero % 2 != 0) {
        return numero + contador
      }  else{
        return "Error";
      }
      
    }
}
console.log(noParesDeContarImparesHasta(10));