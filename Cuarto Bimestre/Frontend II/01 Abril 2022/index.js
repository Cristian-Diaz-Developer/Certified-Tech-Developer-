const formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario');
const cajaComentarios = document.querySelector('.comentarios');
let listadoComentarios = [];

const comentariosAlmacenados = JSON.parse(localStorage.getItem('comentariosLocalStorage'));

if(comentariosAlmacenados != null) {
    listadoComentarios = comentariosAlmacenados;
}

renderizarComentarios(listadoComentarios);

formulario.addEventListener('submit', function(e) {
    e.preventDefault;
    if(validarComentario(inputComentario.value)) {
        guardarNuevoComentario(inputComentario.value);
        console.log(listadoComentarios);
        renderizarComentarios(listadoComentarios);
    }
    formulario.reset();
});

function guardarNuevoComentario(comentario) {
    listadoComentarios.push(comentario);
    localStorage.setItem('comentariosLocalStorage', JSON.stringify(listadoComentarios));
}

function renderizarComentarios(listado) {
    cajaComentarios.innerHTML = "";
    listado.forEach(elemento => {
        cajaComentarios.innerHTML += `<p>${elemento}</p>`;
    });
}

function validarComentario(comentario) {
    let resultado = true;
    if(comentario.length < 3) {
        resultado = false;
        presentarError();
    }
    return resultado;
}

function presentarError() {
    const error = document.querySelector('#error');
    error.classList.remove('oculto');
    setTimeout(function() {
        error.classList.add('oculto');
    }, 1500);
}