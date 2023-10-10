const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.once('event', () => {
  console.log('Event was fired once!');
});

myEmitter.emit('event');  // 'Event was fired once!' will be displayed
myEmitter.emit('event');  // Nothing will be displayed since the listener was removed after the first invocation




const myEmitter2 = new MyEmitter();

myEmitter2.addListener('event2', () => {
  console.log('Event2 was fired!');
});

myEmitter2.emit('event2');  // 'Event2 was fired!' will be displayed
myEmitter2.emit('event2');  // 'Event2 was fired!' will be displayed again




const myEmitter3 = new MyEmitter();

function eventHandler() {
  console.log('Event3 was fired!');
}

myEmitter3.on('event3', eventHandler); // adding the listener
myEmitter3.emit('event3');  // 'Event3 was fired!' will be displayed
myEmitter3.removeListener('event3', eventHandler); // removing the listener
myEmitter3.emit('event3');  // Nothing will be displayed since the listener was removed
