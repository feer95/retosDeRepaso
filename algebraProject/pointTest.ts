import { Point } from "./point";

let point1: Point = new Point(1,2);
let point2: Point = new Point(6,7);
// Primera prueba
console.log(point1.getX());
console.log(point1.getY());
console.log(point1.numbersToString());
console.log(point1.distanceToOrigin());
console.log(point1.calculateDistance(point2));

// Segunda prueba
point1.setX(3);
point1.setY(4);
console.log(point1.getX());
console.log(point1.getY());
console.log(point1.numbersToString());
console.log(point1.distanceToOrigin());
console.log(point1.calculateDistance(point2));

// Calcular cuadrante
let point4: Point = new Point(1,2);
console.log(point4.calculateQuadrant());
let point5: Point = new Point(-1,2);
console.log(point5.calculateQuadrant());
let point6: Point = new Point(-1,-2);
console.log(point6.calculateQuadrant());
let point7: Point = new Point(1,-2);
console.log(point7.calculateQuadrant());
let point8: Point = new Point(0,2);
console.log(point8.calculateQuadrant());
let point9: Point = new Point(1,0);
console.log(point9.calculateQuadrant());

// Punto mas cercano

let points: Point[] = [point1, point2, point4, point5]
console.log(point8.calculateNearest(points));

