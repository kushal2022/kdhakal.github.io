//using class
/* class solution uses _ convention to indicate the _contacts property should be considered private
 */
class MakeContacts {
    constructor() {
        this._contacts = [];
    }

    keepContacts(name) {
        let aContact = this._contacts.find(contact => (contact.name === name) ? true : false);
        if (aContact !== undefined) {
            return aContact.phone;
        } else {
            this._contacts.push({
                name: name,
                phone: prompt("Please enter phone number: ")
            });
        }
    }

}
// test it
const myContacts = new MakeContacts();
myContacts.keepContacts("Bill");
myContacts.keepContacts("Bob");
console.log("should find number for bill: " + myContacts.keepContacts("Bill"));
console.log("can access the _contacts in class:  ");
console.log(myContacts._contacts);


//using revealing module

/* revealing module pattern (module factory variant) */
function makeContacts() {

    let contacts = [];

    function keepContacts(name) {
        let aContact = contacts.find(contact => (contact.name === name) ? true : false);
        if (aContact !== undefined) {
            return aContact.phone;
        } else {
            contacts.push({
                name: name,
                phone: prompt("Please enter phone number: ")
            });
        }
    }
    return {
        keepContacts:  keepContacts
    }
}
// test it
const myContacts = makeContacts();
myContacts.keepContacts("Bill");
myContacts.keepContacts("Bob");
console.log("should find number for bill: " + myContacts.keepContacts("Bill"));

/* The class in js is similar to java. I am comfortable with class and inheritance. But there are many ways to do this like using revealing module, constructor function that returns 'this' with keepContracts method.
contacts is a private local variable of the constructor function */
function MakeContacts() {

    let contacts = [];
    this.keepContacts = keepContacts;

    function keepContacts(name) {
        let aContact = contacts.find(contact => (contact.name === name) ? true : false);
        if (aContact !== undefined) {
            return aContact.phone;
        } else {
            contacts.push({
                name: name,
                phone: prompt("Please enter phone number: ")
            });
        }
    }



}
// test it
const myContacts = new MakeContacts();
myContacts.keepContacts("Bill");
myContacts.keepContacts("Bob");
console.log("should find number for bill: " + myContacts.keepContacts("Bill"));

//closure solution
/* closure that returns function to manage contacts */
function keepContacts() {

    let contacts = [];

    return function (name) {
        let aContact = contacts.find(contact => (contact.name === name) ? true : false);
        if (aContact !== undefined) {
            return aContact.phone;
        } else {
            contacts.push({
                name: name,
                phone: prompt("Please enter phone number: ")
            });
        }
    }



}
// test it
const myContacts =  keepContacts();
myContacts("Bill");
myContacts("Bob");
console.log("should find number for bill: " + myContacts("Bill"));

