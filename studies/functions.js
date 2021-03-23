/** FUNCTIONS:
 * 0: Functions are reusable blocks of code that accept inputs, process those inputs, 
 * and return a new data value. There are 2 phases to creating and using a function. 
 * First, a function is declared and defined. Then, the function is called by calling 
 * its name with arguments in place of the parameters. Until a function is called, it
 * does nothing.
 * 
 * 1. There are 4 parts to a function declaration/definition: name, parameter(s), 
 * function body (where code runs), return statement. To define a function, we use the 
 * keyword "function" followed by function name, parameters, function body, and return
 * statement. The function name can be anything; it is useful so that we can later call
 * that function at certain arguments. Parameters are just placeholders for function 
 * inputs called arguments, which are used later when calling the function. Parameters
 * can represent any data type. The function body is what the function does. And the 
 * return statement is what the function will output.
 * 
 *   Functions can take inputs and return output optionally. That is, parameters and 
 * return statements are not necessary for a function to work. However, when a function
 * does require input and output, we can simply include (a) parameter(s) and a return 
 * statement in the function definition. If input and/or output are not needed, 
 * likewise, we simply don't include them in the function definition.
 *  
 * 2. After defining a function, we can call it at other values by replacing the 
 * parameters with arguments. Arguments are the data inputs for a function call that 
 * the function will act on. Because functions are reusable, we can use many different
 * arguments in a function call to obtain different results. 
 * 
 * 3. We can assign functions to variables by simply assigning the function name to a 
 * variable. This is called a function expression. The variable the function is 
 * assigned to holds the entire function and thus can be used as a function. When using
 * a function expression (when assigning a function to a variable), the function does 
 * not need a name. Unlike a function declaration, a function expression is not hoisted.
 * 
 * 4. Function declarations are hoisted, but function expressions are not. This means 
 * a function's name can be referenced and used before it is defined. However, if a 
 * function is assigned to a variable, that variable representing the function is not
 * hoisted. 
 * 
 * 5. Functions have their own scope, meaning variables declared inside of a function 
 * are not accessible from outside of the function. However, functions can access 
 * variables from the global scope, or from outside of the function. For example, a 
 * function's parameters can only be used inside of that function.
 * 
 * 6. A nested function is a function that is contained in another function. Nested 
 * functions can reference variables from their parent scope (from the outer function 
 * that contains them). This is called closure. When the inner/child function is called,
 * it has access to variables in the outer/parent function/scope. The parent function's
 * variable is enclosed in the child function. Although the inner function can use 
 * variables from the outer function, the outer function cannot access or use variables
 * declared in the child function, including its parameters. The inner function is in 
 * its own scope while also being in the outer function's scope, which is why it has 
 * access to the outer scope's variables. But the outer function is locked out of the 
 * inner function's scope. 
 */
 
 // 1. function declaration/definition //
 function myFunction(param1, param2){
     //function body//
     //functions can do almost anything
     //here we are just returning the parameters added together
    return param1 + param2;
 };

 //prints to the console its name and that it is a function
 console.log(myFunction); //prints => [Function: myFunction]
 
 // 2. calling the function //
 //if we call that function at arguments, then it will function
 //a function is dead until we call/invoke it
 //calling the function brings it to life 
 console.log(myFunction(5, 10)); //prints => 15
 let me = "cat";
 let you = "dog";
 console.log(myFunction(me, you)); //prints => catdog
 
 // 3. function expression // 
 //assigning entire function to variable "undercoverFunction"
 let undercoverFunction = function (x, y) {
     return x * y;
 };

 //using that variable as a function and calling it at x=20 and y=2
 console.log(undercoverFunction(20, 2)); //prints => 40
 
 // 4. function declaration is hoisted to the top of it's scope
 returnValue("hey"); //prints => hey
 function returnValue(value){
   return value;
 }
 
 //function expression is not hoisted
 funcVar("hello"); //prints => type error: funcVar is not a function
 var funcVar = function(value){
   return value;
 };
 
 // 5. function scope //
 //function can access variables from outside of its scope
 let food = "pizza";
 let drink = "water";
 let enjoy = " and i like it";
 
 //function is including variable "enjoy" from outside of its scope
 function consume(solid, liquid) {
     return "i eat " + solid + " and " + "i drink " + liquid + enjoy;
 }
 
 //function can access variable "enjoy" so it prints...
 console.log(consume(food, drink)); /*prints => i eat pizza and i drink water and i 
                                                like it */

 
 /*variables declared in function are function-scoped meaning they cannot be accessed 
 from outside of the function*/
 function bf(name) {
    let me = "phoebe and ";
    return me + name + " foreverrrrr";
 }
 
 console.log(bf("sam")); //prints => phoebe and sam foreverrrrr

 //variable "me" is declared inside of the function so it's trapped in there
 console.log(me); //undefined
 
 // 6. function closure //
 //parent function containing nested function
 function parent(outerParam) {
   //nested function with access to parent scope
   //nested function using variable from parent scope
   return function(innerParam){
    return outerParam + innerParam;
   }
  //parent function returns inner function that uses parameter from parent function
 }

//assigning function parent with argument 5 to variable
//or setting function call "parent(5)" to variable
//parent at 5 is set to functionVariable
let functionVariable = parent(5);
console.log(functionVariable(10)); //prints => 15
//same as saying "parent(5)(10)" //prints => 15
//below is just another way to understand what is happening
//basically an entire function call is being called at another argument
//outerParam = 5; innerParam = 10
console.log(parent(5)(10)); //prints => 15

//outer function can't access variables in inner function 
 function mom(outer) {
   return function(toy){
    let howMany = outer + toy;
   }
  return howMany;
 }

let funVa = mom(5);
//will print undefined since parent scope can't access child scope variable
console.log(funVa(" cars")); //prints => undefined

//however if we move "return howMany;" into the inner scope ...
        //changing variable names also to avoid errors in console
 function mommy(outr) {
   return function(toys){
    let howManytoys = outr + toys;
    return howManytoys;
   }
 }
//then everything works perfectly
let funVar = mommy(5);
console.log(funVar(" cars")); //prints => 5 cars