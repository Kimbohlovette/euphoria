import React from 'react';

interface Props {
	text: string;
	required?: boolean;
}
const InputLabel = (props: Props) => {
	const { text, required } = props;
	return (
		<>
			<div className="text-gray-600 text-sm inline-block py-2">
				{text}
			</div>
			{required && <span className="text-gray-600">*</span>}
		</>
	);
};

export default InputLabel;
