// 1.

let x = -4;

if (x >= 0) {
  console.log('The number is positive');
} else {
  console.log('the number is negative');
}

// 2.

let inputNumber = prompt('Enter a number:');
inputNumber = Number(inputNumber);

if (inputNumber >= 0) {
  console.log('The number is positive');
} else {
  console.log('the number is negative');
}

// 3.

let a = 8;
let b = 8;

if (a === b) {
  console.log('Cele doua numere sunt egale');
} else {
  console.log('Cele doua numere sunt diferite');
}

// 4.

let nota = 6;

if (nota < 5) {
  console.log('Picat');
} else {
  console.log('Promovat');
}

// 5.

let nume = prompt('Enter your name:');

if (nume.length > 15) {
  console.log('Too long');
} else console.log('Ok');
