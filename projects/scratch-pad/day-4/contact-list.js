// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

    return {
        id: id, 
        nameFirst: nameFirst, 
        nameLast: nameLast 
    };

} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //to hold contacts, array of objects
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
    //  2. addContact(contact): takes a contact object to be added to the contact-list.
        
        addContact: function(contact){
            //pushing a contact object into the contacts array
            return contacts.push(contact);
        },
        
     // 3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and returns the contact object 
     //    if found in the contacts-list, or, undefined if the fullName does not match any contacts in the list.
        
        //loop over contacts (array of objects)
        //if fullName is found, return that contact object. otherwise, return undefined
        //contacts[i] is each entire contact object, so to access the properties
        //if contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"] === fullName then return contacts[i]
        
        findContact: function(fullName){
            for (var i = 0; i < contacts.length; i++){
                if (fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]){
                    return contacts[i];
                }
            }       return undefined;
                
        },
        
     // 4. removeContact(contact): takes a contact object to be removed from the contact-list.
        
        removeContact: function(contact){
            //check if contacts includes given contact. if so, remove it. use splice. no return
            //loop over contacts array of objects
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i] === contact){
                    //splice. removes that contact and nothing else (i, 1)
                    contacts.splice(i, 1);
                }
            }
        },
        
     // 5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
     //  return a String formated with all the full-names of the separated with a line-break, like so:
     //     myContacts.printAllContactNames(); // => Max Gaudin
     //                                              John Fraboni
     //                                              Kaelyn Chresfield
    //       WARNING: To pass this test, the LAST full name should have NO new-line character added after it!

        printAllContactNames: function(){
            //variable to hold strings for return
            var names = "";
            //loop over contacts array
            for (var i = 0; i < contacts.length; i++){
                //if it's the last contact obj in contacts array, then name is equal to the fullname
                //checking for last contact obj first bc that one doesn't need a line break after it
                if (i === contacts.length-1){
                    //then add the contact's full name to names (to return later)
                    names += contacts[i].nameFirst + " " + contacts[i].nameLast;
                } else {
                    //for all other contact objects, add full name to names with line break after (""\n")
                    names += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
                }
            }
                return names;
        }


    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
