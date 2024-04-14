export interface Product {
	id: string;
	title: string;
	images: string[];
	description: string;
	price: number | string;
	tags: string[];
	category: string | Category;
	country: string;
	stock: number | string;
	createdAt: Date;
	updatedAt: Date;
}

export interface Category {
	id: string;
	title: string;
	description: string;
	image: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface QueryObject {
	page: number;
	size: number;
}
