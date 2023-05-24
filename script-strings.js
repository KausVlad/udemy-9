'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

button.textContent = 'Click me!';
textarea.textContent =
  'underscore_case \n first_name \n Some_Variable    \n calculate_AGE \n   delayed_departure';

button.addEventListener('click', () => {
  const text = textarea.value;
  for (const [key, i] of text.split('\n').entries()) {
    const [fist, second] = i.toLowerCase().trim().split('_');
    const newWord = fist + second.replace(second[0], second[0].toUpperCase());

    console.log(`${newWord.padEnd(20)}${'💥'.repeat(key + 1)}`);
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const iterator of flights.split('+')) {
  const [type, from, to, time] = iterator.split(';');
  const output = `${
    type.startsWith('_Delayed') ? '🔴' : '🟢'
  } ${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(
    to
  )} (${time.replace(':', 'h')})`;
  console.log(output.padStart(45, '_'));
}

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

/*

// split and join

console.log('a+veree+qwqe+qw'.split('+'));

const [firstName, lastName] = 'Vladik Shk'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr', firstName, lastName.toUpperCase()].join('___');
console.log(newName);

const capitalizeName = (name) => {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
};

const passenger = 'vlados shk';

capitalizeName(passenger);

//!padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('ViVi'.padStart(5, '+'));
console.log('ViVi'.padEnd(15, '+'));

const maskCreditCard = (number) => {
  const str = number.toString(); // or number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(
  maskCreditCard(1234567890123456),
  maskCreditCard(3453457889930482),
  maskCreditCard('4567890123456789')
);

// !repeat

const message2 = 'Bat weather... All Departures are delayed...';

console.log(message2.repeat(5));

const planesLine = (n) => {
  console.log(
    `There are ${n} ${n === 1 ? 'plane' : 'planes'} in line ${'✈'.repeat(n)}`
  );
};

planesLine(5);
planesLine(1);
*/
/*
const airline = 'TAB Air Galaxy';
const plane = 'A320';

const passenger = 'voLiSsS'; // Volisss
const passengerLower = passenger.toLowerCase();

const newPassenger = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(newPassenger);

// Comparing email

const email = 'yv9oW@example.com';
const loginEmail = '   Yv9oW@example.cOm   \n';

console.log(loginEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);

// Replacing

const priceGB = '400,33£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // regular expression /g means global

// booleans

const planeX = 'Airbus A320neo';
console.log(planeX.includes('neo'));
console.log(planeX.startsWith('Air'));

if (planeX.startsWith('Airbus') && planeX.endsWith('neo')) {
  console.log('I am flying with Airbus A320neo');
} else {
  console.log('Sorry, I am not flying with this plane');
}

*/

/*

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('A'));
console.log(airline.indexOf('Galaxy'));

console.log(
  airline.slice(airline.indexOf('Air'), airline.lastIndexOf('Galaxy'))
);
console.log(airline.slice(4));
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = (seat) => {
  // B and E are middle seats
  const s = seat.slice(-1).toUpperCase();
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 🤔');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('15c');
checkMiddleSeat('13a');
checkMiddleSeat('23E');

*/
