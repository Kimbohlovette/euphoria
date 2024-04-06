import { ReactNode, RefObject, useEffect, useRef } from 'react';

interface Props {
	children: ReactNode;
	onClickAway: (event?: Event) => void;
	toggleButtonRef?: RefObject<HTMLButtonElement>;
}
const ClickAwayListener = ({
	children,
	onClickAway,
	toggleButtonRef,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: Event) {
			if (
				!!toggleButtonRef &&
				toggleButtonRef?.current?.contains(event.target as Node)
			) {
				return;
			}

			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickAway(event);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => document.removeEventListener('click', handleClickOutside);
	}, [onClickAway, toggleButtonRef]);

	return <div ref={ref}>{children}</div>;
};

export default ClickAwayListener;
