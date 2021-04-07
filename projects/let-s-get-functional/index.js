// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-karlieenglade");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./karlieenglade.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //using _.filter which returns an array
    //filter takes array and tester function, returns boolean
        //filter out the males and return this array's length
    var malesArray = _.filter(array, function(customerObj){
        return customerObj.gender === "male";
    });
    
return malesArray.length;

};

var femaleCount = function(array){
    //use reduce. returning a number so need a seed
    return _.reduce((acc, cur) => {
        if (acc.gender === "female"){
            return acc += 1;
        }
    }, 0);
};

var oldestCustomer = function(array){
    //array of objects
    //returns oldest customer's name. 
    //if acc age > cur age then return the acc. otherwise return the cur .. set to variable "oldest"
        //"oldest" uses reduce to get the customer object of customer with the greatest age
   var oldest = array.reduce((acc, cur) => {acc.age > cur.age ? acc : cur});
   //then returning that oldest person's name
   return oldest.name;
}
;

var youngestCustomer = function(array){
//takes array. returns string
//youngest is set to the customer object with the lowest age
var youngest = array.reduce((acc, cur) => {acc.age < cur.age ? acc : cur});
//returning  youngest customer object's name
return youngest.name;
};

var averageBalance = function(array){
//takes array. returns number. no constraints should use reduce and 
//making array of all the customers' balances
//looping over each customer object and pushing their balance to balancesArray. removing non-numbers
var balancesArray = [];
for(var person of array){
    balancesArray.push(person.balance.replace(/[^0-9]/g, ""));
}
//using reduce on balancesArray to add them all together. will divide this by number of customers for end result
var balances = balancesArray.reduce((sum, num) => {return sum + num}, 0);
//returning that ^ divides by the array length bc the number of objects in array is the number of customers
return balances/array.length;

};

var firstLetterCount;
// takes array and a letter. returns number

var friendFirstLetterCount;
//takes array, customer, letter. returns number

var friendsCount;
//takes array and a name. returns number

var topThreeTags;
// takes array. returns array

var genderCount;
//takes array. returns object. use reduce

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
