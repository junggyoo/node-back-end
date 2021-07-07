console.log('code1');
setTimeout(() => {
	console.log('setTimeout!');
});

console.log('code2');
setImmediate(() => {
	console.log('setImmediate!');
});

console.log('code3');
process.nextTick(() => {
	console.log('nextTick!');
});
