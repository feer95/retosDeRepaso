import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let myMobile1: Mobile = new Mobile("Iphone", "Apple", "Pro", "Negro", 999);
let myMobile2: Mobile = new Mobile("Galaxy", "Samsung", "S20", "Blanco", 899);
let myMobile3: Mobile = new Mobile("Mi", "Xiaomi", "8", "Azul", 400);
let myMobile4: Mobile = new Mobile("Iphone", "Apple", "ProMAX", "Plata", 1999);
let myCollection: MobileCollection = new MobileCollection([myMobile1, myMobile2, myMobile3, myMobile4]);

console.log(myCollection.getMobiles());
console.log(myCollection.getPrice());
myCollection.printCollection();
