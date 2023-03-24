'use strict';

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

const user = new User('John');

console.log(user);
