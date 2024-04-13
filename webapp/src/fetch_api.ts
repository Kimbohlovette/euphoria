import axios from "axios";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const fetchProducts = async () => {
	return await axios.get(`${BASE_URL}/api/products`);
};

export const fetchCategories = async () => {
	return await axios.get(`${BASE_URL}/api/categories`);
};

export const createProduct = async (payload: any) => {
	return await axios.post(`${BASE_URL}/api/products`, payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const createCategory = async (payload: any) => {
	return await axios.post(`${BASE_URL}/api/categories`, payload, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
