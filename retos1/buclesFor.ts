function evenNumbers(x: number) {
    let pares : number[] = []
    for (let i = 0; i < x; i++) {
        if (i % 2 === 0) {
            pares.push(i)
        } 
    }
    console.log(pares);
    
    return pares
}
console.log(evenNumbers(10));

function myRevert(myarr: string[] ) {
    let reversedArr: string[] = [];
    for (let i = myarr.length - 1; i >= 0; i--) {
      reversedArr.push(myarr[i]);
    }
    return reversedArr;
  }
let arr = ["Hola", "Adios"];
let reversedArr = myRevert(arr);
console.log(reversedArr);



function isRainbow(colors: string[]) {
    let rainbowColors: string[] = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Indigo", "Violeta"];
  
    colors.forEach(function(color) {
      if (rainbowColors.includes(color)) {
        console.log(`El ${color} está en el arcoiris`);
      } else {
        console.log(`El ${color} NO está en el arcoiris`);
      }
    });
}
isRainbow(["Rojo", "Morado", "Lila", "Verde"]);

export function add(myWord: string[]) {
    let resSuma: number = 0
    for (let i = 0; i < myWord.length; i++) {
        resSuma = myWord[i].length + resSuma
    }
    return resSuma;
}
console.log(add(["Hola", "Adios", "Suma", "Resta"]));


