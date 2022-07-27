const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Si te gustaría saber si nuestro arreglo de meses, tiene el mes de Febrero, podrías hacerlo con un foreach...

meses.forEach(mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe...')
    }
})

// O también podrías utilizar el Array Method de .includes

const resultado = meses.includes('Enero'); // Cambiar a Diciembre...
console.log(resultado);


// En el caso de un arreglo de objetos... .includes no es la mejor opción, podrías utilizar uno llamado .some
const existe = carrito.some( producto => producto.nombre === 'Celular' );
console.log(existe);

// Some en un arreglo tradicional...
const existe2 = meses.some( mes => mes === 'Febrero' );
console.log(existe2);
