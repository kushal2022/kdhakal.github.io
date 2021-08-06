var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('some event', function(msg) {
   console.log(msg);
});

myEmitter.emit('some event', 'The event was emitted.');

var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter)