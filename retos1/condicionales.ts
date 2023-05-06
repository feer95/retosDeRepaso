// Función Zodiaco 
    // Fechas en base a: https://www.lavanguardia.com/horoscopo/signos-zodiaco
function zodiac(day: number, month: number) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Tauro";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Geminis";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Escorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagitario";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 20)) {
        return "Capricornio";
    } else if ((month === 1 && day >= 21) || (month === 2 && day <= 19)) {
        return "Acuario";
    } else 
    return "Piscis";
}

console.log(zodiac(7, 5));

