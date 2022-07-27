// Al Igual que los objetos un arreglo se puede modificar a pesar de utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

meses[0] = 'Nuevo Mes';


// También se puede añadir al final
meses[6] = 'Ultimo Mes';

console.log(meses);