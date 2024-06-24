const prompt=require('prompt-sync')()

//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
c = 1;
while(c <= 10){
console.log(c);
c = c + 1;
} 

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
contador = 10;
while(contador >= 0){
console.log(contador);
contador = contador - 1;
} 

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numero = parseInt(prompt("teclea un número: "));
i = 0;
while(i <= numero ){
  console.log(i);
  i = i + 1; 
  }

//Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese número hasta 0, utilizando un bucle 'while' en la consola del navegador.

x = parseInt(prompt("teclea un número: "));
i = x;
while(i >= 0){
  console.log(i);
  i = i - 1;
}




