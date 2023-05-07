import { isEven } from './condicionales.js';
import { add } from './buclesFor';


let arr1 : string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2 : string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3 : string[] = ["Venezuela", "Veneno", "Voltaje"];

let suma1 : number = add(arr1);
let suma2 : number = add(arr2);
let suma3 : number = add(arr3);

console.log(`La suma de caracteres del array es: ${suma1} y ${isEven(suma1)}`);
console.log(`La suma de caracteres del array es: ${suma2} y ${isEven(suma2)}`);
console.log(`La suma de caracteres del array es: ${suma3} y ${isEven(suma3)}`);



