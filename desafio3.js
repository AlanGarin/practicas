/*Éste ejercicio se conforma por las siguientes instrucciones:
1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/

const prompt=require('prompt-sync')()

console.log("Bienvenid@")
let nombre = prompt("¿Cuál es tu nombre? ");
console.log("Hola " +nombre)
let lenguaje = prompt("¿Cuál es el lenguaje que más te gusta? ");
console.log("Éste es tu lenguaje favorito: " +lenguaje);
console.log("teclea 2 valores a continuación");
let valor1 = parseInt(prompt("valor 1: "));
let valor2 = parseInt(prompt("valor 2: "));
let suma = valor1 + valor2;
console.log("El resultado de la suma es: " + suma);
let resta = valor1 - valor2;
console.log("El resultado de la resta es: " + resta);
let edad = parseInt(prompt("¿Cuál es tu edad? "));
if(edad >= 18){
  console.log("puedes continuar");
}
  else{
  console.log("No puedes continuar");
    return;
    }
let numero = parseInt(prompt("introduce un número: "));
if(numero >= 0){
  console.log("El número es positivo");
}else{
  console.log("el número es negativo");
  }

i = 0;
while(i <= 10){
  console.log(i)
  i++
}
let cali = parseInt(prompt("¿Que calificación tienes? "));
if(cali >= 7){
  console.log("estas aprobado!!");
}
else{
  console.log("estas reprobado!!");
}
let aleatorio1 = Math.floor(Math.random()*10)+1;
console.log (aleatorio1);
let aleatorio2 = Math.floor(Math.random()*100)+1;
console.log(aleatorio2);

