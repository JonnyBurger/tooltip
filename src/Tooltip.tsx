import React, {useState} from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import {Placement} from 'popper.js';
import {LineStyle} from 'csstype';
import Popover from './Popover';
import {DivProps} from './types';

export default ({
	children,
	message,
	preferredPlacement,
	borderColor = 'gray',
	borderWidth = 0,
	borderStyle = 'solid',
	arrowSize = 8
}: {
	children: any;
	message: any;
	preferredPlacement: Placement;
	borderColor?: string;
	borderWidth?: number;
	borderStyle?: LineStyle;
	arrowSize?: number;
	popupProps?: DivProps;
}) => {
	const [tooltip, setTooltip] = useState(false);
	return (
		<Manager>
			<Reference>
				{({ref}) =>
					React.cloneElement(children, {
						ref,
						onMouseEnter: () => setTooltip(true),
						onMouseLeave: () => setTooltip(false)
					})
				}
			</Reference>
			<Popper placement={preferredPlacement}>
				{({ref, ...popoverProps}) => (
					<Popover
						arrowSize={arrowSize}
						borderColor={borderColor}
						borderWidth={borderWidth}
						borderStyle={borderStyle}
						popupProps={{}}
						arrowDivProps={{}}
						passRef={ref}
						visible={tooltip}
						{...popoverProps}
					>
						{message}
					</Popover>
				)}
			</Popper>
		</Manager>
	);
};
