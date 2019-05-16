import React, {useState} from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import {Placement} from 'popper.js';
import {LineStyle} from 'csstype';
import Content from '../shared/Content';
import {DivProps} from '../shared/types';

export default ({
	children,
	message,
	preferredPlacement,
	borderColor = '#b3b3b3',
	borderWidth = 0,
	borderStyle = 'solid',
	arrowSize = 8,
	popupProps = {},
	arrowDivProps = {}
}: {
	children: any;
	message: any;
	preferredPlacement: Placement;
	borderColor?: string;
	borderWidth?: number;
	borderStyle?: LineStyle;
	arrowSize?: number;
	popupProps?: DivProps;
	arrowDivProps?: DivProps;
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
					<Content
						arrowSize={arrowSize}
						borderColor={borderColor}
						borderWidth={borderWidth}
						borderStyle={borderStyle}
						popupProps={popupProps}
						arrowDivProps={arrowDivProps}
						passRef={ref}
						visible={tooltip}
						{...popoverProps}
					>
						{message}
					</Content>
				)}
			</Popper>
		</Manager>
	);
};
