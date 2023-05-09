export class Point {
    // Atributos
    private x: number;
    private y: number;

    //Constructor
    constructor(x:number, y:number){
        this.x = x
        this.y = y
    }

    // Set
    setX(x: number): void {
        this.x = x;
    }
    setY(y: number): void {
        this.y = y;
    }
    // Get
    getX():number {
        return this.x
    }
    getY():number {
        return this.y
    }

    // Métodos
    numbersToString(): string {
        return `(${this.x},${this.y})`
    }
    // d(P, Q) = √((x2 - x1)² + (y2 - y1)²)
    distanceToOrigin(): number {
        let distance = Math.sqrt(this.x * this.x + this.y * this.y)
        return distance
    }
    calculateDistance(anotherPoint: Point): number {
        let xAct = this.x;
        let yAct = this.y;
        let xNew = anotherPoint.getX();
        let yNew = anotherPoint.getY();
        let xFinal = xNew - xAct;
        let yFinal = yNew - yAct;
        let distance = Math.sqrt(xFinal * xFinal + yFinal * yFinal)
        return distance
    }
    calculateQuadrant(): number {
    if (this.x === 0 || this.y === 0) {
        return 0;
        } else if (this.x > 0 && this.y > 0) {
        return 1;
        } else if (this.x < 0 && this.y > 0) {
        return 2;
        } else if (this.x < 0 && this.y < 0) {
        return 3;
        } else {
        return 4;
        }
    }
    calculateNearest(points: Point[]): Point {
        let near: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (this.calculateDistance(points[i]) < this.calculateDistance(near)) {
                near = points[i];
            }
        }
        return near;
    }
}
