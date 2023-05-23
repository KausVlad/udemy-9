'use strict';

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
