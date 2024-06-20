
//ejercicio 1 one education java

const prompt = require("prompt-sync")()

let mensajeDeBienvenida = 'Bienvenido a la aplicación';
console.log(mensajeDeBienvenida);

let nombre = "Alan";
let edad  = 25;
let numeroDeVentas = 50; 
let saldo = 1000;
let mensajeError = '¡error! Completa todos los campos';

nombre = prompt('ingresa tu nombre:');
edad =  prompt("ingresa tu edad:");


if (nombre, edad ===''){
  console.log(mensajeError)
}
else{

  if (edad >= 18){
    console.log("puedes obtener tu licencia de conducir");
  }
  else{
    console.log("no puedes obtener tu licencia de conducir")
  }
  
}

  
