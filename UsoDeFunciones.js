const prompt=require('prompt-sync')()

function Saludo(){
  console.log("hola mundo");
  return;
}
Saludo();

//función que devuelve un saludo 

function SaludoNom(){
  let nombre=prompt("ingrese su nombre: ");
  console.log("hola",nombre);
  return;
}
SaludoNom();  

function doble(){
  let numero = parseInt(prompt("ingrese un numero: "));
  console.log("el doble es: ",numero*2);  
  return;
}
doble();

// función que devuelve el promedio de 3 números 
function prom(){
  console.log("Ingresa 3 numeros");
  let num1 = parseInt(prompt("ingrese primer valor: "));
  let num2 = parseInt(prompt("ingrese segundo valor: "));  
 let num3 = parseInt(prompt("ingrese tercer valor: "));
  console.log("el promedio es: ",(num1+num2+num3)/3);  
}
prom();

//función que devuelve el mayor de 2 números

function mayor(){
  console.log("ingresa 2 numeros");
  let n1 = parseInt(prompt("ingrese el primer numero: "));
  let n2 = parseInt(prompt("ingrese el segundo numero: "));

  console.log(`el número mayor es:       ${Math.max(n1,n2)}`);
  return;
}
mayor();

//función que devuelve el resultado de multiplicar un número por si mismo

function mul(){
  console.log("ingresa un numero");
  let n1 = parseInt(prompt("ingrese el numero: "));
  console.log(`el resultado es: ${n1*n1}`);
  return;  
}
mul();



