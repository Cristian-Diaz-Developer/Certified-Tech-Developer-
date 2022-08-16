// alert();//interrumpe la navegación del usuario devuelve undefined
// Confirm();// Frena la navegación da un mensaje, pero salen las opciones aceptar o cancelar.

// confirm()//si el confirm está solo no nos arroja ningún valor.


//  console.Log( confirm("¿Estás seguro de aceptar esta confirmación?") ); //Con console.log nos imprime true en caso de que el usuario acepte la confimación y false en caso de que la rechace. 

//  let confirmacion = confirm("¿Estás seguro de aceptar esta confirmación?");
//  console. Log( confirmacion )

// let nombre = prompt("Ingresa tu nombre completo")// permite comunicarle un mensaje al usuario y este puede escribir cualquier cosa como respuesta
// //

// console.log(nombre.toUpperCase() ); // Si el cliente cancela se guarda null

// let tratoPersonalizado = confirm("¿Desea un trato personalizado?");
    
// if(tratoPersonalizado){
//     let nombre = prompt("Por favor, introduzca su nombre");
//     alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas gracias por visitarnos, estamos a su disposición! 😀");
//     } else {
//     alert("Gracias por conectarse.")
    // }

// let pi = Math.PI;
// let aleatorio = Math.random()*10; // --> entre e y 1
// let redondeo = Math.round (aleatorio);
                 
// let mayor = Math.max(10, 20, 30, 40);
// console.log(pi);
// console.log(aleatorio);
// console.log(redondeo);
// console.log(mayor);
                                                                    ////
// BUCLES ESPECIFICOS

//For in se usa para objetos literales

let persona = {
    nombre: "María Belén",
    apellido: "Carrere",
    edad: 21
}
for (let caracteristica in persona) { //nombres de las propiedades
    console.log(caracteristica);
}
for (let caracteristica in persona) {// trae los valores de cada propiedad
    console.log(persona[caracteristica]);
}
let ciudades = ["Rafaela", "Buenos Aires", "Cordoba"];//for of para arreglos 
for (let ciudad of ciudades) {
    console.log(ciudad);
}