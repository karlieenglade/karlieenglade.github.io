//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//take object and return its values in an array
return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //take object and return its keys in a string each separated with a space
    return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //return objects STRING values as a string each separated by a space...so if not string, then leave it out
    var objectValues = Object.values(object); //array of all objects values
    //need to extract only the values/indexes that are strings
    //for loop then if typeof x[i] === "string"... result.push(x[i]) and return result.join(" ")
    var result = []; //for return
    for (var i = 0; i < objectValues.length; i++){
        if (typeof objectValues[i] === "string"){
            result.push(objectValues[i]);
        }
    }
    // return STRING values as string (from result array)
return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // return 'array' if its an array and 'object' if its an object"
    
    if (Array.isArray(collection)){
        return "array";
    } else {
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // take string of one word and return the word with its first letter capitalized
    //returning first letter capitalized plus the original string without first value ("s")
    return string[0].toUpperCase() + string.slice(1);  
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //take a string of words and return a string with all the words capitalized
    //split string into array. for loop and  x[i][0].toUpperCase() then return that joined back to string
    var stringArray = string.split(" "); //string as array with word at each index
    //loop over this array and x[i][0].toUpperCase() + stringArray[i].substring(1) ... reassign each index
    for (var i = 0; i < stringArray.length; i++){
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
    }
return stringArray.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // take an object with a name property and return 'Welcome <Name>!'"
    //capitalize the name if not already 
    //return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!"
    return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //take object with name and species and return '<Name> is a <Species>'
    //capitalize name and species for some reason....
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //takes object, if object has noises array, return them as a string separated by a space
    //if no noises, return 'there are no noises'"
    //if object.noises.length > 0 , return object.noises.join(" ")
    //if noises is a property...
    if (object.hasOwnProperty("noises")){
        // and if noises is not an empty array
        if (object.noises.length > 0){
            return object.noises.join(" ");
            //if array is empty
        } else if (object.noises.length === 0){
            return "there are no noises";
        }
        //if object doesn't even have noises property... 
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // takes string of words and a word, returns true if word is in string, otherwise return false
    //toLowerCase() both string and word ???? guess not lol
    if (string.includes(word)){
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // takes name and object, adds name to the object's friends array, then returns the object
    object.friends.push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // takes name and object, returns true if name is in object's friends array, otherwise false
    //first check that object has friends property
    if (object.hasOwnProperty("friends")){
        //includes method returns a boolean
        return object.friends.includes(name);
    } else {
        //if object doesn't even have a friends property
        return false;
    }
   

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //takes a name and array of objects, returns array of names that name is not friends with
    
    //for-loop...if array[i].name===name, ...
    //also check that array[i] has friends property first
    //filter?? 
    
    //maybe if array[i].name===name, push array[i].friends into newArray and 
        // then loop array (or loop friends array?) and if newArray[k] !== array[i].name (make variable before), 
            // then push newArray[k] into thirdArray ???? and return thirdArray ??
            //also maybe use for-of instead ??
            
        //first of all...no fucking way i need all this mess... loops r getting out of control bro
        //probably should use FOR-OF loops... ??? 
    
    var person;     
    var notFriendsArray =[];
    for (var i = 0; i < array.length; i++){
        person = array[i]; 
        if (person.hasOwnProperty("friends") && person.friends.length > 0){
            if (person.name === name){
                // var notFriends = array[i].friends.filter(person => ! ... ) //ehhhhh
            //then = current 
                var friendsArray = person.friends; //array of the persons friends ...basically a copy
            }
        }    
    }    
    //now looping the friends array from above
    for (var k = 0; k < friendsArray.length; k++){
        //if name (each index) is not a name person in array (array[i].name) , then push namesArray[k] into result array
        //if namesArray[k] !== eachObject.name 
        if (friendsArray[k] !== person.name){
            notFriendsArray.push(friendsArray[k]);
        }
    }
return notFriendsArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}