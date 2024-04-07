import { LuX } from 'react-icons/lu';
import ClickAwayListener from '../click_away_listener';
import InputLabel from '../input_label';
import TextInputControl from '../text_input_control';
import Dropdown from '../dropdown';

interface Props {
	onClose: () => void;
}
const CreateProductModal = ({ onClose }: Props) => {
	return (
		<div className="fixed top-0 left-0 z-[1000] w-full min-h-screen bg-black/30 grid place-items-center px-4">
			<ClickAwayListener onClickAway={onClose}>
				<div className="relative shadow-xl p-4 w-full sm:p-8 bg-white px-4 sm:px-8 rounded-sm  max-w-screen-lg">
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-gray-600"
					>
						<LuX />
					</button>
					<header>
						<h1 className="text-xl font-medium text-gray-800 before:content-['_'] flex items-center gap-2 before:w-1 before:rounded-lg before:h-4 before:bg-violet-600">
							Create Product
						</h1>
					</header>
					<h1 className="flex font-extralight text-gray-600">
						Product Details
					</h1>
					<form className="mt-8 w-full">
						<div className="flex flex-col gap-5">
							<div className="flex flex-col sm:flex-row  sm:items-center gap-5 *:flex-1">
								<div>
									<InputLabel required text="Product Name" />
									<TextInputControl
										placeholder="eg. Jeans"
										required
									/>
								</div>
								<div>
									<InputLabel
										required
										text="Product Description"
									/>
									<TextInputControl
										placeholder="Description"
										required
									/>
								</div>
							</div>
							<div className="w-1/2">
								<InputLabel required text="Product Image URL" />
								<TextInputControl
									placeholder="https://example.com/imgs/image.png"
									required
								/>
							</div>
							<div className="flex flex-col sm:flex-row gap-4 *:flex-1 items-center">
								<div className="w-1/2">
									<InputLabel text="Country" />
									<TextInputControl placeholder="e.g United States" />
								</div>
								<div>
									<InputLabel required text="Category" />
									<Dropdown
										containerStyle={{
											backgroundColor: '#f9fafb',
										}}
										data={[]}
										onSelect={() => {
											console.log('selected');
										}}
									/>
								</div>
								<div className="w-1/2">
									<InputLabel text="Product Tags" />
									<TextInputControl placeholder="jeans, swags" />
								</div>
							</div>
						</div>
						<div className="py-5 mt-2">
							<button className="py-2 px-4 rounded-md bg-violet-600 text-white">
								Create Product
							</button>
						</div>
					</form>
				</div>
			</ClickAwayListener>
		</div>
	);
};

export default CreateProductModal;
