/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    
   
    datosPersona.nombre = prompt('Por favor ingrese su nombre:');
    function validarNombre() {
      let nombre = datosPersona.nombre;
  
      if (nombre == "" || nombre == null) {
        alert("Ups! este campo aún está vacio, nos gustaría saber tu nombre 😎");
        datosPersona.nombre = prompt("Por favor ingrese su nombre:");
        validarNombre();
      }else if(/^[a-zA-Z]+$/.test(nombre) == false){
        alert("Por favor ingresa un texto valido");
        datosPersona.nombre = prompt("Ingresa tu nombre");
      }else{
        datosPersona.edad = 2022 - prompt("Ingrese su año de nacimiento");

      }
    } validarNombre();

    function validarEdad() {
      let edad = datosPersona.edad;
      
      if(isNaN(edad)){
        alert("Por favor ingrese su edad, nadie va a saber que está tan viejo 😎");
        datosPersona.edad = 2022 - prompt("Ingrese su año de nacimiento");
        validarEdad()
      }else{
        datosPersona.ciudad = prompt("Ingrese su ciudad");
      }      
    }validarEdad();
    
    function validarCiudad() {
    let ciudad = datosPersona.ciudad;

    if (ciudad == null || ciudad == ""){
      alert("Por favor ingresa tu ciudad, apoco crees que voy a ir hasta tu casa 😨"); 
      datosPersona.ciudad = prompt("Ingrese su ciudad")   
      }      
    }
    validarCiudad()  

    datosPersona.interesPorJs = confirm('¿Te interesa JS?') ? 'Sí, me interesa' : 'No me interesa';

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById ('nombre').textContent = datosPersona.nombre; 
  document.getElementById ('edad').textContent = datosPersona.edad
  document.getElementById ('ciudad').textContent = datosPersona.ciudad;
  document.getElementById ('javascript').textContent = datosPersona.interesPorJs; 
 
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const tarjetas = document.getElementById('fila');
    tarjetas.innerHTML= "";
    listado.forEach(itemListado => {
    const plantillaTarjeta = `
    <div class = "caja">
    <img src= ${itemListado.imgUrl} alt= ${itemListado.lenguajes}>
    <p class="lenguaje">${itemListado.lenguajes}</p>
    <p class="Bimestre">${itemListado.bimestre}</p>
    </div>`;    
    tarjetas.innerHTML += plantillaTarjeta ;
       
  });
  

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const cambiarModoOscuro = document.getElementById('sitio');
 cambiarModoOscuro.classList.toggle('dark');



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let textoMagico = document.querySelector('#card'); 
textoMagico.onmouseover = function(){ 
document.addEventListener('keypress', (e) => {
  if(e.key.toLowerCase() === 'f') {
    document.getElementById("sobre-mi").classList.remove('oculto');
  }
})
}