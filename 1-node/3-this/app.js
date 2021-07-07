// this 는 사용되는 문맥에 따라서 달라진다!

function hello() {
	console.log(this);
	console.log(this === global);
}

hello();

class A {
	constructor(num) {
		this.num = num;
	}

	memberFunction() {
		console.log('----- class -----');
		console.log(this);
		console.log(this === global);
	}
}

const a = new A(1);
a.memberFunction();

console.log('----- global scope -----');
console.log(this);
console.log(this === module.exports);
