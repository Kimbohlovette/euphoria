import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	fetchProducts,
	fetchCategories,
	createProduct,
	createCategory,
} from "../services/fetch_api";
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
