import React, {CSSProperties} from 'react';
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
	bubbleProps,
	arrowProps,
	popupVisible,
	style = {},
	arrowStyle = {},
	bubbleStyle = {}
}: {
	children: any;
	preferredPlacement: Placement;
	onClose: () => void;
	tip: any;
	borderWidth?: number;
	borderColor?: string;
	borderStyle?: LineStyle;
	arrowSize?: number;
	bubbleProps?: DivProps;
	arrowProps?: DivProps;
	popupVisible: boolean;
	style?: CSSProperties;
	arrowStyle?: CSSProperties;
	bubbleStyle?: CSSProperties;
}) => (
	<Manager>
		<Reference>
			{({ref}) => React.cloneElement(children, {innerRef: ref})}
		</Reference>
		{popupVisible ? (
			<Popper placement={preferredPlacement}>
				{({ref, arrowProps: popperArrowProps, ...popperProps}) => (
					<PopupContent
						passRef={ref}
						{...popperProps}
						popperArrowProps={popperArrowProps}
						borderWidth={borderWidth}
						borderStyle={borderStyle}
						borderColor={borderColor}
						onClose={onClose}
						arrowSize={arrowSize}
						arrowProps={arrowProps}
						bubbleProps={bubbleProps}
						arrowStyle={arrowStyle}
						bubbleStyle={bubbleStyle}
						visible={popupVisible}
						commonStyle={style}
					>
						{tip}
					</PopupContent>
				)}
			</Popper>
		) : null}
	</Manager>
);
