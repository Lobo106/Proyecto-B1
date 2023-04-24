// Obtener elementos del DOM
const rgbElement = document.getElementById("rgbrandom");
const colorElements = document.querySelectorAll("#colores > div");
const aciertosElement = document.getElementById("aciertos");
const fallosElement = document.getElementById("fallos");
const siguienteButton = document.querySelector(".validacion > button");
const resetButton = document.getElementById("reset");
const principianteButton = document.querySelectorAll(".mode")[0];
const avanzadoButton = document.querySelectorAll(".mode")[1];

// estado del juego
let aciertos = 0;
let fallos = 0;
let nivel = "principiante";

// generar un número aleatorio entre 0 y max
function random(max) {
  return Math.floor(Math.random() * max);
}

// generar un color aleatorio en formato RGB
function randomColor() {
  const r = random(256);
  const g = random(256);
  const b = random(256);
  return `rgb(${r}, ${g}, ${b})`;
}

// generar una variante de un color en formato RGB
function variantColor(color, variance) {
  const [r, g, b] = color.match(/\d+/g).map(Number);
  const delta = Math.round(variance * 255);
  const newR = Math.max(0, Math.min(255, r + random(2 * delta + 1) - delta));
  const newG = Math.max(0, Math.min(255, g + random(2 * delta + 1) - delta));
  const newB = Math.max(0, Math.min(255, b + random(2 * delta + 1) - delta));
  return `rgb(${newR}, ${newG}, ${newB})`;
}

// generar un conjunto de colores para el juego
function generateColors() {
  const correctColor = randomColor();
  const variantColors = [
    variantColor(correctColor, nivel === "principiante" ? 0.3 : 0.5),
    variantColor(correctColor, nivel === "principiante" ? 0.6 : 1),
    variantColor(correctColor, nivel === "principiante" ? 0.9 : 1.5)
  ];
  return [correctColor, ...variantColors];
}

// actualizar la pantalla con un nuevo conjunto de colores
function updateColors() {
  const [correctColor, ...variantColors] = generateColors();
  rgbElement.textContent = correctColor;
  colorElements.forEach((element, i) => {
    element.style.backgroundColor = variantColors[i];
    element.onclick = () => {
      if (element.style.backgroundColor === correctColor) {
        aciertos++;
        aciertosElement.textContent = `Aciertos: ${aciertos}`;
      } else {
        fallos++;
        fallosElement.textContent = `Fallos: ${fallos}`;
      }
      if (aciertos === 3) {
        alert("¡Ganaste!");
        resetGame();
      } else if (fallos === 3) {
        alert("¡Perdiste!");
        resetGame();
      } else {
        updateColors();
      }
    };
  });
}
 // reiniciar el juego
function resetGame() {
  aciertos = 0;
  fallos = 0;
  aciertosElement.textContent = "Aciertos: 0";
  fallosElement.textContent = "Fallos: 0";
  updateColors();
  }
  
  // cambiar el nivel del juego
  principianteButton.onclick = () => {
  nivel = "principiante";
  principianteButton.classList.add("selected");
  avanzadoButton.classList.remove("selected");
  resetGame();
  };
  avanzadoButton.onclick = () => {
  nivel = "avanzado";
  principianteButton.classList.remove("selected");
  avanzadoButton.classList.add("selected");
  resetGame();
  };
  
  // manejar los botones de reset y siguiente
  resetButton.onclick = () => {
  resetGame();
  };
  siguienteButton.onclick = () => {
  updateColors();
  };
  
  // reseteo
  resetGame();   


