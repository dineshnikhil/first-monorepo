import express from 'express';
import body_parser from 'body-parser';
import connect from './config/database';
import ApiRoutes from './routes/index';
import cors from 'cors';

const port = 3000;

const createAndRunServer = (): void => {
	const app = express();

	app.use(cors());
	app.use(body_parser.json());
	app.use(body_parser.urlencoded({ extended: true }));
	app.use('/api', ApiRoutes);

	app.listen(port, async () => {
		console.log('server is running on the port: ', port);
		connect();
	});
};

createAndRunServer();
