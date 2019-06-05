import React, {CSSProperties} from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import {Placement} from 'popper.js';
import {LineStyle} from 'csstype';
import {Content, DivProps} from '@jonny/base-ui';

type Props = {
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
	bubbleBorderWidth?: number;
	arrowBorderWidth?: number;
	bubbleBorderColor?: string;
	arrowBorderColor?: string;
	bubbleBorderStyle?: LineStyle;
	arrowBorderStyle?: LineStyle;
};

export default class Tooltip extends React.Component<Props> {
	state = {
		tooltip: false
	};
	render() {
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
			arrowBorderStyle
		} = this.props;
		return (
			<Manager>
				<Reference>
					{({ref}) =>
						React.cloneElement(children, {
							ref,
							onMouseEnter: () => this.setState({tooltip: true}),
							onMouseLeave: () => this.setState({tooltip: false}),
							onClick: () => this.setState({tooltip: true})
						})
					}
				</Reference>
				<Popper
					eventsEnabled={Boolean(tip)}
					placement={preferredPlacement}
					modifiers={{
						computeStyle: {
							gpuAcceleration: false
						}
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
							visible={this.state.tooltip}
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
	}
}
