/*Éste programa trata sobre las siguientes instrucciones:
1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.*/

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

