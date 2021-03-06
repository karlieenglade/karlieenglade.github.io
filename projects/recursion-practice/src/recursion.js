// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  //once n = 0, return 1, so that it adds 1 
  if (n === 0){
    return 1;
    //else if n is negative, return null
  } else if (n < 0){
    return null;
  }
  
  //recursive case
  //return input n times functionction call at n-1
  //first n is one less than previous n (except at first call)
  return n * factorial(n-1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //base case
  //if array has only 1 value, return it
  if (array.length === 1){
    return array[0];
    //else if empty array, return 0
  } else if (array.length === 0){
    return 0;
  }
  
  //recursive case
  // want to add array[0] to function call at array without first value
  return array[0] + sum(array.slice(1));
  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //returns boolean
  //base case
  //keep subtracting by 2, if gets to 0, then even so return true. else if 1, return false
  if (n === 0){
    return true;
  } else if (n === 1){
    return false;
    //else if n is negative, then make it positive
  } else if (n < 0){
    return isEven(-n);  //  -(-4) = 4 
  }
  
  //recursive case
  //keep subtracting 2 until 0 or 1 is reached
  return isEven(n-2);

};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21 .... 1+2+3+4+5+6 = 21
var sumBelow = function(n) {
  
  //base case
  if (n === 0){
    return 0;
  } else if (n > 0){
    //recursive case if n is positive
    return n - 1 + sumBelow(n-1);
  } else if (n < 0){
    //recursive case if n is negative
    return n + 1 + sumBelow(n+1);
  }
  
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //return an array of numbers between (exclusive) x and y
  var result = []; //for return
  //base case
  //if there's no range btwn x and y (if they are the same or only 1 apart), return result
  if (x === y || y-x === 1 || x-y === 1){
    return result;
    //if x < y, add 1 to x and push it into result array
    //then add that to y inside of result array
  } else if (x < y){
    result.push(x+1);
    return result.concat(range(x+1, y)); //rc if x<y
    //is x is greater than y, do the same but subtract 1 from x (so that it counts down from x to y)
  } else if (x > y){
    result.push(x-1);
    return result.concat(range(x-1, y)); //rc if x>y
  }
  //return result array
  return result;

  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
  //base case
  if (exp === 0){
    return 1;
    //else if exp is negative
  } else if (exp < 0){
    //recursive case if exp is negative ...doing opposite if positive 
    return exponent(base, exp+1) / base; 
  }
    
  //recursive case if exp is positive
  return base * exponent(base, exp-1);
  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //returns boolean
  //result of 2 to any power is a power of 2
  // keep dividing by 2 (recursive case) 
  
  //base case
  //if n === 1 (after dividing by 2 as much as u cannn), return true
  if (n === 1){
    return true;
    //if doesn't divide by 2 down until it reaches 1, then n is not a power of two 
  } else if (n < 1){
    return false;
  }
  
  //recursive case
  //keep dividing the number by 2 
  return powerOfTwo(n/2);
  
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //returns the string reversed
  
  //base case
  //if the string.length is 0, then return empty string (will be full after done calling)
  if (string.length === 0){
    return "";
  } 
  
  //recursive case
  // // string[0] = string[string.length-1];
  return reverse(string.substr(1)) + string.charAt(0);
  
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //returns boolean
  //ignore spaces and capital letters.... if string[0] === " " , and .toLowerCase()
  
  
  //if character is a space, return string to the function with space removed 
  if (string[0] === " "){
    return palindrome(string.slice(1));
  }
  
  //base case and recursive case in one?????? 
  //if string is at least 2 characters and they are the same (think mirror)
    //or if more than 2 characters, if first and last are the same
  if (string.length > 1 && string[0].toLowerCase() === string[string.length-1].toLowerCase()){
    //extract the characters between the first and last and return that substring in the function
    palindrome(string.substring(1, string.length-1));
    //this will keep happening until the string length is either <= 1 or the first and last characters do not match
    //if whole string passes, then it is a palindrome, so return true
    return true;
    //and if either of those is true (if string.length <= 1 or first and last characters don't match),
    //then the string does not pass and is not a palindrome, so return false
  } else {
    return false;
  }
 
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
  // //base case
  // if (y === x){
  //   return 0;
  // }
  
  // //recursive case
  // //keep subtracting y from x until u can't...return the number that y cant be subtracted from
  //   //aka if (after recursion) y === x, return y ??
  //   return x - modulo(x-y, y);
  //oh wow wasted my time!
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

//if y is 1 then return x since anything multiplied by 1 is 1
//else return x plus function call at x, y-1
var multiply = function(x, y) {
  
  if (y === 1){
    return x;
  } else if (x === 0 || y === 0){
    return 0;
  } else if (y < 0) {
    return -x + multiply(x, y+1); 
  }
  
  return x + multiply(x, y-1); 
  
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
}; 

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case
  
  if (str1.length === 0 && str2.length === 0){
    return true;
  }
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  } 
  
  return false;
  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = []){
  //made default param arr = [] 
  //base case
  //once string is sliced away, we want to return the array (will be filled)
  if (str.length === 0){
    return arr;
  } 
  //otherwise if string has a length >= 1, then push first value into array
   arr.push(str[0]);
  
  //recursive case
  //return the string in the function with 1st value removed and also the array
  return createArray(str.slice(1), arr);
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var arr = [];
  //bc
  if (arr.length === array.length){
    return arr;
  }
  
  //rc
  return arr.concat(reverseArr(array.slice(1)),array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var array = [];
//if array.length !== length then add 
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
