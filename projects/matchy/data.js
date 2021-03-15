/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "cow";
animal.name = "Cam";
animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

//bracket not, give noises its first element
noises[0] = "moo"; //["moo"]

//using array function, add to end of noises
noises.push("wahh"); //["grr", "wahh"]

//add to beginning of noises
noises.unshift("chomp"); //["chomp", "grr", "wahh"]

//bracket notation, add to end ....length not length-1 bc length-1 will change last value, not add to end
noises[noises.length] = "snort";

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//bracket not, assign the noises property on animal to noises array
animal["noises"] = noises;

//any syntax, add another noise
noises.push("growl");

console.log(animal);




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

//push our animal that we created to animals
animals.push(animal);

console.log(animals);
//create a variable called duck and assign it...
var duck = { species: "duck", name: "Jerome", noises: ["quack", "honk", "sneeze", "woosh"] };

//push duck to animals
animals.push(duck);

console.log(animals); 

//make 2 more animal objects each with a species, name, and at least 2 sounds sounds, add them to animals
var cat = {species: "cat", name: "Lenore", noises: ["meow", "purr"]};
var dog = {species: "dog", name: "Doodle", noises: ["woof", "grr"]};
animals.push(cat, dog);

console.log(animals);
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//array to hold friends bc array is good to hold strings (the animal's friend's names)
var friends = [];

// [ ] Write a function called getRandom that takes our animals array and returns a random index of the input array, using Math.random

function getRandom(animals){
    //takes animals array 
    //returns a random index of input array, Math.random
    return animals[Math.floor(Math.random() * animals.length)]; // sometimes fails ???
}

//random index from this function that you just created, get a random animal and add its name to friends.

friends.push((getRandom(animals))["name"]);

console.log(friends);

//bracket notation, add friends list as property also named friends on one of the animals in the animals array

animals[0]["friends"] = friends;

console.log(animals);




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}