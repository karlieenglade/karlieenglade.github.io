/** DATATYPES:
 * 0. Data types are types of values. In Javascript, we use many different types of 
 * values, and these values can be classified into 2 main categories.
 *
 * 1. One category of data types is simple/primitive data types. Simple data types are
 * atomic and immutable, meaning they do not hold or collect other values and that they
 * cannot change. Simple data types cannot be of indefinite size; their maximum size is
 * 8 bytes. Operations on simple data types return new values; the original values 
 * remain the same. When assigning or passing values, simple data types use copy by 
 * value. Copying by value means that the values are copied from one variable to the 
 * next, but the value of the original variable does not change. Simple data types 
 * include numbers, strings, booleans, NaN, undefined, and null. Numbers include the 
 * special numeric values NaN, Infinity, and -Infinity.
 *
 * 2. The other main category of data types is complex data types. Complex data types 
 * aggregate other values and can grow indefinitely in size. Operations on complex data
 * types change the original values. This is due to the fact that when assigning or 
 * passing values, complex data types use copy by reference, meaning a variable 
 * references the entire data type, instead of copying its value like when dealing with
 * simple data types. Using copy by reference saves memory since simple data types have
 * a maximum capacity of 8 bytes while complex data types can grow indefinitely. 
 * Copying a complex data type by reference to a variable, then, ensures that the 
 * maximum memory space that can be occupied by that complex data type is 8 bytes. 
 * Complex data types include arrays, objects, and functions.
 */

 // 1. simple/primitive data types //
 //numbers: any numeric value: postitive, negative, or with decimal points
 1, 2, 30, 400, 600, 733, 600000000, 7897879896  //positive numbers
 -50, -123, -500, -400000 //negative numbers

 12.5, 1.2, 5.567 //decimal numbers

 //operations on numbers: we can add, subract, multiply, and divide numbers
 console.log(1 + 2); //prints => 3
 console.log(4 - 1); //prints => 3
 console.log(2 * 5); //prints => 10
 console.log(10 / 2); //prints => 5


        //special numeric values//

        //NaN: Not-a-Number. we get "NaN" when treating non-numeric values like numbers
        console.log("sock" - 10); //prints => NaN
        console.log("ok" * 5); //prints => NaN
        console.log("cat" - "dog"); //prints => NaN
        //0 divided by 0 is NaN
        console.log(0/0); //prints => NaN
        //we can check if a value is NaN with isNaN()
        console.log(isNaN("hjgjhg")); //prints => true
        console.log(isNaN(-1)); //prints => false

        //Infinity and -Infinity
        //a postive number multiplied by Infinity equals Infinity
        console.log(5 * Infinity); //prints => Infinity
        //a negative number multiplied by Infinity equals Infinity
        console.log(-5 * Infinity); //prints => -Infinity
        //a negative number multipled by -Infinity equals Infinity
        console.log(-5 * -Infinity); //prints => Infinity
        //a number divided by Infinity equals 0
        console.log(10/Infinity); //prints => 0
        //a number greater than 0 divided by 0 equals Infinity
        console.log(4/0); //prints => Infinity
        //a negative number divided by Infinity equals -Infinity
        console.log(-5/0); //prints => -Infinity


 //strings: textual data inside of quotation marks
  //can be explicit strings or represented by a variable

 console.log("hello"); //prints => hello

 let me = "bob";
 console.log(me); //prints => bob

 //strings have a length property
 console.log("hello".length); //prints => 5

 let you = "ted";
 console.log(you.length); //prints => 3

 //we can access individual characters in a string with bracket notation
 console.log("meow"[0]); //prints => m

 let cat = "meow";
 console.log(cat[0]); //prints => m



 //operations on strings

 //adding 2 strings together does not change the original strings
 //instead it just creates a new value
 console.log("hello" + " world"); //prints => hello world

 let hel = "hello";
 let wor = " world";
 console.log(hel + wor); //prints => hello world
 

 //booleans: true or false values related to logic
 //typically used in conditional statements

 let n = 3;
 if (n < 5) {
  console.log("is less than 5");
 } //prints => is less than 5

 let weather = "rainy";
 if (weather === "sunny") {
  console.log("mmm nice and warm");
 } else if (weather === "rainy") {
  console.log("too wet");
 } //prints => too wet

 //can be created using comparison variables (>, <, =)
 console.log(4 < 5); //prints => true
 console.log(1 > 2); //prints => false


     //undefined: a variable with no value is undefined and its data type is undefined
     console.log(typeof undefined); //prints => undefined
     /*a variable that is declared but not assigned/defined is undefined because it has
     no value*/
     let potato;
     console.log(potato); //prints => undefined

     //we can make a variable undefined by assigning it to undefined
     let couch = undefined;
     console.log(couch); //prints => undefined

 //null: means "nothing"
 //although technically an object, it's still considered a simple/primitive data type
 console.log(typeof null); //prints => object
 //null can be used as a function's return value when the condition cannot be met
 function funky(num1, num2){
     //if there are more than 2 arguments 
    if (arguments.length > 2) {
        return null;
    }
        return num1 + num2;
 }

 //calling the function
 console.log(funky(50, 30)); //prints => 80
 console.log(funky(40, 50, 10)); //prints => null


 /**copy by value: simple/primitive data types use copy by value.
 * this means when assigning or passing values, simple data types copy the values 
 * rather than having their original values changed.
 */
 
  let a = 10;
  let b = 5;
  //read from right to left
  //value of a is copied to variable c
  //it is saying 10 equals c. so now both a and c have value of 10 
  let c = a;
  console.log(c) //prints => 10
  //value of b is copied to d. it is saying 5 equals d
  let d = b; 
  console.log(d) //prints => 5
  //reassigning the variables further...original values remain unchanged
  //if we give c a new value, the value previously copied to it does not change 
  c = "cat";
  console.log(c); //prints => cat
  console.log(a); //prints => 10
  console.log(b); //prints => 5

  /*if we declare a variable (y) without assigning a value to it, and then assign it to
  a variable (x) that does have a value, then it would read (from right to left) y = x 
  ...but y is undefined. so now value of x and y are both undefined since value of y is 
  copied to x */
  let x = 20;
  let y;
  x = y;
  console.log(x); //prints => undefined
  console.log(y); //prints => undefined
  //another example of copy by value
  let n1 = 1;
  let n2 = n1;
  //adding 2 to value of n1
  n1 += 2;
  console.log(n1); //prints => 3
  //does not affect value of n2 because n2 holds copied value of n1, not n1 itself
  console.log(n2); //prints => 1
 
 // 2. complex data types //
 //arrays: ordered lists that store many values
  /*arrays can store different data types: strings, numbers, booleans, other arrays, 
  objects, and functions*/
   //different data types to put into an array
   let veggies = ["broccoli", "carrots", "corn", "potatoes"];
   let animals = ["dog", "cat"];
   let shirt = {type: "short-sleeved",
   material: "cotton", color: "red"};
   function spitOut(value){
       return value;
   }

