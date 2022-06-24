'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

/*
///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// var a;
// function calcasss(a) {
//   this.a = a;
// }

// calcasss(2);
// console.log(a);

// const nitin = {
//   a: 10,
//   nitinMethod: function (a) {
//     this.a = 10 - a;
//     return a;
//   },
// };
// console.log(nitin.a);
// console.log(nitin.nitinMethod(3));
// nitin.nitinMethod(3);
// console.log(nitin.a);

// const glo = 20;
// const n2 = function () {
//   const glo = 10;
//   const n3 = function () {
//     const glo = 5;
//     console.log(glo);
//     return this.glo;
//   };
//   console.log(n3());
// };

// n2();

// const firstName = 2;
// const sakar = {
//   firstName: 5,
//   view: () => console.log(this.firstName),
// };

// sakar.view();
// console.log(this.firstName);