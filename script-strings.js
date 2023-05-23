'use strict';
const airline = 'TAB Air Galaxy';
const plane = 'A320';

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