let anArray = ["hello", 4, animals, shirt, spitOut("hey")];
console.log(anArray); /*prints => [
                                  'hello',
                                  4,
                                  [ 'dog', 'cat' ],
                                  { type: 'short-sleeved', material: 'cotton', 
                                    color: 'red' },
                                  'hey'
                                ]
                      */
    
//arrays have a length
console.log(anArray.length); //prints => 5
//adding to array
anArray.unshift("socks"); // adds "socks" to beginning
anArray.push("pants"); // adds "pants" to end
console.log(anArray); /*prints => [
                                  'socks',
                                  'hello',
                                  4,
                                  [ 'dog', 'cat' ],
                                  { type: 'short-sleeved', material: 'cotton', 
                                    color: 'red' },
                                  'hey',
                                  'pants'
                                ]
                      */                            

//removing from array
anArray.pop(); // removes last value
anArray.shift(); // removes first value
console.log(anArray); /*prints => [
                                  'hello',
                                  4,
                                  [ 'dog', 'cat' ],
                                  { type: 'short-sleeved', material: 'cotton', 
                                    color: 'red' },
                                  'hey',
                                ]
                      */                            

//accessing array values
//access first index of array
console.log(anArray[0]); //prints => hello
//access to last index without knowing array length
console.log(anArray[anArray.length-1]); //prints => hey
//access to third index
console.log(anArray[3]); /*prints => { type: 'short-sleeved', material: 'cotton', 
                                      color: 'red' }
                         */
