/** OPERATORS:
 * 0. Operators act on data; to assign or compare data, we use operators. Operators 
 * are also used to include data in arithmetic operations or as logical operators to
 * determine the logic or truth/falsity of a statement.
 * 
 * 1. Operators are classified by what they do and how many operands they require. 
 * There are unary, binary, and ternary operators. Unary operators work with only one 
 * value. Binary operators work with two values, and ternary work with three values.
 */
 
 // 1. types of operators//
 //the assignment operator (=) assigns value to a variable
 let k = 421;
 console.log(k); //prints => 421
 
 let sky = "blue";
 console.log(sky); //prints => blue
 
    /*assignment operators can simultaneously apply arithmetic operations to value 
    being assigned*/
    //assign and add
    /* "+=" adds value of operand on the right to variable and assigns result to the
    variable*/ 
    let x = 5;
    let y = 2;
    y += x; //y = y + x;
    console.log(y); //prints => 7
    
    //assign and subtract
    /*"-=" subtracts value of operand on the right to variable and assigns result to 
    the variable*/ 
    let a = 4;
    a += 5; //a = 4 + 5
    console.log(a); //prints => 9
    
    //assign and multiply
    /*"*=" multiplies value of operand on the right by variable and assigns result to 
    the variable*/ 
    let b = 2;
    b *= 3; // b = 2 * 3
    console.log(b); //prints => 6
    
    //assign and divide
    /*"/=" divides value of operand on the left by operand on the right and assigns 
    result to the variable*/
    let c = 10;
    c /= 5; // c = 10 / 5; 
    console.log(c); //prints => 2
    
    //remainder operator
    /*"%=" divides value of operand on the left by operand on the right and assigns 
    remainder result to the variable*/
    let e = 14;
    e %= 6; // e = 14 % 6; //has a remainder of 2; e = 2
    console.log(e); // prints => 2
   
 //arithmetic operators perform arithmetic on variables
 //binary operators because they require 2 operands
 //adding values
 console.log(1 + 2); //prints => 3
 //can add variables
 let f = 20;
 let g = 10;
 console.log(f + g); //prints => 30

 //can add variables with string values
 let car = "i drive "
 let where = "to you"
 console.log(car + where);//prints => i drive to you
 //can add strings 
 console.log("hello" + " " + "planet"); //prints => hello planet
 
 //subtracting values
 //using variables
 let h = 10;
 let i = 4;
 console.log(h - i); //prints => 6
 //using numbers alone
 console.log(10 + 10); //prints => 20

 //multiplying values
 //using variable
 let j = 5;
 let l = 100;
 console.log(j * l); //prints => 500
 //using numbers alone
 console.log(50 * 2); //prints => 100
 
 //dividing values
 //using variables
 let m = 100;
 let n = 20;
 console.log(m/n); //prints => 5
 //using numbers alone
 console.log(25/5); //prints => 5
 
 //check values for remainders 
 //using variables
 let o = 40;
 let p = 19;
 console.log(o % p); //prints => 2
 //using numbers alone
 console.log(50 % 24); //prints => 2
 
 //////
 //incrementing 
 //unary operator because it only acts on one operand
 //"++" before or after variable adds 1 to variable
 let q = 5;
 q++;
 console.log(q); //prints => 6
 ++q;
 console.log(q); //prints => 7
 
 //"++" after variable increments and returns value before incrementing
 let r = 3;
 let s = r++;
 //read from top to bottom, from right to left:
 // 3 equals r
 // ++3 = s is NOT 4 = s because r is not yet incremented here
 // it is 3 = s. so s = 3 and r = 4
 console.log(s); //prints => 3
 console.log(r); //prints => 4
 
 //"++" before variable increments and returns value after incrementing
 let t = 2;
 let u = ++t;
 console.log(u); //prints => 3
 console.log(t); //prints => 3
 
 
 //decrementing
 //unary operator because it only acts on one operand
 //"--" before or after variable subtracts 1 from variable
 let v = 10;
 v--; //subtracts 1
 console.log(v); // prints => 9
 --v; //subtracts 1 again
 console.log(v); //prints => 8
 
 //"--" after variable decrements and returns value before decrementing
 let w = 4;
 let z = w--;
 console.log(w); //prints 3
 console.log(z); //prints 4

 //"--" before variable decrements and returns value after decrementing
 let num = 8;
 let num2 = --num;
 console.log(num2); //prints => 7
 console.log(num); //prints => 7
 
 //comparison operators compare 2 values and return a boolean (true or false)
 //binary operators because they require 2 operands
 
 //using greater than with numbers
 console.log(1 > 2); //prints => false
 console.log(2 > 1); //prints => true
 //using greater than with strings
  /*strings can be compared by alphabetical order. for example, "at" is greater than 
  "it" because "a" comes before "i"*/
  console.log("cat" > "dog"); //"c" comes before "d" in alphabet. prints => false
  //if first letters are the same, the next letters are then compared and so on
  console.log("cat" > "car"); //"t" comes after "r". prints => true
 
 //greater than or equal to
 console.log(5 >= 5); //prints => true
 console.log(5 >= 4); //prints =>true
 console.log(5 >= 6); //prints => false
 
 //less than
 console.log(1 < 2); //prints => true
 console.log(2 < 1); //prints => false
 console.log("cat" < "dog"); //prints => true
 
 //less than or equal to
 console.log(10 <= 10); //prints => true
 console.log(10 <= 11); //prints => true
 console.log(10 <= 12); //prints =>false
 
 //equal (==) checks if values are equal
 console.log(5 == "5"); //prints => true
  
 //strictly equal (===) checks if the values and types are equal
  //comparing number 5 to string of 5. not strictly equal
 console.log(5 === "5"); //prints => false
 
 //unequal (!=)
  //because values are not being strictly compared, number 5 is equal to string of 5
 console.log(5 != "5"); //prints => false
 console.log(5 != 5); //prints => false
 console.log(4 != "5"); //prints => true
 
 //strictly unequal (!==)
  //number 5 is not strictly equal to string of 5 because they are different data types
 console.log(5 !== "5"); //prints => true
  //number 5 is strictly equal to number 5
 console.log(5 !== 5); //prints => false
 console.log(4 !== 5); //prints => true
 
 //logical operators determine the logic between two values/variables
 //and (&&) operator determines if both values are true
 console.log(1 < 2 && 3 < 4); //prints => true
 console.log(1 < 2 && 3 > 4); //prints => false
 
 //or (||) operator determines if at least one value is true
 console.log(1 < 2 || 3 < 4); //prints => true
 console.log(1 < 2 || 3 > 4); //prints => true
 
 /*bang (!) operator, or "not" operator, changes boolean value from true to false or 
 from false to true*/
 //unary operator because it only acts on one operand
 console.log(!(1 < 2 && 3 < 4)); //prints => false
 console.log(!(1 < 2 && 3 > 4)); //prints => true
 console.log(!(1 < 2 || 3 < 4)); //prints => false
 console.log(!(1 < 2 || 3 > 4)); //prints => false
 
 //typeof operator determines the data type of a value
 //unary operator because it requires and acts on only one value
 let string = "hello";
 let mNum = 4;
 let myBool = true;
 let obj = {name: "sam", age: 30};
 let arr = ["apple", "kiwi", "orange"];
 let func = function(x){
  return x + 5;
 };
 
 console.log(typeof string); //prints => string
 console.log(typeof myNum); //prints => number
 console.log(typeof myBool); //prints => boolean
 console.log(typeof obj); //prints => object
 console.log(typeof arr); //prints => object
 /*arrays are technically objects, so to check if value is array we use 
 Array.isArray(arrayName), which gives us boolean (true or false) value*/
 if (Array.isArray(arr)){
  console.log("array");
 } //prints => "array"
 console.log(typeof func); //prints => function
 
 //negation (-) operator returns the negative value of its operand
 //unary operator because only one operand is required
 let oof = 5;
 console.log(-oof); //prints => -5
 let xx = -10;
 console.log(-xx); //prints => 10
 
 //conditional operator (conditon ? : value1 : value 2)
 /*if the condition is true, value1's value is taken, but if condition is false, 
 value2's value is taken*/
 //ternary operator because it requires 3 operands
 let age = 19;
 let canBuyAlcohol = (age > 20) ? "yes" : "no";
 console.log(canBuyAlcohol); // prints => no
 age = 40;
 canBuyAlcohol = (age > 20) ? "yes" : "no";
 console.log(canBuyAlcohol); //prints => yes