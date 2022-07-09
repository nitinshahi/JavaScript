'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = [`sun`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`];

const openingHours = {
  sun: {
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
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours : openingHours,
  openingHours,

  order(startIndex, mainIndex) {
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

//Looping Objects: Object Keys, Values, and Entries
const values = Object.values(restaurant.openingHours);
console.log(values);
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `we are open for ${properties.length} days : `;
for (const days of properties) {
  openStr += `${days} `;
}
console.log(openStr);

const entries = Object.entries(restaurant.openingHours);
for (const [key, { open: x, close: y }] of entries) {
  console.log(key, x, y);
}
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
const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

//6.
const printGoals = function (...playerGoals) {
  // playerGoals.unshift('nitin');
  console.log(playerGoals);
  console.log(`${playerGoals.length} number of goals scored.`);
};
printGoals(...game.scored);
// console.log(game);

//7.
team1 > team2 && console.log('team 2 is most likely to win');
team2 > team1 && console.log('team 1 is most likely to win');

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

/*
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
for (const item of menu) console.log(item);
for (const item of menu.entries()) console.log(`${item[0] + 1} : ${item[1]}`);
for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

//OPTIONAL CHAINGING
// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
const days = [`sun`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed!!`;
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? `Mehod order doesnot exist`);
console.log(restaurant.nitin?.(2, 2) ?? `Mehod nitin() doesnot exist!!!!`);

//arrays
const users = [
  { name: `nitin`, email: `email.com` },
  { name: 'sakar', email: `sakar.com` },
];

console.log(users[0]?.name ?? `index user is empty`);
*/

//////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1.
for (const [key, playerName] of game.scored.entries()) {
  console.log(`Goal ${key + 1} : ${playerName}`);
}

//2.
const oddValues = Object.values(game.odds);
let avgOdd = 0;
for (const iterator of oddValues) {
  avgOdd += iterator;
}
avgOdd = avgOdd / oddValues.length;
console.log(`Average Odds: ${avgOdd}`);

//3.
const gameEntries = Object.entries(game.odds);
for (const [key, values] of gameEntries) {
  console.log(`Odd of ${game[key] ?? 'draw'} : ${values}`);
}

//4.
let scores = {};
for (const i of game.scored) {
  console.log(i);
  scores[i] = scores[i] ? ++scores[i] : 1;
}
console.log(scores);

/*
const rest = new Map();

rest.set('name', `ram momo`);
rest.set(1, `kathmandu, kasthamandap`);
rest.set(2, `lagan, pokhara`);

rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are Open`)
  .set(false, `we are close`);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get(`open`) && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest.has(2));
// console.log(rest);
console.log(rest.size);
//rest.clear();

const arr = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector('h1'), `heading`);
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', `What is the best programming language in the world?`],
  [1, `java`],
  [2, 'C'],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, 'correct'],
  [false, `Wrong Try again`],
]);
console.log(question);

//convert objects to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Quiiz App
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) {
    console.log(` Answer ${key} : ${value}`);
  }
}

// const answer = Number(prompt(`enter your answer: `));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = new Set(gameEvents.values());
console.log(events);

//2.
gameEvents.delete(64);
// console.log(gameEvents);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for (const [key, value] of gameEvents) {
  key <= 4
    ? console.log(`[First Half] ${key} : ${value}`)
    : console.log(`[Second Half] ${key} : ${value}`);
}

////////////////////////////
//working with strings...

const airline = `TAP Nepal Airs`;
const plane = `A420`;

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B727'.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('airs'));

console.log(airline.slice(4));
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(0, -4));

const checkMiddleSeat = function (seat) {
  //middle seat if B and E in seat

  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle Seat😆');
  else console.log('You have the side Seats😎');
};

checkMiddleSeat(`12B`);
checkMiddleSeat(`22A`);
checkMiddleSeat(`12C`);
checkMiddleSeat(`12E`);

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fixing capitalization in names.
const passenger = 'RaM MOMO';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comapring emails
const email = `nitin@email.com`;
const loginEmail = `   NiTIn@EMAIl.coM \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '123,22$';
const priceNP = priceGB.replace('$', 'Rs').replace(',', '.');
console.log(priceGB, priceNP);

const announcement = `All passengers come to boarding door 23, Boarding door 23!!!`;

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));
console.log(plane1.endsWith('neo'));

//practice Excersice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`))
    console.log(`You are not allowed`);
  else console.log('Welcome aboard!!!');
};

checkBaggage('i have a pen , Pencil and a toothbrush');
checkBaggage('i have a gun , Pencil and a toothbrush');
checkBaggage('i have a knife , Pencil and a toothbrush');

console.log(`a+very+nice+string`.split('+'));
console.log(`Nitin Shahi`.split(' '));

const [firstName, lastName] = 'Nitin Shahi'.split(' ');
const newName = [`Mr`, firstName, lastName].join(` `);
console.log(newName);

//function to capatilize the first letter of names array

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const nameReturn = [];

  for (const n of names) {
    // nameReturn.push(n[0].toUpperCase() + n.slice(1));
    nameReturn.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameReturn.join(' '));
};

capitalizeName('nitin jonny afro micheal');

//padding
console.log('nitin'.padStart(10, '+'));
console.log('god'.padStart(10, '+'));
const maskCreditCard = function (n) {
  const number = n + '';
  const lastNumber = number.slice(-4);
  return lastNumber.padStart(number.length, '*');
};

console.log(maskCreditCard(123412342));
console.log(maskCreditCard(12341));
console.log(maskCreditCard('123412222334'));

//Repeat
const message2 = 'Bad weather..... All Departures Delayed......... ';
console.log(message2.repeat(10));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planeInLine(4);
planeInLine(2);
planeInLine(7);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const button = document.querySelector('.button');

// button.addEventListener('click', function () {
//   const textArea = document.querySelector('.textarea').value;
//   let someText = textArea.replace(/(\r\n|\n|\r)/gm, '');
//   let newText = '';

//   for (const x of someText.split('_')) {
//     console.log(x);
//     newText += x.toLowerCase().replace(x[0], x[0].toUpperCase());
//   }
//   console.log(newText);
// });

/*
button.addEventListener('click', function () {
  let textInput = document.querySelector('.textarea').value;
  textInput = textInput.replace(/\s\s+/g, '\n');
  console.log(textInput);
  let newText = '';

  for (const x of textInput.split('\n')) {
    // console.log(x);
    for (const i of x.split('_')) {
      // console.log(i);
      newText += i[0].toUpperCase() + i.toLowerCase().slice(1);
    }
    newText += '\n';
  }
  console.log(newText);
});

*/

button.addEventListener('click', function () {
  const text = document.querySelector('.textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output =
      `${first + second.replace(second[0], second[0].toUpperCase())}`.padEnd(
        20
      ) + `${'🎁'.repeat(i + 1)}`;
    console.log(output);
  }
});

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
