let apples: number = 3;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing = undefined;
// built in objects

let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'white', 'blue'];
let myNumbers: number[] = [3, 2, 1];
let facts: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

let words = ['red', 'green', 'blue'];
let foundWord;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// Var check on numbers infered or i as list illogically.
/**TS does not check logic of the function, just checks the types are coorect, no calculation. */

let numbers = [10, -1, 12];
let numberAboveZero;

let usererAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if ((numberAboveZero = numbers[i] > 0)) {
    numberAboveZero = numbers[i];
  }
}
