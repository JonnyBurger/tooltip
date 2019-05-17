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
	popupProps,
	arrowDivProps,
	popupVisible,
	style = {}
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
	style?: CSSProperties;
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
						arrowDivProps={arrowDivProps}
						popupProps={popupProps}
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
