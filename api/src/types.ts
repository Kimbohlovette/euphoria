import { Model } from 'sequelize';
import { CartItem, Category, Password } from './models/models';

export interface CategoryType {
	title: string;
	id: string;
	description: string;
	image: string;
}

export interface UserModelType extends Model {
	getCartItems(): Promise<(typeof CartItem)[]>;
	getPassword(): Promise<typeof Password>;
}

export interface ProductModelType extends Model {
	getCategory(): Promise<typeof Category>;
}
