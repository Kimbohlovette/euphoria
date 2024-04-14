import { DataTypes, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { ProductModelType, UserModelType } from '../types';
dotenv.config();

// Collect database credentials
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const DBNAME = process.env.DBNAME;
const DBHOST = process.env.DBHOST;

// database connection path
const DB_PATH = `postgres://${DBUSER}:${DBPASSWORD}@${DBHOST}/${DBNAME}`;
const sequelize = new Sequelize(DB_PATH);

// Define database models
export const User = sequelize.define<UserModelType>(
	"User",
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
			defaultValue: "user",
		},
	},
	{
		tableName: "users",
		timestamps: true,
	}
);

export const Password = sequelize.define(
	"Password",
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV1,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "passwords",
		timestamps: true,
	}
);

export const Category = sequelize.define(
	"Category",
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
		tableName: "categories",
	}
);

export const Product = sequelize.define<ProductModelType>(
	"Product",
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
		images: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
		tags: {
			type: DataTypes.ARRAY(DataTypes.STRING),
		},
	},
	{
		tableName: "products",
		timestamps: true,
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

// Associations definitions

// category -> product
Category.hasMany(Product);
Product.belongsTo(Category);

// user -- password
User.hasOne(Password);
Password.belongsTo(User);

// product -> review
Product.hasMany(Review);
Review.belongsTo(Product);

// user -> product
User.hasMany(Product);
Product.belongsTo(User);

// shopping item -> product
CartItem.belongsTo(Product);

// user -> shoppingcart
CartItem.belongsTo(User);

export default sequelize;
