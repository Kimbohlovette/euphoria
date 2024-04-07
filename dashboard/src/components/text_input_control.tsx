import React from 'react';

interface Props {
	placeholder?: string;
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled?: boolean;
	required?: boolean;
}
const TextInputControl = (props: Props) => {
	const { placeholder, value, onChange, disabled, required } = props;
	return (
		<input
			type="text"
			className="w-full min-w-0 px-2 py-2 bg-gray-100 rounded-md  focus:outline-none focus:border-gray-400 placeholder:font-light text-gray-600"
			value={value}
			placeholder={placeholder || ''}
			onChange={onChange}
			disabled={disabled}
			required={required}
		/>
	);
};

export default TextInputControl;