//since index 3 is an object, we can access its key value with dot or bracket notation
console.log(anArray[3].type); //prints => short-sleeved
//using bracket notation
console.log(anArray[3]["material"]); //prints => cotton


//changing array values
//we can change an array value by reassigning it
//changing first index key value to "bye"
anArray[0] = "bye";
console.log(anArray); /*prints => [
                                  'bye',
                                  4,
                                  [ 'dog', 'cat' ],
                                  { type: 'short-sleeved', material: 'cotton', 
                                    color: 'red' },
                                  'hey'
                                ]
                      */        

 //objects: unordered collections of properties (key:value pairs)
 //key values must be a string or number
 //creating an object
 let myShirt = {
  type: "long-sleeved",
  color: "black",
  size: "small",
  material: "cotton"
};

console.log(myShirt); /*prints => {
                                  type: 'long-sleeved',
                                  color: 'black',
                                  size: 'small',
                                  material: 'cotton'
                                }
                      */            
//objects don't have a length because they are unordered thus they have no index

//adding to object
//we can use dot or bracket notation to add properties to an object
myShirt.brand = "hanes"; //adds property brand: "hanes"
myShirt["age"] = "5 years"; //adds property age: "5 years"
console.log(myShirt); /*prints => {
                                  type: 'long-sleeved',
                                  color: 'black',
                                  size: 'small',
                                  material: 'cotton',
                                  brand: 'hanes',
                                  age: '5 years'
                                }
                      */            
//changing object values
//using bracket or dot notation, reassign the key value
myShirt.type = "short-sleeved"; //changes type key value to short-sleeved
myShirt["color"] = "green"; // changes color key value to green
console.log(myShirt); /*prints => {
                                  type: 'short-sleeved',
                                  color: 'green',
                                  size: 'small',
                                  material: 'cotton',
                                  brand: 'hanes',
                                  age: '5 years'
                                }
                      */            
//accessing object values
//using bracket notation and the value's key name
console.log(myShirt.material); //prints => cotton
console.log(myShirt["age"]); //prints => 5 years

//removing from object
//using keyword delete followed by object and key name using dot or bracket notation
delete myShirt.size; // removes entire size property
delete myShirt["age"]; // removes entire age property
console.log(myShirt); /*prints => {
                                  type: 'long-sleeved',
                                  color: 'black',
                                  material: 'cotton',
                                  brand: 'hanes',
                                  age: '5 years'
                                }
                      */            

 //functions: reusable blocks of code that perform actions
 //have 4 main parts: function name, parameter(s), function body, and return statement
 //this is a simple function that returns the sum of its parameters
  function myFunction(param1, param2){
     //function body//
    return param1 + param2;
 };
 //functions do not do anyhting until they are invoked/called with arguments
 /*to call or invoke a function, we state the function name with arguments in place
 of its parameters*/
 console.log(myFunction(400, 50)); //prints => 450
 
 //we can assign functions to variables and then use those variables as functions
 let capitalize = function(string){
     return string.toUpperCase();
 }

 //we can call the variable with the function value at an argument
 console.log(capitalize("rainbow")); //prints => RAINBOW


 /**copy by reference.
  * complex data types use copy by reference when being passed or assigned. this means
  * a variable references the entire data type, instead of copying its value like when
  * dealing with simple data types. (see intro)
 */

   //complex data types copying by reference
   let arrOne = ["monkey", "bird", "cow", "dog"];
   let arrTwo = arrOne;
   console.log(arrTwo); //prints => [ 'monkey', 'bird', 'cow', 'dog' ]

   //removing last value of arrOne
   arrOne.pop();
   //also affects value of arrTwo since it references (doesn't copy) arrOne's value  
   console.log(arrTwo); //prints => [ 'monkey', 'bird', 'cow' ]