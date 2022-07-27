//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');
const datosBusqueda ={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: ''
};


const max = new Date().getFullYear();
const min = max -10;
console.log(max);
console.log(min);


//Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    //Muestra los autos
    mostrarAutos(autos);

    //Llena las opciones de los años
    llenarSelect();
});

//EventListeners para los Select
marca.addEventListener('change', e => {
    // console.log('Cambió...');
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;
    // console.log(datosBusqueda);
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});





//Funciones
function mostrarAutos(autos) {
    // console.log('mostrando autos...');
    //Limpiar HTML
    limpiarHTML();
   autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        
        const {marca, modelo, year, puertas,transmision, precio, color} = auto;
        // console.log(marca + modelo);
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `;
        //Insertar en el HTML
        resultado.appendChild(autoHTML);
   });
};

//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del Select
function llenarSelect() {
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.textContent = i;
        opcion.value = i;
        year.appendChild(opcion);
    }
};

//Función que filtra en base a la busqueda
function filtrarAuto() {
    console.log('filtrando...');
    
    //Función de alto nivel
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    console.log(resultado);
    if(resultado.length) {
        mostrarAutos(resultado);

    }else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intente con otros terminos';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    
    if(marca) {
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto) {
    // console.log('hola');
    const {year} = datosBusqueda;
    // console.log(year);
    // console.log(auto.year);
    if(year) {
        return auto.year === parseInt(year);
    }
    return auto;
}
function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
};
function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if(puertas) {
        return auto.puertas == puertas;
    }
    return auto;
}
function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    const {color} = datosBusqueda;
    
    if(color) {
        return auto.color === color;
    }
    return auto;
}