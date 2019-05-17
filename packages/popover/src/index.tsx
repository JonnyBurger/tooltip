import React from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import {Placement} from 'popper.js';
import PopupContent from './inner';
import {LineStyle} from 'csstype';
import {DivProps} from '@jonny/base-ui';

export default ({
	children,
	preferredPlacement,
	onClose,
	tip,
	borderWidth = 1,
	borderColor,
	borderStyle,
	arrowSize,
	popupProps,
	arrowDivProps,
	popupVisible
}: {
	children: any;
	preferredPlacement: Placement;
	onClose: () => void;
	tip: any;
	borderWidth?: number;
	borderColor?: string;
	borderStyle?: LineStyle;
	arrowSize?: number;
	popupProps?: DivProps;
	arrowDivProps?: DivProps;
	popupVisible: boolean;
}) => (
	<Manager>
		<Reference>
			{({ref}) => React.cloneElement(children, {innerRef: ref})}
		</Reference>
		{popupVisible ? (
			<Popper placement={preferredPlacement}>
				{({ref, ...popperProps}) => (
					<PopupContent
						passRef={ref}
						{...popperProps}
						borderWidth={borderWidth}
						borderStyle={borderStyle}
						borderColor={borderColor}
						onClose={onClose}
						arrowSize={arrowSize}
						arrowDivProps={arrowDivProps}
						popupProps={popupProps}
						visible={popupVisible}
					>
						{tip}
					</PopupContent>
				)}
			</Popper>
		) : null}
	</Manager>
);
