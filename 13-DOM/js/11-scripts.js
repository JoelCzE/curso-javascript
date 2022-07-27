// No siempre estarás haciendo traversing a tu dom, 

const btnFlotante = document.querySelector('.btn-flotante');


const footer = document.querySelector('.footer');
console.log(footer.classList);

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        // this.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';
        // this.textContent = 'X Cerrar';
    }
}