'use strict'

// Generar codigo RGB aleatorio
function genColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
  }
  
  // Generar variacion de color
  function genVar(color) {
    const variacion = Math.floor(Math.random() * 51) - 25; // Generar un número aleatorio entre -25 y 25
    const [r, g, b] = color.split(", ").map(Number); // Convertir el string en un array de números
    const nuevoR = r + variacion;
    const nuevoG = g + variacion;
    const nuevoB = b + variacion;
    return `${nuevoR}, ${nuevoG}, ${nuevoB}`;
  }
  

  // Mostrar las cajas de colores y esperar por el input del usuario
async function cajas(color, variaciones) {
  // Mezclar el color original y las variaciones en un array
  const cajas = [color, ...variaciones].sort(() => Math.random() - 0.5);
  // Mostrar las cajas de colores en la consola
  console.log(`Selecciona la caja con el color RGB ${color}:`);
  console.log("1. " + cajas[0]);
  console.log("2. " + cajas[1]);
  console.log("3. " + cajas[2]);
  // Esperar por el input del usuario
  const respuesta = await new Promise(resolve => {
    document.addEventListener("click", function onClick(event) {
      document.removeEventListener("click", onClick); // Remover el event listener después de la primera vez
      const caja = event.target;
      const index = [...caja.parentElement.children].indexOf(caja) + 1;
      resolve(index);
    });
  });
  // Devolver el índice de la caja seleccionada
  return respuesta;
}

// Juego principal
async function juego() {
  let aciertos = 0;
  let fallos = 0;
  while (aciertos < 3 && fallos < 3) {
    // Generar un nuevo código de color y sus variaciones
    const color = genColor();
    const variaciones = [genVar(color), genVar(color)];
    // Mostrar las cajas de colores y esperar por el input del usuario
    const respuesta = await cajas(color, variaciones);
    // Verificar si la respuesta es correcta y actualizar los contadores
    if (respuesta === 1) {
      console.log("¡Correcto!");
      aciertos++;
    } else {
      console.log("Incorrecto.");
      fallos++;
    }
    // Mostrar los contadores de aciertos y fallos
    console.log(`Aciertos: ${aciertos}, Fallos: ${fallos}`);
  }
  // Mostrar el resultado final del juego
  if (aciertos === 3) {
    console.log("¡Ganaste!");
  } else {
    console.log("Perdiste.");
  }
}

// Iniciar el juego al cargar la página
juego();





