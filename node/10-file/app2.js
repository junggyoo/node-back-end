const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf8')
	.then((data) => console.log(data))
	.catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'I love you!! ') //
	.catch(console.error);

fs.appendFile('./file.txt', 'Hello Dream!!') //
	.then(() => {
		// copy
		fs.copyFile('./file.txt', './file2.txt') //
			.catch(console.error);
	})
	.catch(console.error);

// folder
fs.mkdir('sub-folder') //
	.catch(console.error);

fs.readdir('../') //
	.then(console.log)
	.catch(console.error);

// 위처럼 promise를 사용한다면 catch를 이용해서 error를 잡아주는 것이 중요하다.
