'use strict';
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
