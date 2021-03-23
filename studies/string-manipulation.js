/**
 * STRING MANIPULATION:
 * 0. Although strings cannot be changed, they can be manipulated and reassigned. 
 * Strings can be manipulated using built-in functions or with operators.
 * 
 * 1. To manipulate a string, we use string methods which are functions that act on 
 * strings in specific ways. 
 * 
 * 2. Strings can also be manipulated with operators.
 */
 
 // 1. manipulating strings using methods //
 //declaring and assigning a string
 let myString = "my favorite color is green";
 console.log(myString); // prints => "my favorite color is green"
 
 //finding the length of a string 
 console.log(myString.length); //prints => 26
 
 //finding what character is at an index
 console.log(myString[0]); //prints => m
  
 //finding index of the first instance of input
 console.log(myString.indexOf("is")); //prints => 18
    //can have second parameter as starting point 
 console.log(myString.indexOf("i", 10)); //skips first "i", prints => 18    
  
 //finding index of the last instance of input
 console.log(myString.lastIndexOf("e")); //prints => 24
  
 //finding what character is at an index
 console.log(myString.charAt(3)); //prints => f
  
 //replacing part of string only at first instance of input
 console.log(myString.replace("green", "black")); //prints => my favorite color is black
 console.log(myString.replace("e", "E")); /*only replaces first e, prints => my favoritE
                                                                          color is green 
 */
  
 //spilt string into array of strings
    //string.split(" ") <= separates string of strings by commas by each string
 console.log(myString.split(" ")); //prints => [ 'my', 'favorite', 'color', 'is', 'green' ]
    //string.split("") <= separates string by each index
 console.log(myString.split("")); /*prints => ['m', 'y', ' ', 'f', 'a', 'v',
                                          'o', 'r', 'i', 't', 'e', ' ',
                                          'c', 'o', 'l', 'o', 'r', ' ',
                                          'i', 's', ' ', 'g', 'r', 'e',
                                          'e', 'n']
    */                                      
    //can also split by a character
 console.log(myString.split("o")); //prints => [ 'my fav', 'rite c', 'l', 'r is green' ]

 //capitalize all characters in a string
 console.log(myString.toUpperCase()); //prints => MY FAVORITE COLOR IS GREEN

 //make all characters in string lowercase
 let myOtherString = "My FavORTIE coLOR iS gReEN";
 console.log(myOtherString.toLowerCase()); //prints => my favorite color is green

 //3 ways to extract from string
    //extract parts of a string and return them in a new string
        // syntax: string.slice(startIndex, endIndex)
     console.log(myString.slice(12, 26)); //prints => color is green
    //can also take negative index which counts backwards from end of string 
    console.log(myString.slice(-5)); //prints => green
    
    //extract from string starting and ending at an index
        //string.substr(startIndex, lengthToExtract)
    console.log(myString.substr(3, 8)); //prints => favorite
        //if only one parameter, everything after that index is extracted
    console.log(myString.substr(3)); //prints => favorite color is green
    
    //substring method is similar to slice method, but can't take negative index
        //string.substring(startIndex, endIndex)
    console.log(myString.substring(5, 10)); //prints => vorit
        
 /*search string for input string. similar to indexOf method, but can't take second 
 parameter as starting point*/
 console.log(myString.search("color")); //prints => 12

 //2. manipulating strings with operators //
 //add strings together
 let name = "my name is sam";
 let color = "my favorite color is black";
 console.log(name.concat(" " + "and" + " " + color)); /*prints => my name is sam and my
 favorite color is black*/

 //can also reassign string values to new value of concatenated strings
 let cat = "my name is lenore";
 let meow = " and i am a cat";
 let both = cat + meow;
 console.log(both); //prints => my name is lenore and i am a cat

 //add strings without using variables
 console.log("my name" + " " + "is " + "sam"); //prints => my name is sam