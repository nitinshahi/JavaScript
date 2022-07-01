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
