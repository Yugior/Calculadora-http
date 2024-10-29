// Elemento de la pantalla de la calculadora
let display = document.getElementById("display");

// Variables para almacenar los números y la operación actual
let currentNumber = ""; // Número que se está ingresando actualmente
let previousNumber = ""; // Número ingresado antes de la operación
let operation = undefined; // Tipo de operación seleccionada (+, -, *, /)

// Función para añadir un número o punto (.) al número actual
function appendNumber(number) {
  // Evita que se ingresen múltiples puntos decimales
  if (number === "." && currentNumber.includes(".")) return;
  currentNumber += number; // Añade el número o punto a la variable actual
  updateDisplay(); // Actualiza la pantalla
}

// Actualiza la pantalla con el valor actual de currentNumber
function updateDisplay() {
  display.value = currentNumber;
}

// Función para seleccionar una operación (+, -, *, /)
function chooseOperation(op) {
  if (currentNumber === "") return; // No hace nada si no hay un número actual
  if (previousNumber !== "") calculate(); // Si hay un número previo, calcula el resultado primero
  operation = op; // Guarda la operación seleccionada
  previousNumber = currentNumber; // Guarda el número actual como previo
  currentNumber = ""; // Limpia el número actual para el próximo ingreso
}

// Limpia la pantalla y reinicia las variables
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = undefined;
  updateDisplay();
}

// Función para realizar el cálculo
function calculate() {
  let result;
  const prev = parseFloat(previousNumber); // Convierte el número previo a un número decimal
  const current = parseFloat(currentNumber); // Convierte el número actual a un número decimal

  // Verifica si los números son válidos
  if (isNaN(prev) || isNaN(current)) return;

  // Realiza la operación seleccionada
  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    default:
      return;
  }
  currentNumber = result; // Muestra el resultado en currentNumber
  operation = undefined; // Resetea la operación
  previousNumber = ""; // Limpia el número previo
  updateDisplay(); // Actualiza la pantalla
}
