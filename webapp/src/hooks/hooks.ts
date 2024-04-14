import { useMutation, useQuery } from "@tanstack/react-query";
import {
	fetchProducts,
	fetchCategories,
	createProduct,
	createCategory,
} from "../services/fetch_api";

export const useFetchProducts = (queryKey?: string[]) => {
	return useQuery({
		queryKey: ["products"],
		queryFn: () => fetchProducts(queryKey),
	});
};

export const useFetchCategories = () => {
	return useQuery({
		queryKey: ["categories"],
		queryFn: fetchCategories,
	});
};

export const useCreateProduct = () => {
	return useMutation({
		mutationKey: ["createProduct"],
		mutationFn: createProduct,
	});
};

export const useCreateCategory = () => {
	return useMutation({
		mutationKey: ["createCategory"],
		mutationFn: createCategory,
	});
};
