//Remplazar 
const producto = "monitor de 20 pulgadas";
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'monitor curvo'));

//cortar, toma el primer valor y el segundo es no lo toma
// en el primer ejemplo tomaria desde la posiscion 1 a la 8
console.log(producto.slice(1, 9)); //onitor d
console.log(producto.slice(8)); // de 20 pulgadas
console.log(producto.slice(4, 1)); //no realiza ninguna operacion

//alternativa a slice
console.log(producto.substring(1, 9)); //onitor d
console.log(producto.substring(4, 1)); //oni
//a diferencia de slice, substring acomoda los valores en este ultimo ejemplo

//para tomar un solo caracter
const usuario = 'rodrigo';
console.log(usuario);
console.log(usuario.charAt(0));

console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace(`monitor`, 'monotir curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.replace('montor', 'monitor curvo'));
console.log(producto.replace('monitor', 'monitor curvo'));

console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));
console.log(producto.slice(0, 4));

console.log(producto.substring(0, 4));
console.log(producto.substring(4, 0));
console.log(producto.substring(4, 0));
console.log(producto.substring(4, 0));
console.log(producto.substring(4, 0));
console.log(producto.substring(4, 0));
console.log(producto.substring(4, 0));
console.log(producto.substring(4, 0));
console.log(producto.indexOf('pulgadas'));
console.log(producto.includes('pulgadas'));
console.log(producto.replace('monitor', 'monitor curvo'));
console.log(producto.trim());
console.log(producto.trimStart());
console.log(propducto.trimEnd());
console.log(`El producto ${producto} tiene el precio ${precio}`);
console.log(producto.concat('el precio es ', precio));

console.log(producto.charAt(0));
console.log(producto.charAt(0));
console.log(producto.charAt(0));
console.log(producto.charAt(0));
console.log(producto.charAt(0));

