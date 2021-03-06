// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
     if (Array.isArray(value)){
        return "array";
    } else if (value === undefined){
        return "undefined";
    } else if (value === null){
        return "null";
    } else if (value instanceof Date){
        return "date";
    } else {
        return typeof value;
    }
    
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    //if array is not an array, return []
    //if number is not given or not  anumber, return the first element in array (array[0])
    //else, return the first <number> of items in array ... if num > 1, return values in an array...  push?
    
    //if array isn't an array
    if (!Array.isArray(array) || number <= 0){
        return []; //also return this if number is negative 
    }
    //if number isn't a number or number is not given
    if (!number){
        return array[0];
    }
    
    //if array.length < number, then return array. else, number = array.lengt
    //if number > array.length, then return the whole array..slice(0, number) <--extract from index 0 for <number> indexes

    return array.slice(0, number);
    
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    //if array isn't an array or number isn't positive, return []
    if(!Array.isArray(array) || number <= 0){
        return [];
    }
    //if not number or number is not a number, return last element in array
    if (!number){
        return array[array.length-1];
    }
    
    //if number > array.length, return the entire array
    if (number > array.length){
        return array;
    }
    
    //otherwise...return the last number of items in array
    //array.slice(number-1) 

   return array.slice(number-1); //extracts array starting at the index that is 1 less than number
    
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    //return the index of array that is the first occurence of value
        //for loop... if array[i] = value, return i ?
    //if value is not in array, return -1
        //if (!array.includes(value)){return -1}
    
    //for loop instead of array.includes bc the index number needs to be returned if value is in array
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }    
    
    if (!array.includes(value)){
        return -1;
    }
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //if array contains value, return true. else, return false
    //use ternary opertator
    //if no value is given....?
    
    // could just use "return array.includes(value)" but need to use ternary operator
    
    return array.includes(value) ? true : false;
    
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    //if collection is an array, call function once for each element w arguments (element, index, collection)
        //if array.isarray(collection), for-loop --> function(collection[i], i, collection)
    //if collection is an object, call function once for each prop w args (prop's val, its key, collection)
        //if ...is object..., for key in collection --> function(collection[key], key, collection)
    //function is called at each x, y, z but returns nothing
    
    //if collection is array (not object)
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else {
        //if collection is object (since collection is either an array or object)
        for (var key in collection){
            func(collection[key], key, collection);
        }
        
    }
    
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    //return a new array of array but without any duplicates
    //use _.indexOf() ... 
        //_.indexOf takes an array and a value, returns index number if value in array.. else, returns -1
        
    //make new array. for-loop over original and push array[i] into new array
        //then if _.indexOf(newArray, array[i]=== -1) , push array[i] into newArray. return newArray
        
    var newArray = []; //for return
    
    //looping over original array
    for (var i = 0; i < array.length; i++){
        //if array element is not included in newArray, push it into newArray
            //will push 1 element at a time so when a dupe is reached, it won't be added to newArray
        if (_.indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }
    //return the new array which is array with duplicates removed
        return newArray;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    //call function for each element in array that passes args (element, index, array)
    //return new array of passing elements / elements that returned true
    //_.each if i wanttt ... not sure how thoooo
    
    var filteredArray = []; //for return 
    for (var i = 0; i < array.length; i++){
        //if func at each element, index, array is true, then push that element into new/filtered array
        if (func(array[i], i, array)){
            filteredArray.push(array[i]);
        }
    }
   
    return filteredArray;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){
    //call func at each element in array passing args element, index, array
    //return new array of elements that func(e, i, a) didnt pass / returned false
    //same as filter but push into new array if false and return that new array
    
    var rejects = []; //for return 
    for (var i = 0; i < array.length; i++){
        //if func at each element, index, array is false, then push that element into rejects array
        if (func(array[i], i, array)===false){
            rejects.push(array[i]);
        }
    }
   
    return rejects;
    
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    //filter and reject combined into 1 array consisting of 2 arrays: filtered(passed) and rejected(failed) array elements
    var result = []; //for return
    var passing = []; //for passing values
    var failing = []; //for failing values
    
    //loop over input array
    for (var i = 0; i < array.length; i++){
        //if function call at every array value is true,
        if (func(array[i], i, array)){
            //then put it in passing array
            passing.push(array[i]);
        } else {
            //otherwise (if it is false), then push it into failing array
            failing.push(array[i]);
        }
    }
    //push both passing and failing arrays into result array and return result array
    result.push(passing, failing);
    return result;
    
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    
    var result = []; //for return
    
    //use _.each to loop through collection
    _.each(collection, function(val, ik, col){
        //call <func> at each value in the collection and push this into result array
        result.push(func(val, ik, col));
    })
    //return the result array
    return result;
    
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){
    //array is array of objects
    //return an array containing the value of prop for every element (object/index) in <array>
    //use _.map

    //map out array[i][prop] 
    var result = []; //for return
    
    //using map to access/affect each value(each object/index/element) in array
        //e, i, a    is   element, index, array    is    array[i], i, array   <--- all the sameeeee
    _.map(array, function(e, i, a){
        //then pushing each element/object's property into result array
            result.push(e[prop]);
    })
    //return array of each object's properties 
    return result;
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
* 
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
 //takes collection (array or object) and returns true if all elements pass. otherwise false
 
 //if func is undefined or not given, then func just returns the input whose values will then be tested
    //based on their truthy/falsy values 
 if (func === undefined){
     func = _.identity;
 } 
 
 //basically using the guts of the EACH function and saying if the test function fails (returns false) 
    //at any element, return false. otherwise (if all pass/are true), return true
 if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            //if any value is false, return false. otherwise return true
            if (func(collection[i], i, collection) === false){
                return false;
            } 
        }
    } else {
        for (var key in collection){
            if (func(collection[key], key, collection) === false){
                return false;
            } 
        }
 
    } 
    //return true if no iterations return false
    return true;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, funk){
//opposite of _.every function    

    if (funk === undefined){
     funk = _.identity;
    } 
 
 //if the test function fails (returns false) at any element, return false
    //otherwise (if all pass/are true), return true
 if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            //if any value is true, return false. otherwise return false
            if (funk(collection[i], i, collection) === true){
                return true;
            } 
        }
    } else {
        for (var key in collection){
            if (funk(collection[key], key, collection) === true){
                return true;
            } 
        }
 
    } 
    //return false if no iterations return true
    return false;
    
    
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, funky, seed){
    //calls funky for every element in array
    //uses return value of funky as the previous result
    
    //if no seed, seed = array[0] ... or array[i] ?

    //funky takes 4 parameters:
        // <seed> OR last value returned from previous call OR array[0] ... "seed"
        // <currentValue> current element in the array ... array[i] ... "e"
        // <i> current index ..."i"
        // <array> the whole array "a"

    //seed is given or it's the first value or its result of prev call

//using each to do something to each element
   _.each(array, function (e, i, a){
       //if seed is not given, then seed is first element
       if (seed === undefined){
           seed = array[0];
       } else {
           //otherwise, seed is the result of the (previous) function call 
           seed = funky(seed, e, i, a);   
       }
   })
   //returning the seed bc that is what is being added to and redefined on each iteration of reduce
  return seed;
}
    


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obja, ...objz){
    //"..." rest param for infinite number of possible parameters
    //Object.assign to copy last object's props to the first object
        //should copy props to first object from following objects in order they are inputted
    return Object.assign(obja, ...objz);
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
