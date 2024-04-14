import axios from "axios";
import { Product, Category } from "../types";
export const BASE_URL = "http://localhost:8083";
export const fetchProducts = async () => {
	return await axios.get<Product[]>(`${BASE_URL}/api/products`);
};

export const fetchCategories = async () => {
	return await axios.get<Category[]>(`${BASE_URL}/api/categories`);
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
