import React, { CSSProperties, useRef, useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import ClickAwayListener from './click_away_listener';

interface OptionType {
	title: string;
	id: number | string;
}

interface DropdownProps<T> {
	data: T[];
	onSelect: (selectValue: T) => void;
	placeholder?: string;
	selectedValue?: T;
	containerStyle?: CSSProperties;
}

const Dropdown = <T extends OptionType>({
	data,
	onSelect,
	selectedValue,
	containerStyle,
}: DropdownProps<T>) => {
	const DEFAULT_OPTION = selectedValue ?? { id: 1, title: 'Select Option' };

	const dropdownBtnRef = useRef<HTMLDivElement>(null);
	const dropdownMenuRef = useRef<HTMLDivElement>(null);
	const [selectedOption, setSelectedOption] =
		useState<OptionType>(DEFAULT_OPTION);
	const [showContent, setShowContent] = React.useState(false);
	const handleClickAway = () => {
		setShowContent(false);
	};
	const handleSelectOption = (option: OptionType) => {
		setSelectedOption(option);
		onSelect(data.find((item) => item.id === option.id) as T);
		setShowContent(false);
	};
	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<div
				ref={dropdownBtnRef}
				className="relative focus:outline-none w-full"
			>
				<div
					style={containerStyle}
					onClick={(e) => {
						e.stopPropagation();
						setShowContent(!showContent);
					}}
					className="control py-2 px-4 rounded-lg flex items-center justify-between gap-4"
				>
					<span className="text-gray-700">
						{selectedOption.title}
					</span>
					<span className="text-gray-600">
						{showContent ? <LuChevronUp /> : <LuChevronDown />}
					</span>
				</div>
				{showContent && (
					<div
						ref={dropdownMenuRef}
						className="top-full border rounded-md absolute left-0 w-full z-10 bg-gray-50"
					>
						<ul className="text-gray-600 *:py-2 *:px-4 hover:*:bg-gray-200">
							{data.map((option, key) => (
								<li
									onClick={(e) => {
										e.stopPropagation();
										handleSelectOption(option);
									}}
									key={key}
								>
									{option.title}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</ClickAwayListener>
	);
};

export default Dropdown;
