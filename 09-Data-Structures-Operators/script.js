'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 23,
    },
  },
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    //destructing arrays
    startIndex: s = 1, //default values
    mainIndex: m = 1,
    time: t = `20:00`,
    address: add,
  }) {
    console.log(
      `Order received for ${this.starterMenu[s]} and main course ${this.mainMenu[m]} , delivery time ${t} at ${add}`
    );
  },
  orderMomo: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious momo of ${ing1}, ${ing2} and ${ing3}`);
  },
  orderpizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    console.log(
      `yout pizza with ${mainIngredient} and ${otherIngredients} is ready`
    );
  },
};

//function call with obj as arguments
restaurant.orderDelivery({
  time: `1:30`,
  address: 'Kathmandu',
  startIndex: 2,
  mainIndex: 1,
});

restaurant.orderDelivery({
  address: 'Kathmandu',
  mainIndex: 1,
});

/*
//////////////////////////////////////
//destructing array
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, , third] = restaurant.categories;
console.log(first, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);
// let temp = main;
// main = secondary;
// secondary = main;
[main, secondary] = [secondary, main];
console.log(main, secondary);

//returing 2 values from a function...
const [starterCourse, mainCourse] = restaurant.order(1, 2);
console.log(starterCourse, mainCourse);

const nested = [2, 3, [5, 6]];
// const [i, j, k] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values in destructing array
const arr1 = [5, 6, 7];
const [a = 1, b = 1, c = 1, d = 1] = arr1;
console.log(a, b, c, d);
*/

/*
/////////////////////////
//Destructing Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values...
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables...
let a = 1231;
let b = 234;
const objNum = {
  a: 22,
  b: 33,
  c: 44,
};
console.log(a, b);
({ a, b } = objNum);
console.log(a, b);

//Nested Oobjects...
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// mainMenuCopy[0] = 'hello';
// console.log(mainMenuCopy);
// console.log(restaurant.mainMenu);

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const ingredients = [
  // prompt("Let's make delicious momo! ingredient 1 : ?"),
  // prompt(`ingredient 2: ?`),
  // prompt(`Ingrediet 3: ?`),
];

restaurant.orderMomo(...ingredients);

const newRestaurant = { foundIn: 1998, ...restaurant, founder: `hero` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ram MOMO`;
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/*
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizz, , riss, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizz, riss, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//  2) functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6, 7, 8);

const x = [1, 2, 3];
add(...x);

restaurant.orderpizza('sausage', 'pepporoni', 'cheese', `spinach`, `garlic`);

// USE any data type, return any data type, short- circuting
console.log(`----------OR----------`);
console.log(3 || 'nitin');
console.log(`` || 'nitin');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || null || 'nitin' || 100);

restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? restaurant.numGuest : `ternary`;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

//nullish coalascing operator
const guest3 = restaurant.numGuest ?? 10;
console.log(guest3);

console.log(`----------AND----------`);
console.log(3 && true);
console.log(undefined && null);
console.log(2 && false);
console.log(null && true);

restaurant.orderpizza && restaurant.orderpizza(`mushroom`, `spinach`, `cheese`);
*/

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
// const player1 = game.players[0];
// const player2 = game.players[1];
const [player1, player2] = game.players;

//2.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
const { team1, draw, team2 } = game.odds;

//6.
const printGoals = function (playername) {
  console.log(playername);
};
printGoals(...allPlayers);

