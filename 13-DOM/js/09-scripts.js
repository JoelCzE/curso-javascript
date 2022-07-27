// Hay 2 formas de eliminar, una es eliminar un elemento por si mismo y la otra es eliminarlo desde el padre...

const primerEnlace = document.querySelector('a');
primerEnlace.remove();


// La otra forma es por el padre..
const navegacion = document.querySelector('.navegacion');

// el sigueinte paso es identificar el elemento a borrar..

// console.log(navegacion.children);

// navegacion.removeChild(navegacion.children[2]);

// Otra forma es creando una variable...

const borrar = navegacion.children[2]
navegacion.removeChild(borrar);

// Como resumen recuerda hay 2 formas de eliminar elementos, uno es por el elemento por si mismo y el otro 
//requiere el padre y la referencia del hijo..