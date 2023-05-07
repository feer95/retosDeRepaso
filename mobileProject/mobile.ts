export class Mobile {
    // Atributos
    private name : string;
    private trademark : string; 
    private model : string;
    private color : string;
    private price : number;

    // Constructor
    constructor(name: string, trademark : string, model : string, color : string, price : number) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    // Setters
    setName(name: string): void {
        this.name = name;
    }
    setTrademark(trademark: string): void {
        this.trademark = trademark;
    }
    setModel(model: string): void {
        this.model = model;
    }
    setColor(color: string): void {
        this.color = color;
    }
    setPrice(price: number): void {
        this.price = price;
    }
    // Getters
    getName():string {
        return this.name
    }
    getTrademark():string {
        return this.trademark
    }
    getModel():string {
        return this.model
    }
    getColor():string {
        return this.color
    }
    getPrice():number {
        return this.price
    }
    // Método caracterísitcas
    caracteristicas() {
        console.log(`The characteristics of the mobile name are:
        - Name: ${this.name}
        - Trademark: ${this.trademark}
        - Model: ${this.model}
        - Color: ${this.color}
        - Price: ${this.price}`); 
    }
}