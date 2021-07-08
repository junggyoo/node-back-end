import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import 'express-async-errors';

// promise에서 에러처리 설정을 안해놨을 때
// 'express-async-errors' 를 사용하면 promise를 사용해도 use(error)에서 잡을 수가 있다.
// 단 주의할 점은 비동기 경우 promise를 리턴해주거나 async await를 명시해주어야 한다.

const app = express();

app.get('/file', (req, res) => {
	fs.readFile('/file1.txt', (err, data) => {
		if (err) {
			res.sendStatus(404);
		}
	});
});

app.get('/file1', (req, res) => {
	try {
		const data = fs.readFileSync('/file1.txt');
		res.send(data);
	} catch (error) {
		res.sendStatus(404);
	}
});

app.get('/file2', async (req, res) => {
	return fsAsync
		.readFile('file2.txt') //
		.then((data) => res.send(data));
});

app.get('/file3', async (req, res) => {
	const data = await fsAsync('/file3.txt');
	res.send(data);
});

app.use((error, req, res, next) => {
	console.error(error);
	res.status(500).json({ messgae: 'Something went wrong' });
});

app.listen(8080);
