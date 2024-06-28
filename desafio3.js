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

