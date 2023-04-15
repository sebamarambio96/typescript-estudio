"use strict";
let mensaje = "Hola mundo";
mensaje = "Chao mundo";
console.log(mensaje);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
let miVariable;
miVariable = "Chanchito feliz";
miVariable = 42;
function chanchitoFeliz(config) {
    return config;
}
let animales = ['chanchitos', 'feliz', 'felipe'];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ['chanchito feliz', 'chanchitofeliz']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla[Talla["chica"] = 2] = "chica";
    Talla[Talla["mediana"] = 3] = "mediana";
    Talla[Talla["grande"] = 4] = "grande";
    Talla[Talla["extragrande"] = 5] = "extragrande";
})(Talla || (Talla = {}));
const variable1 = Talla.grande;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 1,
    nombre: 'Hola mundo',
    talla: Talla.chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Chile'
    }
};
const arr = [];
const fn = (edad) => {
    if (edad > 17)
        return 'Puedes ingresar';
    return 'No puedes pasar';
};
function validaEdad(edad) {
    if (edad > 17)
        return 'Puedes ingresar';
    return 'No puedes pasar';
}
validaEdad(18);
//# sourceMappingURL=index.js.map