// let nav = document.querySelectorAll("ul li");

// console.log(nav[0]);

// // let titulo = document.querySelector ('h1');
// // titulo.innerHTML +=' Soy un contenido nuevo desde JS';
// // console. log(titulo.innerHTHL);
// // let parrafoEspecial = document.querySelector ('.parrafo-especial');
// // parrafoEspecial. innerHTML = 'Un texto con algo <i>en cursiva</i>';
// // console. log(parrafoEspecial);
                       

// //Template Literals 

// const template = `<h1>Hola Mundo!</h1>`;
// //Agregá la propiedad id=' body' a tu elemento body en HTML
// const body = document.getElementById('body');
// body.innerText = template; 
// body.innerHTML = template;

// function escribirHTML (titulo, texto) {
//     const body = document.getElementById('body');
//     const miTemplate -
//       <h1>$(titulo)</h1>
//       <p>${texto)</p>
//     body.innerHTML += miTemplate;
//   escribirHTML ('Hola', 'Esto es un ejemplo de template string en html.');
//   escribirHTML ('Es dinámico', 'Podemos insertar elementos HTML mediante <b>JavaScript</b>');
//   escribirHTML ('Facilita la programación', 'Evita escribir mucho código y reutilizar el que si escribamos.');
//   escribirHTML('En este ejemplo', 'Hemos utilizado una única función para poder escribir 4 veces en HTML, imaginás lo que sería esto sin esta función?');


let confirmaCambios = confirm ( ' z Querés cambiar el color del titulo?');
  if (confirmaCambios) {
     let titulo = document.querySelector ('hl');
     titulo.innerHTML + 'Soy un contenido nuevo desde JS';
     titulo.style.color = 'crimson';
     titulo.style. fontSize = '50px';