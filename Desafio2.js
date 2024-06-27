const prompt=require('prompt-sync')()

let nombre = prompt("¿Cuál es tu nombre? ");

console.log("Bienvenid@,"+ nombre);

let dia = prompt ("¿Qué día de la semana es? ");

if(dia === 'sabado' || dia === 'domingo'){
console.log("Buen fin de semana");
}else{
console.log("Buena semana");
}

let numero = prompt("ingresa un numero: ");
if(numero > 0){
console.log("el número es positivo");
}
else if (numero < 0){
console.log("el número es negativo");
}
else if(numero == 0){
console.log("El número es cero");
}

