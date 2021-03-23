/** LOOPS:
 * 0. To iterate over data, we use loops. A loop executes a block of code as many times
 * as needed. It is useful to use loops on collections of data to access each element 
 * or value in a collection in order to check or change its elements or values.
 * 
 * 1. We can loop over arrays using a "for" loop which loops through an array's index.
 * "For" loops have a start, stop, and update.
 *  syntax: for(start; stop; update) {
 *  //block of code to be executed at indexes between start and stop//
 *  };
 * 
 * 2. We can loop over objects using a "for-in" loop which loops through an object's 
 * properties (key/value) pairs. A "for-in" loop is made of the keyword "for" followed
 * by parenthesis containing a variable representing object's properties declared by 
 * keyword "var" or "let", then the keyword "in" followed by the object name.
 *  syntax: for(let propertyVar in objectName) {
 *  //block of code to be executed at each propertyVar in objectName//
 *  };
 *
 * 3. We can use "while" loops that execute a block of code only while a condition is 
 * true. Like a "for" loop, it has a start, stop, and update.
 *  syntax: while(condition) { // <= condition is start
     //block of code to be executed while condition is true//; // <= stop
     update; <= update goes here
    };
 */
 
 // 1. use "for" loop to print value a certain number of times. 
 /*When looping forwards over an arary, use 0 as starting point and 
  "i < arrayName.length" for the stopping point if we want to iterate over every value 
  in the array, or make stopping point whatever we want to stop*/
 //print counting up to a number
 for (let i = 0; i < 5; i++) {
	console.log(i); 
 } /*prints => 0
               1
               2
               3
               5
   */         
//print counting down from a number
for (let i = 5; i >= 0; i--) {
	console.log(i); 
 } /*prints => 5
               4
               3
               2 
               1 
               0  
   */         
 
 //to print a word a number of times
 //start at 0, stop at <5, update by 1 index each time 
 for (let i = 0; i < 5; i++) {
	console.log("sam"); 
 } /*prints => sam 
               sam 
               sam
               sam
               sam
   */             
 
 //looping backwards over array
 //start is "let i = array.length -1" to start at the last index
 //stop is "i >= 0" to loop backwards until reaching first index
 //update is "i--" since we are looping from end to beginning 
 //use "for" loop to print array values in reverse
 let animals = ["dog", "cat", "bird"];

 for (let i = animals.length - 1; i >= 0; i--){
     console.log(animals[i]);
 } /*prints => bird
               cat
               dog
   */             

 //use "for" loop to loop forward over an array and manipulate its values
 let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    /*start at 0 index, stop at array length to access all indexes, update by 1 index
    each time*/
 for(let i = 0; i < colors.length; i++) {
    console.log(colors[i].toUpperCase());
 } /*prints => RED
               ORANGE
               YELLOW
               GREEN
               BLUE
               PURPLE
   */

 //or use a "for" loop to loop forwards over an array to simply print its values
 var months = ["January", "Febuary", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];

 for (let i = 0; i < months.length; i++) {
	console.log(months[i]);
 } /*prints => January
               Febuary
               March
               April
               May
               June
               July
               August
               September
               October
               November
               December 
   */

 // 2. use "for-in" loop to access object properties (keys and values)
 let myObj = {
   name: "sam",
   age: 30, 
   city: "new orleans"
 };   

 for (let key in myObj) {
    //print object keys
   console.log(key); /*prints => name 
                                 age 
                                 city
                     */
   //print object key values
   console.log(myObj[key]); /*prints => 30 
                                        city 
                                        new orleans
                            */

}