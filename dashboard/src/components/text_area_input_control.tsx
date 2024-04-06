import { ChangeEvent } from 'react';

interface Props {
	value?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	cols?: number;
	rows?: number;
	disabled?: boolean;
}
const TextAreaInputControl = (props: Props) => {
	const { value, onChange, placeholder, cols, rows, disabled } = props;

	return (
		<textarea
			className="w-full min-w-0 p-2 border rounded-md  focus:outline-none focus:border-gray-400 text-sm placeholder:font-light text-gray-600"
			name="desc"
			value={value}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			disabled={disabled}
			onChange={onChange}
		></textarea>
	);
};

export default TextAreaInputControl;
