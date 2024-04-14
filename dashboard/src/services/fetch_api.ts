import axios from "axios";
import { Product, Category, QueryObject } from "../types";
export const BASE_URL = "http://localhost:8083";

type CategoriesData = {
	categories: Category[];
	total: number;
};
type ProductsData = {
	products: Product[];
	total: number;
};

export const fetchProducts = async (queryObj?: QueryObject) => {
	if (!queryObj) {
		return await axios.get<ProductsData>(`${BASE_URL}/api/products`);
	}
	return await axios.get<ProductsData>(`${BASE_URL}/api/products`, {
		params: {
			offset: (queryObj.page - 1) * queryObj.size,
			limit: queryObj.size,
		},
	});
};

export const fetchCategories = async (queryObj?: QueryObject) => {
	if (!queryObj) {
		return await axios.get<CategoriesData>(`${BASE_URL}/api/categories`);
	}
	return await axios.get<CategoriesData>(`${BASE_URL}/api/categories`, {
		params: {
			offset: (queryObj.page - 1) * queryObj.size,
			limit: queryObj.size,
		},
	});
};

export const createProduct = async (payload: Partial<Product>) => {
	return await axios.post<Product>(`${BASE_URL}/api/products`, payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const createCategory = async (payload: Partial<Category>) => {
	return await axios.post<Category>(`${BASE_URL}/api/categories`, payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
