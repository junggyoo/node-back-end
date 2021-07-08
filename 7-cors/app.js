import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

const corsOption = {
	origin: ['http://127.0.0.1:5500'],
	optionsSuccessStatus: 200,
	credentials: true,
};

// req.body를 받아오려면 json() 미들웨어를 사용해준다.
app.use(express.json());
// Cookie 정보를 볼 수 있다.
app.use(cookieParser());
// 클라이언트 요청 관련된 정보를 로그로 출력해준다.
// 어떤 포맷으로 남길건지 지정해줄 수 있다. 기본적으로 'combined' 으로 설정되어 있다.
// 서버에 어떤 요청이 왔는지 모니터링할 때 유용하다.
app.use(morgan('combined'));
app.use(cors(corsOption));
// helmet은 공통적으로 보안해 필요한 headers를 설정하고 추가해준다.
app.use(helmet());

app.get('/', (req, res) => {
	console.log(req.body);
	console.log(req.cookies);
	res.send('Welcome!');
});

app.listen(8080);
