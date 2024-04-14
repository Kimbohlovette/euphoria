import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './models/models';
import userRoutes from './routes/user_routes';
import categoryRoutes from './routes/category_routes';
import productRoutes from './routes/product_routes';
import shoppingCartRoutes from './routes/shoppingcart_routes';
dotenv.config();
const LISTENPORT = process.env.LISTENPORT ?? "8083";
// Initialize express server
const app = express();

// Establish connection to database server

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
		console.error('Unable to connect to the database');
		console.error(error);
	});
sequelize.sync();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/ping', (req, res) => {
	res.send('pong!');
});

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/shoppingcart', shoppingCartRoutes);
