'use strict';
/*
const rest1 = {
  name: 'Capri1',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piqqe',
  owner: 'Giovanni Giorgio',
};

//* OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//* Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && 'ANONYMOUS';
// rest1.owner = rest1.owner && 'ANONYMOUS';

//* AND assignment operator
rest2.owner &&= 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';

console.log(rest1, rest2);
*/
/*

//! Nullish Coalescing Operator

restaurant.numGuests = null;
const guests = restaurant.numGuests || 11;
console.log(guests);

// *Оператор нульового об’єднання ( ??) — це логічний оператор, який повертає свій правий операнд, коли його лівий операнд дорівнює null або undefined, а в інших випадках повертає його лівий операнд.

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
//! OR operator will return the first truthy value of all the operands or the last value if all of them are falsy
console.log('--- OR ---');
//! Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Vlad');
console.log('' || 'Vlad');
console.log(null || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'OwO OwO' || 2 || null);

restaurant.numGuests = 42;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//! AND operator will return the first falsy value or the last value if all of them are truthy
console.log('--- AND ---');
console.log(0 && 'Vlad');
console.log('' && 'Vlad');
console.log(5 && 'Vlad');

console.log('wwww' && 44 && null && 'OwO OwO');
console.log(55 && 'Vlad' && true && 'OwO OwO');

// Practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onion', 'olives');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion', 'olives');
*/
