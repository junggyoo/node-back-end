const EventEmitter = require('events');
const { emit } = require('process');

class Logger extends EventEmitter {
	log(callback) {
		this.emit('log', 'started...');
		callback();
		this.emit('log', 'ended!');
	}
}

module.exports.Logger = Logger;
