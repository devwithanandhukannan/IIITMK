import { square, cube } from './operations.js';
import { PI } from './constants.js';
import { isEven, isOdd } from './number.js';

const num = 5;

console.log("Square:", square(num));
console.log("Cube:", cube(num));

const radius = 3;
const area = PI * radius * radius;
console.log("Area of circle:", area);

console.log("Is 10 even?", isEven(10));
console.log("Is 10 odd?", isOdd(10));
console.log("Is 7 even?", isEven(7));
console.log("Is 7 odd?", isOdd(7));
