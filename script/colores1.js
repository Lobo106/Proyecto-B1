'use strict'


// Obtener los contenedores div por su ID
const rgbCodeDiv = document.getElementById('codigoRGB');
const colorBoxesDiv = document.getElementById('cajasColor');
const scoreDiv = document.getElementById('puntuacion');

// Contador aciertos y fallo
let correctas = 0;
let incorrectas = 0;

// Generar codigo RGB aleatorio
function generadorCodigoRGBAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

  // Generar variacion de color
function generadorCodigoRGBAleatorio(codigoColor) {
    const r = Math.max(0, Math.min(255, codigoColor.r + Math.floor(Math.random() * 51) - 25));
    const g = Math.max(0, Math.min(255, codigoColor.g + Math.floor(Math.random() * 51) - 25));
    const b = Math.max(0, Math.min(255, codigoColor.b + Math.floor(Math.random() * 51) - 25));
    return `rgb(${r}, ${g}, ${b})`;
}
console.log(generadorCodigoRGBAleatorio);




    


