const producto = 'Monitor 20 pulgadas';

//.repeat te va apermitir repetir una cadena de texto.
const texto = 'en promocion'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

//split, dividir un string
const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(' ')); // ['Estoy', 'aprendiendo', 'JavaScript', 'Moderno']

const hobbies = 'leer, caminar, correr, ecuchar musica, escribir, aprender a programar';
const hobiesSplit = hobbies.split(',');

for (let index = 0; index < hobiesSplit.length; index++) {
    console.log(hobiesSplit[index].trimStart(), hobiesSplit[index].length);
    
}

// const texto ='en promocion '.repeat(3);
// const texto = 'en promocion'.repeat(3);
// const texto = ' en promocion '.repeat(3);
// const texto = ' en promoción '.repeat(3);
// const texto = ' en promoción ' .repeat(3);
// const texto = 'en promoción '.repeat(3);

console.log(actividad.split(','));
console.log(actividad.split(','));
console.log(actividad.split(','));
console.log(actividad.split(',')),
console.log(actividad.split(',')); 