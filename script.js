'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  // can also be written as [weekdays[5]]  or `day-${2 + 4}`, computed name
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  locations: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ** openingHours: openingHours, // old way
  openingHours, // new way, ES6 enhanced object literals

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //default values
  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////$///////////////////
console.log('______↑______');
console.log('__!MAPS!_Resume_↓______');
//////////////////////////////$///////////////////
/*
//!MAPS!_Resume

const questions = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(questions);

//* Converting object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// task

console.log(questions.get('question'));
for (const [key, value] of questions) {
  typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;

console.log(questions.get(questions.get('correct') === answer));

//* convert map to array

console.log([...questions]);
console.log([...questions.keys()]);
console.log([...questions.values()]);
console.log(questions.entries());


//////////////////////////////$///////////////////
console.log('__!MAPS!_Resume____↑______');
console.log('__!MAPS!___↓______');
//////////////////////////////$///////////////////
*/
/*
//! Maps

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(rest);

console.log(rest.get(true)); // Метод .get() для Map в JavaScript дозволяє отримати значення з Map за ключем.

const time = 3;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // Метод .has() дозволяє перевіряти наявність ключа в Map.

rest.delete(2); // Метод .delete() дозволяє удаляти значення з Map за ключем.

console.log(rest.size); // Метод .size() дозволяє повернути кількість ключів в Map.
// console.log(rest.clear()); // Метод .clear() дозволяє очистити значення з Map.

const arr = [1, 2];
rest.set(arr, 'LOL');
rest.set([1, 2], 'Test');
rest.set(document.querySelector('h1'), 'Heading'); // Можна використовувати dom елемент як ключ

console.log(rest);

console.log(rest.get(arr)); // Undefined

//////////////////////////////$///////////////////
console.log('__!MAPS!___↑______');
console.log('__!SETS!___↓______');
//////////////////////////////$///////////////////
*/
/*
// !Sets and Maps
//$ Sets are used to store UNIQUE!!! values
//* Maps are used to store key-value pairs

// !Sets

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('hello'));

console.log(orderSet.size); //similar to length property of arrays but returns number of unique elements

console.log(orderSet.has('Pizza')); //Similar to includes() method of arrays but for sets
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread'); //similar to push() method of arrays
orderSet.add('Garlic Bread');

console.log(orderSet);

orderSet.delete('Pizza'); //similar to pop() method of arrays

console.log(orderSet);

for (const iterator of orderSet) console.log(iterator);

// orderSet.clear();
// console.log(orderSet);

//Use cases of sets Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(new Set("Vladislav it's me").size);

//////////////////////////////$///////////////////
console.log('__!SETS!___↑______');
//////////////////////////////$///////////////////
*/
/*
//! Looping Objects_ Object Keys, Values, and Entries
//! Objects.keys()
//* Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for (const day of properties) {
  console.log(day);
  openStr += ` ${day}, `;
}
console.log(openStr);

//! Objects.values()
//* Property VALUES
const values = Object.values(openingHours);
console.log(values);

//* Entries object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
*/

//////////////////////////////$///////////////////
//////////////////////////////$///////////////////

/*
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// console.log(restaurant.openingHours.mon.open); //Error Cannot read property 'mon' of undefined

//! WITH optional chaining (?.)
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'Closed'; //! Use Nullish Coalescing Operator (??) and optional chaining (?.)
  console.log(`On ${day}, open at ${open}`);
}

//* Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderSS?.(0, 1) ?? 'Method does not exist'); // Method does not exist

//* Arrays
const users = [
  { name: 'Vas', age: 22 },
  { name: 'Po', age: 3 },
];

console.log(users[2]?.name ?? 'User array empty');
*/

//////////////////////////////$///////////////////
//////////////////////////////$///////////////////

/*
//$ For of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const iterator of menu) console.log(iterator);

//$  entries() important staff 
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
  // console.log(`${iterator[0] + 1}: ${iterator[1]}`);
}

console.log([...menu.entries()]);
*/

//////////////////////////////$///////////////////
//////////////////////////////$///////////////////

/*
// ! ⁡⁣⁣⁢1) REST Pattern Destructuring⁡
// ! ⁡⁣⁢⁣SPREAD, because on RIGHT side of =⁡⁡⁡
const arr = [1, 2, ...[3, 4]];

// ! ⁡⁢⁣⁡⁣⁢⁣REST, because on LEFT side of =⁡⁡
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);

// ! ⁡⁣⁣⁢2) Functions REST parameters

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 6, 7, 8);
add(1, 2, 3, 4, 5, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

//////////////////////////////$///////////////////
//////////////////////////////$///////////////////

/*
// !⁡⁣⁣⁢SPREAD OPERATOR (...arr)⁡

const arr = [7, 4, 1];
const glekNewArr = [3, 4, arr[0], arr[1], arr[2]];
console.log(glekNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...arr);
//same as
console.log(7, 4, 1);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// !COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

// !JOIN 2 ARRAYS
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Goose';
const letters = [...str, '', 'test'];
console.log(letters);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//////////////////////////////$///////////////////
//////////////////////////////$///////////////////

/*
//!⁡⁣⁣ ⁢Destructuring objects⁡
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

const { locations, starterMenu, openingHours } = restaurant;
console.log(locations, starterMenu, openingHours);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//! ⁡⁣⁢Mutating variables⁡
let a = 111;
let b = 999;
const obj = { a: 77, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//! Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// ⁡⁣⁣//! ⁡⁣⁣⁢Destructuring arrays⁡
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // const [first, , second] = restaurant.categories;
// // console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //! ⁡⁣⁣⁢Nested destructuring⁡
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [k, , [l, m]] = nested;
// console.log(k, l, m);

// const [p = 1, q = 1, r = 1] = [2, 4];
// console.log(p, q, r);
*/
