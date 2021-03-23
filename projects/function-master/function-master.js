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
    
    var namesArray = []; //names we will look through...all array[i].name values
    var result = []; //for return... the nonFriends
    var person = null; //the input name's object...if input isnot given, then it is null
    
    //loop over input array
    for (var i = 0; i < array.length; i++){
        //if input name is any object (array value) 's name, then name is that person object
            //(the object that the name belongs to)
        if (array[i].name === name){
            person = array[i];
        } else{
            //otherwise, push the object's name into namesArray
            namesArray.push(array[i].name);
        }
    }
    //if input name is not given or nonexistent then just return the namesArray...bc all are not friends
    if (person === null){
        return namesArray;
    }
    //now loop over namesArray and if person is not at any index (not a friend), then push it into result array
    for (var i = 0; i < namesArray.length; i++){
        if (person.friends.indexOf(namesArray[i]) === -1){
            result.push(namesArray[i]);
        }
        
    }
    //return result array of names who are not friends!
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//takes object, key and value
//update object's key value with <value>
//if object key doesn't exist, then add it
object[key] = value;
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //takes object and array of strings
    //removes and properties in object if that key name is in array
    for (var i = 0; i < array.length; i++){
        if (object.hasOwnProperty(array[i])){
            delete object[array[i]];
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //takes array and return an array with all duplicates removed
    // var result = []; //for return 
    //push input array values into result array ...or spread op
    
    var result = [...new Set(array)];
    
    return result;
    
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