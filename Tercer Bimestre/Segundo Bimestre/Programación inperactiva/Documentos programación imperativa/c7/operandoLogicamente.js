// false, null, undefined, 0, NaN y "" : no tienen "contenido", es decir, son falsy
// true, <0 && >0 y strings: tienen "contenido", es decir, son truthy

console.log(12 === "12");

console.log(11 >= "5"); //true
console.log(11 >= "a"); //false

console.log("A" === "a"); //false
console.log("CASA" > "casa"); // false, evalua el primer string de cada cadena por su valor unicode (numero o codigo ASCII), si el primer string coincide, avanza al segundo, y asi sucesivamente

console.log("gato" && "0" && "trompeta");
console.log(0 || "" || undefined);

// como ej de AND decimos que para subir a una montaña rusa la edad debe ser >12 y la altura > 140cm, o sea que ambas deben ser verdaderas.

let altura = 170;
let edad = 12;

let puedeSubir = altura > 140 && edad > 12;

// console.log(puedeSubir);

// como ej de OR decimos que si llueve o hace frío salgo de casa con mi abrigo. Si llueve no importa si hace frío, salgo con abrigo. Y si hace frío no importa si llueve, salgo con abrigo. Con tal que alguna de ambas sea verdadera, salgo con abrigo.
let haceFrio = true;
let llueve = false;

let llevoAbrigo = haceFrio || llueve;
console.log(llevoAbrigo);

// op negacion

console.log(!(15 !== "15"));
