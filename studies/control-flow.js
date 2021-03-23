/** CONTROL FLOW:
 * 0: The order in which the computer executes statements in a script is called control
 * flow. Code is read from the first to the last line, unless computer runs across 
 * structures that change the control flow. Control flow is changed by conditionals. 
 * 
 * 1: Conditionals change control flow because the code that is run depends on the 
 * boolean value (true or false) of the conditional. Conditonals consist of "if", 
 * "else if", and "else" statements.
 * 
 * 2. Switch statements are another kind of conditional. Switch statements perform 
 * different actions depending on the conditions, and they use a "break" statement. If
 * none of the conditions in the switch statement are met, then it "defaults" and the 
 * code run is specified by the "default" keyword.
 */
 
 // 1. if, else if, else statements //
 // syntax: 
        // if (conditon) {
            //block of code to be run if condition is true//
            //if not true then goes to else if statement
        // } else if (other condition) {
            //block of code to be executed if this condition is true//
        // } else {
            //block of code to be run if no conditions are true
        // }
        
 //if statements can have as many else-if statements as needed
 //if statements do not need else statements
 //we can have an if-else statement with no else-if in between
 let shapeArray = [];
 let shape = "circle";
 if (shape === "square") {
    shapeArray.push(shape);
 } else if (shape === "triangle"){
     shapeArray.push(shape);
 } else if (shape === "circle") {
     shapeArray.push(shape);
 } else {
     shape = "shape is a mystery";
 }
 console.log(shapeArray); //prints => ["circle"]
 //if shape = "oval", then ["shape is a mystery"] would be printed

 /*once the condition reaches a true, the conditoinal chain stops executing, even if 
 there is another true value after the first truth*/
 var color = "black";

 if (color === "red"){
   console.log("no");
 } else if (color !== "red"){
   console.log("hmm");
 } else if (color === "black"){
   console.log("yes");
 }
    //prints => "hmm"
    
 
 // 2. switch statements //
 //code is executed depending on different cases in the switch statement 
 /**switch statements are used to choose a specific block of code to be executed, 
  * instead of using a bunch of if/else if statements.
  * 
  * The conditional/expression in the switch statement is compared to the rest of its 
  * case values. If a case value matches the switch expression, then the code block 
  * there is run. Unlike if/else-if/else statements, switch statements don't 
  * automatically stop when a true value is reached; instead switch statements 
  * (optionally) use a break statement to stop the code from running any further. If 
  * no case values match the expression, then we can (optionally) use a default 
  * statement. A default statement is like the "else" statement in if/else-if/else 
  * conditionals.
  */ 
  
  /**syntax:

            switch(expression) {
          case a:
            //code block//
            break;
          case b:
            //code block//
            break;
          default:
            //default code block//
        }
   */
   
  let say;
   
   let person = {
       name: "sam",
       favColor: "green"
   }
   
   let hasTaste = person.favColor;
   
   switch(hasTaste) {
  case "purple":
    say = "nope";
    break;
  case "orange":
    say = "not quite";
    break;
  case "green":
    say = "yep"; 
    break; 
  default:
   say = "maybe next lifetime";
}
 
 console.log(say); //prints => yep