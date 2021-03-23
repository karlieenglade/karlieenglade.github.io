/**
 * VARIABLES:
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.
 * Variables are named identifiers that can point to values of a particular type, like 
 * a Number, String, Boolean, Array, Object or another data type.  Variables are called 
 * so because once created, we can change the value (and type of value) to which they 
 * point.
 *
 * 1. There are 2 phases of using variables: declaration and initialization/
 * assignment. To declare a variable, we use one a keyword var, let, or const, followed
 * by the variable name.
 */
 
// 1. variable declaration //
var myName;

/*at the declaration phase, the variable is undefined because it is not yet 
*assigned/initialized
*/
console.log(myName); //prints => undefined

//variable initialization/assignment 
/*since variable is already declared, we don't need a keyword before the variable 
*name
*/ 
myName = "john";
console.log(myName); //prints => john

//reassigning variable
myName = "bob";
console.log(myName); //prints => bob

//we can assign and reassign anything to variables but not with constants
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//var vs let vs const and hoisting 
/**Hoisting is a process where the interpreter loads variables (and function 
 * declarations) in to memory during the compile phase before executing the code.
 * 
 * Unlike let and const, var is hoisted. This means that var declarations are "pinned" 
 * to the top of a scope so that if a var declaration is used before it is assigned, 
 * we will not get a reference error. The initialization, or value, of the var value is
 * not hoisted---only the var declaration is hoisted. 
 * 
 * Let and const are not hoisted, so if they are referenced before they are declared, 
 * we will get a reference error.
 *
 * Scope refers to where variables or contants are accessible. For example, functions 
 * create their own scope, meaning variables declared inside of a function are not 
 * accessible outside of that scope. The global scope holds all other scopes, and 
 * variables declared in the global scope can be accessed and referenced in the inner 
 * scopes. Inner scopes are called local scopes because their variables are local.
 */
 
/*reassignable:          var, let
  hoisted:               var
  scoped to functions:   var, let, const
  scoped to blocks:           let, const
  scoped to loop blocks:      let, const
*/

/*let and const can't be redeclared
  var can be redeclared
  const can't be used in "for" loops
  const and lets are pinned to the scope in which they are created
  const must be assigned/initialized upon declaration, unlike var and let 
*/

//variable declared with var is hoisted, but not its value
  //will print "undefined" because the variable is recognized but it has no value here 
console.log(wood); //prints => undefined 
var wood = "brown";

//variable declared with let is not hoisted
console.log(plant); /*prints => reference error: cannot access "plant" before 
                    initialization */
let plant = "green";

//variable declared with const is not hoisted
console.log(bus); /*prints => reference error: cannot access "bus" before 
                  initialization*/
const bus = "yellow"; 

//redeclaring and reassigning var, let, and const
//var can be redeclared and reassigned
//declaring var 
var num; 
console.log(num); //prints => undefined

//redeclaring and assigining var
var num = 1;
console.log(num); //prints => 1

//reassigning var
num = 3;
console.log(num); //prints => 3

//let can't be redeclared but can be reassigned
//declaring let 
let myCat;
console.log(myCat); //prints => undefined
let myCat = "lenore"; 
console.log(myCat); //prints => syntax error: "myCat" already declared

//assigning let
myCat = "lenore";
console.log(myCat); //prints => lenore

//reassigning let 
myCat = "roo";
console.log(myCat); //prints => roo

//const must be defined when it is declared and it can't be redeclared or reassigned
//declaring const 
const kid;
console.log(kid); //prints => syntax error: missing initializer in const declaration

//declaring and assigning const
const mySon = "ezel";
console.log(mySon); //prints => ezel

//redeclaring and (attempting) reassigning const 
const mySon = "EZEL";
console.log(mySon); //prints => syntax error: "mySon" already declared

//reassigning const
  //declaring and assigning
const myChild = "Ezel";
console.log(myChild); //prints => Ezel
  //reassigning
myChild = "Ezel V";
console.log(myChild); //prints => type error: assignment to a constant variable