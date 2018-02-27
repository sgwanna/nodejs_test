var EventEmitter = require('events');

var custom_object = new EventEmitter();

custom_object.on('call', () => {
  console.log('called events!');
});

custom_object.emit('call');

var sec = 1;
exports.timer = new EventEmitter();

setInterval(function() {
  exports.timer.emit('tick');
}, sec*1000);
