import cors from 'cors';
import express from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Collect database credentials
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD ?? 'euphoria';
const DBNAME = process.env.DBNAME ?? 'euphoria';
const DBHOST = process.env.DBHOST ?? 'localhost';
const LISTENPORT = process.env.LISTENPORT ?? '8000';

// database connection path
const DB_PATH = `postgres://${DBUSER}:${DBPASSWORD}@${DBHOST}/${DBNAME}`;

// Initialize express server
const app = express();

// Establish connection to database server
const sequelize = new Sequelize(DB_PATH);
sequelize
	.authenticate()
	.then(() => {
		console.log(
			`{message: connection established, port: ${LISTENPORT}, timestamp: ${Date.now()}}`
		);
		app.listen(LISTENPORT, () =>
			console.log(
				`{message: Server running, port: ${LISTENPORT}, timestamp: ${Date.now()}}`
			)
		);
	})
	.catch((error) => {
		console.error('Unable to connect to the database:', DB_PATH);
		console.error(error);
	});

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/ping', (req, res) => {
	res.send('pong!');
});
