import { Mobile } from "./mobile";

export class MobileCollection {
    // Atributos
    private mobiles: Mobile[]
    private totalPrice: number

    // Constructor
    constructor(mobiles: Mobile[]){
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }

    // Setters
    setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles
    }
    setPrice(totalPrice: number): void {
        this.totalPrice = totalPrice
    }

    // Getters

    getMobiles(): Mobile[] {
        return this.mobiles
    }
    getPrice(): number {
        return this.totalPrice
    }

    private totalPriceCalculation() {
        let total = 0
        for (let i = 0; i < this.mobiles.length; i++) {
            total = total + this.mobiles[i].getPrice() 
        }
        return total
    }

    printCollection(): void {
        console.log("This is all my mobiles:");
        for (let i = 0; i < this.mobiles.length; i++) {
            console.log(`The characteristics of the mobile ${this.mobiles[i].getTrademark()}:`);
            console.log(`Name: ${this.mobiles[i].getName()}`);
            console.log(`Trademark: ${this.mobiles[i].getTrademark()}`);
            console.log(`Model: ${this.mobiles[i].getModel()}`);
            console.log(`Color: ${this.mobiles[i].getColor()}`);
            console.log(`Price: ${this.mobiles[i].getPrice()}`);   
        }
        console.log(`Price overall: ${this.totalPrice}`);
    }
}
