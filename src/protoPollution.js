// Author: Alexander Garofalo
// .load ./src/protoPollution.js

class User
{
    constructor(name, isStudent, isAdmin, isPickled)
    {
        this.name = name;
        this.isStudent = isStudent;
        this.isAdmin = isAdmin;
        this.isPickled = isPickled;
    }
}
class Pickle
{
    constructor(name, family, genus, species, isPickled)
    {
        this.name = name;
        this.family = family;
        this.genus = genus;
        this.species = species;
        this.isPickled = isPickled;
    }
}

let myMap = new Map();
myMap.set("User 0", 
{
    "name": "Alex",
    "isStudent": true,
    "isAdmin": false,
    "isPickled": false
});
myMap.set("User 1", 
{
    "name": "ADMIN",
    "isStudent": null,
    "isAdmin": true,
    "isPickled": false
});
myMap.set("User 2", 
{
    "name": "Cucumber",
    "family": "Cucurbitaceae",
    "genus": "Cucumis",
    "species": "Cucumis sativus",
    "isPickled": false
});
myMap.set("User 3", 
{
    "name": "Pickle",
    "family": "Cucurbitaceae",
    "genus": "Cucumis",
    "species": "Cucumis sativus",
    "isPickled": true
});
// console.log(myMap);

let user0 = new User("Alex", true, false, false);
let user1 = new User("ADMIN", null, true, false);
let users = [user0, user1];

let cucumber = new Pickle("Cucumber", "Cucurbitaceae", "Cucumis", "Cucumis sativus", false);
let pickle = new Pickle("Pickle", "Cucurbitaceae", "Cucumis", "Cucumis sativus", true);
let myPickles = [cucumber, pickle];

// console.log(users);
// console.log(myPickles);

console.log(user0.__proto__.__proto__);

// const set = require('set-value');

// set({}, '__proto__.isAdmin', true);
// if ({}.isAdmin === true)
// {
//     console.log(user0.__proto__.__proto__);
// }
