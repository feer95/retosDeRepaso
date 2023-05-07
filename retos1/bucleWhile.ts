function hasEven(myNums: number[]) {
    let i: number = 0
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return "Este array tiene un número par";
        }
        i++;
    }
    return "Este array NO tiene un número par" ;
    
}
console.log(hasEven([1, 3, 5, 7, 9]));

function startWithM(myNames: string[]) {
    let i: number = 0
    while (i < myNames.length) {
        if (myNames[i].startsWith("M") == false) {
            return false;
        }
        i++;
    }
    return true
}

console.log(startWithM(["Maria" , "Montse", "Farcos", "Mariano"]));

