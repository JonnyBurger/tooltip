import {Content, DivProps} from '@jonny/base-ui';
import {LineStyle} from 'csstype';
import {Placement} from 'popper.js';
import React, {CSSProperties, useState} from 'react';
import {Manager, Popper, Reference} from 'react-popper';

type Props = {
	children: JSX.Element;
	tip: React.ReactNode;
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
	bubbleBorderWidth?: number;
	arrowBorderWidth?: number;
	bubbleBorderColor?: string;
	arrowBorderColor?: string;
	bubbleBorderStyle?: LineStyle;
	arrowBorderStyle?: LineStyle;
};

export type TooltipPlacement = Placement;

export default (props: Props): React.ReactNode => {
	const [tooltip, setTooltip] = useState(false);
	const {
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
		style = {},
		bubbleBorderWidth,
		arrowBorderWidth,
		bubbleBorderColor,
		arrowBorderColor,
		bubbleBorderStyle,
		arrowBorderStyle,
	} = props;
	return (
		<Manager>
			<Reference>
				{({ref}) =>
					React.cloneElement(children, {
						ref,
						onMouseEnter: () => setTooltip(true),
						onMouseLeave: () => setTooltip(false),
						onClick: () => setTooltip(true),
					})
				}
			</Reference>
			{tip ? (
				<Popper
					eventsEnabled={Boolean(tip)}
					placement={preferredPlacement}
					modifiers={{
						computeStyle: {
							gpuAcceleration: false,
						},
					}}
				>
					{({ref, arrowProps: popperArrowProps, ...popoverProps}) => (
						<Content
							arrowSize={arrowSize}
							borderColor={borderColor}
							bubbleBorderColor={bubbleBorderColor}
							arrowBorderColor={arrowBorderColor}
							borderWidth={borderWidth}
							bubbleBorderWidth={bubbleBorderWidth}
							arrowBorderWidth={arrowBorderWidth}
							borderStyle={borderStyle}
							bubbleBorderStyle={bubbleBorderStyle}
							arrowBorderStyle={arrowBorderStyle}
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
			) : null}
		</Manager>
	);
};
