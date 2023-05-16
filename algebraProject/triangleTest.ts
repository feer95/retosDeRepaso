import { Triangle } from './triangle';
import { Point } from './point';

// Crear puntos para los vértices del triángulo
const vertex1 = new Point(0, 0);
const vertex2 = new Point(3, 0);
const vertex3 = new Point(0, 4);

// Crear objeto Triangle
const myTriangle = new Triangle(vertex1, vertex2, vertex3);

// Probar el método calculateLengthSides()
const sidesLength = myTriangle.calculateLengthSides();
console.log('Longitudes de los lados del triángulo:', sidesLength);