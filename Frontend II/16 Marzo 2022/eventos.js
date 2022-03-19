window.addEventListener ("load", function () {
    let homeButton = document.querySelector (".home-button")
   homeButton.addEventListener ("click", function () {
        alert("Tocaste el boton!")
    })
    let aboutButton = document.querySelector (". about-button");
   aboutButton.addEventListener ("click", function(e) {
        e.preventDefault ();
        console.log(this);
        alert("Quisiste saber sobre el about?");
    })
})

//Evento On Load

    window.onload = function(){
        console.log('el documento está listo');

// evento On click 

    btn.onclick = function(){ 
        console.log('hiciste clic!');
 };

//Evento Prevent Default    
 let hipervinculo = document.querySelector ('a');
    hipervinculo.addEventListener ('click', function(event){
    console.log('hiciste click');
    event.preventDefault();//quita al acción de la etiqueta 
});

// Eventos más usados 

// onclick Cuando el usuario hace clic.
// ondblclick Cuando el usuario hace doble clic.
// onmouseover Cuando el mouse se mueve sobre el elemento
// onmousemove Cuando se mueve el mouse.
// onscroll Cuando se hace scroll.
// onkeydown Cuando se aprieta una tecla.
// onload Cuando se carga la página
// onsubmit Cuando se envía un formulario.

// Mouse Over

let texto = document.querySelector('.text'); 
texto.onmouseover = function(){ 
   console.log('pasaste el mouse');
};

// texto.addEventListener('mouseover', function(){
//     console.log('pasaste el mouse');
//  });

//Mouse Out
//  let texto = document.querySelector ('.text'); 
//     texto.onmouseout = function(){
//    console.log('quitaste el mouse');
// };

// texto.addEventListener('mouseout', function(){
//     console.log('quitaste el mouse');
//   });


//Eventos con el teclado 

// window.addEventListener=("load", function () {
//     let botones = document.querySelectorAll(".w3-button")

//     for (let i = 0; i < botones.length; i++) {
//        botones[i].addEventListener ("click", function () {
//             this.style.color = "Red"
//         })
//     }
//         window.addEventListener("keypress", function(e) {
//         if (e.key == "Enter"){
//             alert("Ey! 2Qué tocas enter?");
//         }
            
//     })
// });

//Onkeydown

let miInput = document.querySelector('#miInput');
   miInput.onkeydown = function(event){ 
       alert("Se presionó la tecla: "+ event.key);

//Onkeyup

let miInput document.querySelector ('#miInput');
   miInput.onkeyup = function(event){
        alert("Se soltó la tecla: "+ event.key);
}
//Onjeypress

let miInput = document.querySelector('#miInput');
   miInput.onkeypress = function(event){ 
        alert("Se presionó la tecla: "+ event.key);
}