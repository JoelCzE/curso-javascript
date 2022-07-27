// Estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las 
//últimas versiones, la sintaxis es más corta 

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

const aprendiendo = () =>  {
    console.log('Aprendiendo JavaScript');
}

// una linea no requiere llaves
const aprendiendo = () => console.log('Aprendiendo JavaScript');

// retornar un valor
const aprendiendo = () => 'Aprendiendo JavaScript';


console.log(aprendiendo());
