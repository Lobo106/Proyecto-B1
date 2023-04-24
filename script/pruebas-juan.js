"use strict";

// Genera un código RGB aleatorio
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

document.getElementById("rgb").innerHTML = `${r}, ${g}, ${b}`;
const colores = `${r}, ${g}, ${b}`;
console.log(colores);
function generateVariations() {
    // Obtener el valor más alto de las variables R, G, B
    const max = Math.max(r, g, b);

    // Generar tres variaciones aleatorias
    const variation1 = `${Math.floor(Math.random() * max)}, ${Math.floor(
        Math.random() * max
    )}, ${Math.floor(Math.random() * max)}`;
    const variation2 = `${Math.floor(Math.random() * max)}, ${Math.floor(
        Math.random() * max
    )}, ${Math.floor(Math.random() * max)}`;
    const variation3 = `${Math.floor(Math.random() * max)}, ${Math.floor(
        Math.random() * max
    )}, ${Math.floor(Math.random() * max)}`;
    console.log(variation2);
    const variation4 = colores;
    console.log(variation4);

    // Mezclar las variaciones en un arreglo aleatorio
    const variations = [variation1, variation2, variation3, variation4].sort(
        () => Math.random() - 0.5
    );

    // Asignar cada variación a un div correspondiente
    const color1 = document.getElementById("color1");
    color1.style.backgroundColor = `rgb(${variations[0]})`;

    const color2 = document.getElementById("color2");
    color2.style.backgroundColor = `rgb(${variations[1]})`;

    const color3 = document.getElementById("color3");
    color3.style.backgroundColor = `rgb(${variations[2]})`;

    const color4 = document.getElementById("color4");
    color4.style.backgroundColor = `rgb(${variations[3]})`;
}

generateVariations();
