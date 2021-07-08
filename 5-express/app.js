import express from 'express';
const app = express();

// express의 미들웨어는 아래처럼 handler를 여러개 등록을 할 수가 있는데
// 중요한 점은 res나 next를 사용하여 미들웨어 흐름이 끊기지 않도록 해줘야한다.
app.get(
	'/',
	(req, res, next) => {
		console.log('first');
		// 아래처럼 한 콜백에서 send가 두 번 있다면 return 을 이용하여 함수를 끝내줘야 한다.
		// 그렇지 않은 경우 한 콜백 안에서 send를 두 번 요청하면서 에러가 발생하게 된다.
		if (true) {
			return res.send('Hello');
		}
		res.send('Eric');
	},

	(req, res, next) => {
		console.log('first-2');
		next();
	},
);

app.get('/', (req, res, next) => {
	console.log('second');
});

// 위에서 해당 경로에 대해 아무런 처리가 없다면 마지막이나 에러 핸들링 전에
// 처리할 수 없는 경로에 대해 use를 사용해서 친절하게 처리해준다.
app.use((req, res, next) => {
	res.status(404).send('Not available! @_@');
});

// 항상 어플리케이션 마지막에는 에러 처리하는 것을 다뤄줘야 한다.
// 에러 처리를 해주지 않으면 에러가 사용자에게 그대로 노출된다.
// use를 사용하여 어떤 path, 어떤 method인지 상관없이 에러 핸들러를 등록해준다.

// console.error를 이용해서 내부적으로 에러를 출력하고
// 클라이언트에게 해당 에러에 대한 status 와 내용을 전달한다.
app.use((error, req, res, next) => {
	console.error(error);
	res.status(500).send('Sorry, try later!');
});

// app.get('/sky/:id', (req, res, next) => {
// 	console.log(reqeust.headers);
// 	console.log(reqeust.path);
// 	console.log(req.params);
// 	console.log(req.params.id);
// 	console.log(req.query);
// 	console.log(req.query.keyword);

// 	res.setHeader('token', 'valuasdfadfasfafdae');
// 	res.status(201).send('created!');
// });

app.listen(8080);
