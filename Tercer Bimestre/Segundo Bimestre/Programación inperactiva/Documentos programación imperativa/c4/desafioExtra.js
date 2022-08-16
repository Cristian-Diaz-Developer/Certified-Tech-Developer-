// Desafío extra:
// Supongamos que estás acomodando tu casa y guardaste las remeras en el cajón de los pantalones ¡Un horror!. ¿Cómo haríamos para invertirlos?
// Pensá con qué código podrías invertir el contenido de las variables de cajones.

let cajon1 = "remeras"
let cajon2 = "pantalones"

let cajonAux;

cajonAux = cajon1 //guardo las remeras en el cajon auxiliar
cajon1 = cajon2 //paso los pantalones al cajon 1
cajon2 = cajonAux //paso las remeras al cajon 2

console.log(cajonAux);
console.log(cajon1);
console.log(cajon2);