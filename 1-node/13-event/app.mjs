import EventEmitter from 'events';
const emitter = new EventEmitter();

const callback1 = (args) => {
	console.log('first callback - ', args);
};
emitter.on('eric', callback1);

emitter.on('eric', (args) => {
	console.log('second callback - ', args);
});

emitter.emit('eric', { message: 1 });
emitter.emit('eric', { message: 2 });
emitter.removeListener('eric', callback1);
emitter.emit('eric', { message: 3 });
