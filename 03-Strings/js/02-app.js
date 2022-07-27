const producto = 'Monitor 20 pulgadas';
console.log(producto);
// conocer la cantidad de letras de una cadena de texto.
console.log(producto.length)

// conocer si contiene una palabra y devuelve la posicion en la que está.
// Si no esta la Palabra devuelve -1
console.log(producto.indexOf('pulgadas'));

//averigua si contiene la palabra y devuelve un booleano. 
//En este ejemplo si seria la palabra 'Pulgadas' en vez de 'pulgadas' devonvería un false
console.log(producto.includes('pulgadas'));

// console.log(producto.indexOf('pulgadas'));
// console.log(producto.indexOf('palabras'));
// console.log(producto.indexOf('pasa palabras'));
// console.log(producto.indexOf('tetera'));
// console.log(producto.indexOf('tetera'));
// console.log(producto.indexOf('plazi'));
//indexOf('texto') indexOf(texto) indexOf('texto a buscar')
//indexOf('texto a buscar').indexOf('texto a buscar') indexOf('Texto a buscar')
// el metodo indexOf busca una palabra dentro de un string y devuelve la posicion si la 
//palabra es encontrada, en elcaso de no hacerlo devuelve -1
//.indexOf('palabra a buscar') indexOf('palabra a buscar') indexOf('palabra a buscar')
//.indexOf('palabra a buscar') indexOf('palabra a buscar')

// console.log(prducto.includes('palabra'));
// console.log(producto.includes('palabra a buscar'));
// console.log(pruducto.includes('palabra a buscar'));
// console.log(producto.includes('palkabra a buscar'));
// console.log(producto.includes('palabra a buscar)'));
// console.log(producto.includes('texto a buscar'));
// console.log(producto.includes('texto a buscar'));
// console.log(producto.includes('texto a buscar'));
// console.log(producto.indexOf('palabra a buscar'));
// console.log(producto.includes('texto a buscar'));
// console.log(producto.includes('texto a buscar'));
console.log(producto.lastIndexOf('20'));
console.log(producto.indexOf('pulgadas'));