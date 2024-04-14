import React, { FormEvent, useState } from "react";
import TextInputControl from "../text_input_control";
import InputLabel from "../input_label";
import ClickAwayListener from "../click_away_listener";
import { LuX } from "react-icons/lu";
import { useCreateCategory } from "../../hooks/hooks";

interface Props {
	onClose: () => void;
}
const CreateCategoryModal = ({ onClose }: Props) => {
	const createCategoryMutation = useCreateCategory();
	const [title, setTitle] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		createCategoryMutation.mutate({
			title,
			image: imageUrl,
			description,
		});
		if (createCategoryMutation.isSuccess) {
			onClose();
		}
	};

	return (
		<div className="fixed top-0 left-0 z-[1000] w-full min-h-screen bg-black/30 grid place-items-center">
			<ClickAwayListener
				onClickAway={() => {
					onClose();
				}}
			>
				<div className="relative shadow-xl p-8 bg-white px-4 sm:px-8 rounded-sm w-full max-w-screen-md">
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-gray-600"
					>
						<LuX />
					</button>
					<header>
						<h1 className="text-xl font-medium text-gray-800 before:content-['_'] flex items-center gap-2 before:w-1 before:rounded-lg before:h-4 before:bg-violet-600">
							Create Category
						</h1>
					</header>
					<h1 className="flex text-lg font-extralight text-gray-600">
						Product Category
					</h1>
					<form onSubmit={handleSubmit} className="mt-8">
						<div className="flex flex-col gap-5">
							<div className="flex items-center gap-5 *:flex-1">
								<div>
									<InputLabel required text="Category Name" />
									<TextInputControl
										placeholder="eg. Jeans"
										onChange={setTitle}
										required
									/>
								</div>
								<div>
									<InputLabel
										required
										text="Category Description"
									/>
									<TextInputControl
										placeholder="Description"
										required
										onChange={setDescription}
									/>
								</div>
							</div>
							<div className="w-1/2">
								<InputLabel
									required
									text="Category Image URL"
								/>
								<TextInputControl
									placeholder="https://example.com/imgs/image.png"
									onChange={setImageUrl}
									required
								/>
							</div>
						</div>
						<div className="py-5 mt-2 ">
							<button className="py-2 px-4 rounded-md bg-violet-600 text-white">
								Create Category
							</button>
							<p className="text-red-600 font-[100]">
								An error occurred saving category
							</p>
						</div>
					</form>
				</div>
			</ClickAwayListener>
		</div>
	);
};

export default CreateCategoryModal;
