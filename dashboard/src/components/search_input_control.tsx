import React, { CSSProperties, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

interface Props {
	onSubmit: () => void;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	onReset: () => void;
	containerStyle?: CSSProperties;
}
const SearchInput = ({
	onSubmit,
	value,
	onChange,
	placeholder,
	onReset,
	containerStyle,
}: Props) => {
	const [searchInput, setSearchInput] = useState(value);

	const handleReset = () => {
		setSearchInput('');
		onReset();
	};
	return (
		<form onSubmit={onSubmit} className="flex items-center gap-2">
			<div
				style={containerStyle}
				className="flex-1 flex items-center min-w-0 px-2 rounded-lg text-sm text-gray-800"
			>
				<button className="pl-2 pr-4">
					<BsSearch />
				</button>

				<input
					type="text"
					onChange={onChange}
					className="py-2 focus:outline-none min-w-0 w-full placeholder:text-sm placeholder:text-light italic bg-transparent"
					placeholder={placeholder}
				/>
				{searchInput !== '' && (
					<button
						type="reset"
						onClick={handleReset}
						className="pl-2 pr-4 focus:outline-none"
					>
						<MdClose />
					</button>
				)}
			</div>
		</form>
	);
};

export default SearchInput;
