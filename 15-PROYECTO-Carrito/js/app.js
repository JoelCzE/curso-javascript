//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

//Listeners
cargarEventListener();

function cargarEventListener() {
    //dispara cuando se presiona 'agregar-carrito'
    listaCursos.addEventListener('click',agregarCurso);
}

//Funciones
//Función que añade el curso al carrito
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        // console.log(e.target.parentElement.parentElement);
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso selecionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

//Lee los datos del curso
function leerDatosCurso(curso) {
    // console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };
    // console.log(infoCurso);
    if(articulosCarrito.some(curso => curso.id === infoCurso.id)) {
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            }else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    carritoHTML();
};

//Muestra el curso selecionado en el carrito
function carritoHTML() {
    vaciarCarrito();
}

//Elimina los cursos del carrito en el DOM
function vaciarCarrito(){
    //forma lenta
    contenedorCarrito.innerHTML = '';

    //forma rapida(recomendada)
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
