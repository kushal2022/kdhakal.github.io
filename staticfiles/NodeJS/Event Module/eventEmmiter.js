var event = require('events');
var util = require('util');
const events = require("events");

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, event.EventEmitter);

var kushal = new Person('kushal');
var laxmi = new Person('laxmi');
var dhakal = new Person('dhakal');

var people = [kushal, laxmi, dhakal];

people.forEach(function (person) {
   person.on('speak', function (msg) {
       console.log(person.name + ' said ' + msg);
   });
});
kushal.emit('speak', 'hey dudes');