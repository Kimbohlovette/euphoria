import { useMutation, useQuery } from "@tanstack/react-query";
import {
	createCategory,
	createProduct,
	fetchCategories,
	fetchProducts,
} from "./fetch_api";

export const useFetchProducts = () => {
	return useQuery({
		queryKey: ["products"],
		queryFn: fetchProducts,
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
