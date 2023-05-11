// Función Zodiaco 
    // Fechas en base a: https://www.lavanguardia.com/horoscopo/signos-zodiaco

function zodiac(day: number, month: number) {
    let resultado: string 
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        resultado = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        resultado = "Tauro";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        resultado = "Geminis";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        resultado = "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        resultado = "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        resultado = "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        resultado = "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        resultado = "Escorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        resultado = "Sagitario";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
        resultado = "Capricornio";
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
        resultado = "Acuario";
    } else 
    resultado  = "Piscis";
    return resultado
};
console.log(zodiac(30, 12))


function continent(country: string) {
    if (country == "España" || country == "Francia" || country == "Alemania" || country == "Italia" || country == "Holanda") {
        console.log(`${country}` + " pertenece a Europa");  
    } else if (country == "EEUU" || country == "Canada") {
        console.log(`${country}` + " pertenece a America");
    } else if (country == "Venezuela" || country == "Argentina" || country == "Brasil" || country == "Chile" || country == "El salvador") {
        console.log(`${country}` + " pertenece a Latinoamérica");
    } else if (country == "Australia" || country == "Fiji" || country == "Nueva Zelanda" || country == "Samoa") {
        console.log(`${country}` + " pertenece a Oceania");
    } else if (country == "China" || country == "Japon" || country == "Indonesia" || country == "India" || country == "Tailandia") {
        console.log(`${country}` + " pertenece a Asia");
    } else if (country == "Sudafrica" || country == "Nigeria" || country == "Kenia" || country == "Ghana" || country == "Marruecos") {
        console.log(`${country}` + " pertenece a Africa");
    }
}
continent("Marruecos");


export function isEven(x:number) {
    if (x % 2 === 0) {
        return "El número es par"
    } else if (x % 2 != 0) {
        return "El número es impar"
    }
}
console.log(isEven(3));



