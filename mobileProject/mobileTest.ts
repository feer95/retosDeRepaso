import { Mobile } from './mobile';

let myMobile: Mobile = new Mobile("Iphone", "Apple", "Pro", "Black", 999)

//Probar los métodos
console.log(myMobile.getName());
console.log(myMobile.getTrademark());
console.log(myMobile.getModel());
console.log(myMobile.getColor());
console.log(myMobile.getPrice());

// Set de nuevos valores
myMobile.setName("Galaxy");
myMobile.setTrademark("Samsung");
myMobile.setModel("S 20");
myMobile.setColor("Negro");
myMobile.setPrice(899);

//Probar los métodos con los nuevos datos
console.log(myMobile.getName());
console.log(myMobile.getTrademark());
console.log(myMobile.getModel());
console.log(myMobile.getColor());
console.log(myMobile.getPrice());

let mobile1 : Mobile = new Mobile ("Iphone", "Apple", "14", "Plata", 1000);
let mobile2 : Mobile = new Mobile ("Mi", "Xiaomi", "15", "Negro", 400);
let mobile3 : Mobile = new Mobile ("Galaxy", "Samsung", "21", "Blanco", 800);
let myMobiles : Mobile[] = [mobile1, mobile2, mobile3];

for (let i = 0; i < myMobiles.length; i++) {
    myMobiles[i].caracteristicas();
}