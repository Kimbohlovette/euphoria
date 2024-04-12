import React from 'react';
import { MdOutlineStarHalf, MdOutlineStar } from 'react-icons/md';

interface Props {
	size: number;
	color: string;
	isHalf?: boolean;
}
const Star = ({ size, color, isHalf }: Props) => {
	return isHalf ? (
		<MdOutlineStarHalf size={size} color={color} />
	) : (
		<MdOutlineStar size={size} color={color} />
	);
};

export default Star;
