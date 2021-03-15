/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Implement a function declaration called search that:

function search(animalsArr, animalName){
    //searches animalArr for animalName, returns animal's object if animal with animalName exists. else, return null
    //so animalsArr is array of objects
    //for loop... if animalsArr[i].name === animalName return animalsArr[i]
    for (var i = 0; i < animalsArr.length; i++){
        if (animalsArr[i].name === animalName){
            return animalsArr[i];
        }
    } return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    //animals is array of objects, name is string/name to search array for, replacement is object
    //if name is found in array, replace its object with replacement. if not, do nothing...
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            //could splice ... animals[i], 1, replacement ?
            animals[i] = replacement;
        }
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    //animals is array of objects, name is string of animal name to search array for
    //if animal with name exists, remove it ...splice
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            //splice...remove the animal object, 1 bc only removing 1 item
            animals.splice(animals[i], 1);
        }
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Write a function declaration called add with a signature of add(animals, animal) { //... } that:
function add(animals, animal){
    //animals is array of objects
    //animal is object of new animal to be added to animals array
    //check animal object has name prop w a length > 0 ..same for species prop
    //check that animal has unique name aka no other animal has its name
    //if all ^^ pass, add animal to animals array... animals.push(animal) .. 
    //use break to stop loop 
    
    if (animal.name.length > 0 && animal.species.length > 0){
        for (var i = 0; i < animals.length; i++){
            if (animals[i].name !== animal.name){
                animals.push(animal);
            }
            break;
        }
    }
    
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
