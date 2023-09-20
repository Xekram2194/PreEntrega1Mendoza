// Método de entrada
var nombre = prompt("Por favor, introduce tu nombre:");

// Método de salida
console.log("Hola, " + nombre + "! Bienvenido a mi programa.");

// Ciclo (for)
for (var i = 1; i <= 5; i++) {
  console.log("Este es el paso " + i + " del ciclo.");
}

// Estructura condicional (if)
var edad = parseInt(prompt("Por favor, introduce tu edad:"));
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Función
function suma(a, b) {
  return a + b;
}

var num1 = parseFloat(prompt("Introduce el primer número:"));
var num2 = parseFloat(prompt("Introduce el segundo número:"));

var resultado = suma(num1, num2);
console.log("La suma de " + num1 + " y " + num2 + " es igual a " + resultado);
