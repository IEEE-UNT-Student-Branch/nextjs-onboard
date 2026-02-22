//import path = require('path');
// import * as path from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
import type { Application, Request, Response } from 'express';
import express from 'express';
import cookieParser from 'cookie-parser';

// globalThis.appDir = __dirname;
// globalThis.projectDir = path.join(__dirname, '/..');
// const FILE_EXTENSION = process.env['NODE_ENV'] == 'production' ? '.js' : '.ts';

const server: Application = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.listen(3001, () => {
	console.log(`Server listening on http://localhost:${3001}`);
});

/*/ Debug APIs /*/
server.get('/api/debug', (_: Request, res: Response) => {
	res.json({ message: 'Hello World!' });
});
server.get('/api/debug/cookies', (req: Request, res: Response) => {
	req.cookies['test_cookie'] = 'This is a test cookie';
	res.json({ cookies: req.cookies });
});
server.put('/api/add', (req: Request, res: Response) => {
	const payload = req.body;
	if (payload['a'] && payload['b']) {
		res.json({
			message: `${payload['a']} + ${payload['b']} = ${parseInt(payload['a']) + parseInt(payload['b'])}`,
		});
	} else {
		res.json({
			message: "Payload must have an 'a' and 'b' component",
		});
	}
});
