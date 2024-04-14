import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	fetchProducts,
	fetchCategories,
	createProduct,
	createCategory,
} from "../services/fetch_api";
import { QueryObject } from "../types";

export const useFetchProducts = (queryObj?: QueryObject) => {
	return useQuery({
		queryKey: ["products", queryObj],
		queryFn: () => fetchProducts(queryObj),
	});
};

export const useFetchCategories = (queryObj?: QueryObject) => {
	return useQuery({
		queryKey: ["categories", queryObj],
		queryFn: () => fetchCategories(queryObj),
	});
};

export const useCreateProduct = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ["products"],
		mutationFn: createProduct,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["products"] });
		},
	});
};

export const useCreateCategory = () => {
	return useMutation({
		mutationKey: ["categories"],
		mutationFn: createCategory,
	});
};
