const fs = require('fs');
const { Z_FIXED } = require('zlib');

// 3
// rename(..., callback(error, data)) 비동기 실행
// try { renameSync(....) } catch (e) {} 이건 동기적으로 처리되기 때문에 사용하지 않는 것이 좋다.
// promises.rename().then().catch(0) 비동기 실행

try {
	fs.renameSync('./file.txt', './file-new.txt');
} catch (error) {
	console.error(error);
}

fs.rename('./file-new.txt', './file.txt', (error) => {
	console.log(error);
});
console.log('hello');

fs.promises
	.rename('./text.txt', './text-new.txt') //
	.then(() => console.log('Done!'))
	.catch(console.error);
