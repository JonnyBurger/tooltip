import React, {useState, CSSProperties} from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import {Placement} from 'popper.js';
import {LineStyle} from 'csstype';
import {Content, DivProps} from '@jonny/base-ui';

export default ({
	children,
	tip,
	preferredPlacement,
	borderColor = '#b3b3b3',
	borderWidth = 0,
	borderStyle = 'solid',
	arrowSize = 8,
	bubbleProps = {},
	arrowProps = {},
	bubbleStyle = {},
	arrowStyle = {},
	style = {}
}: {
	children: any;
	tip: any;
	preferredPlacement: Placement;
	borderColor?: string;
	borderWidth?: number;
	borderStyle?: LineStyle;
	arrowSize?: number;
	bubbleProps?: DivProps;
	bubbleStyle?: CSSProperties;
	arrowProps?: DivProps;
	arrowStyle?: CSSProperties;
	style?: CSSProperties;
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
				{({ref, arrowProps: popperArrowProps, ...popoverProps}) => (
					<Content
						arrowSize={arrowSize}
						borderColor={borderColor}
						borderWidth={borderWidth}
						borderStyle={borderStyle}
						arrowProps={arrowProps}
						arrowStyle={arrowStyle}
						bubbleStyle={bubbleStyle}
						bubbleProps={bubbleProps}
						passRef={ref}
						visible={tooltip}
						commonStyle={style}
						popperArrowProps={popperArrowProps}
						{...popoverProps}
					>
						{tip}
					</Content>
				)}
			</Popper>
		</Manager>
	);
};
