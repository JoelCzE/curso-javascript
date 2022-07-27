
// Veamos primero como crear un Arreglo...
const numeros = [10,20,30,40,50];
console.log(numeros);

// El arreglo anterior fue de números, también puedes crear uno de Strings por ejemplo y se puede crear 
//utilizando la palabra new
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(meses);

// Ahora no es obligatorio que el arreglo tenga numeros o strings unicamente, también puede tener un poco de todo:
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
console.log(deTodo);

// incluso un array puede tener un array dentro

//Pero recuerda, un arreglo es una forma de agrupar grandes cantidades de información en una sola variable.