import React from 'react';
import TextInputControl from '../text_input_control';
import InputLabel from '../input_label';
import ClickAwayListener from '../click_away_listener';
import { LuX } from 'react-icons/lu';

interface Props {
	onClose: () => void;
}
const CreateCategoryModal = ({ onClose }: Props) => {
	return (
		<div className="fixed top-0 left-0 z-[1000] w-full min-h-screen bg-black/30 grid place-items-center">
			<ClickAwayListener
				onClickAway={() => {
					console.log("I'ved been called");
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
					<form className="mt-8">
						<div className="flex flex-col gap-5">
							<div className="flex items-center gap-5 *:flex-1">
								<div>
									<InputLabel required text="Category Name" />
									<TextInputControl
										placeholder="eg. Jeans"
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
									required
								/>
							</div>
						</div>
						<div className="py-5 mt-2">
							<button className="py-2 px-4 rounded-md bg-violet-600 text-white">
								Create Category
							</button>
						</div>
					</form>
				</div>
			</ClickAwayListener>
		</div>
	);
};

export default CreateCategoryModal;
