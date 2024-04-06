import { DataTypes, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Collect database credentials
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD ?? 'euphoria';
const DBNAME = process.env.DBNAME ?? 'euphoria';
const DBHOST = process.env.DBHOST ?? 'localhost';

// database connection path
const DB_PATH = `postgres://${DBUSER}:${DBPASSWORD}@${DBHOST}/${DBNAME}`;
const sequelize = new Sequelize(DB_PATH);

// Define database models
export const User = sequelize.define(
	'User',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV1,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: 'user',
		},
	},
	{
		tableName: 'users',
		timestamps: true,
	}
);

export const Product = sequelize.define(
	'Product',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.INTEGER,
		},
		stock: {
			type: DataTypes.INTEGER,
		},
		category: {
			type: DataTypes.UUID,
		},
		images: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
		tags: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
	},
	{
		tableName: 'products',
		timestamps: true,
	}
);

export const Category = sequelize.define(
	'Category',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		image: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: 'categories',
	}
);

export const Review = sequelize.define(
	'Review',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		userImage: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		message: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'reviews',
	}
);

export const CartItem = sequelize.define(
	'CartItem',
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		userId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		productId: {
			type: DataTypes.UUID,
			allowNull: false,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		tableName: 'cart_items',
		timestamps: true,
	}
);

export default sequelize;
