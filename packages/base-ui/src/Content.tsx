import React, {Component, CSSProperties} from 'react';
import {RefHandler, PopperArrowProps} from 'react-popper';
import Popper from 'popper.js';
import {LineStyle} from 'csstype';
import {getContainerStyle, getArrowStyle} from './positioning';
import {DivProps} from './types';
import validateCss from './validate.css';

const defaultColor = '#222';

export default class extends Component<{
	passRef: RefHandler;
	placement: Popper.Placement;
	visible: boolean;
	bubbleProps: DivProps;
	arrowProps: DivProps;
	arrowStyle: CSSProperties;
	borderWidth: number;
	bubbleBorderWidth?: number;
	arrowBorderWidth?: number;
	borderStyle: LineStyle;
	bubbleBorderStyle?: LineStyle;
	arrowBorderStyle?: LineStyle;
	borderColor: string;
	bubbleBorderColor?: string;
	arrowBorderColor?: string;
	popperArrowProps: PopperArrowProps;
	style: CSSProperties;
	bubbleStyle: CSSProperties;
	arrowSize?: number;
	commonStyle?: CSSProperties;
}> {
	render() {
		const {
			passRef,
			visible,
			placement,
			popperArrowProps,
			children,
			borderWidth = 0,
			bubbleBorderWidth,
			arrowBorderWidth,
			borderStyle = 'solid',
			bubbleBorderStyle,
			arrowBorderColor,
			borderColor = '#b3b3b3',
			bubbleBorderColor,
			arrowBorderStyle,
			bubbleProps = {},
			arrowProps = {},
			style,
			arrowSize = 6,
			arrowStyle = {},
			bubbleStyle = {},
			commonStyle = {}
		} = this.props;
		const {style: customStyle, ...customProps} = bubbleProps;
		const {style: customArrowStyle, ...customDivProps} = arrowProps;
		if (customArrowStyle) {
			throw new TypeError(
				`[@jonny/ui]: Pass 'arrowStyle' instead of 'arrowProps.style'`
			);
		}
		if (customStyle) {
			throw new TypeError(
				`[@jonny/ui]: Pass 'bubbleStyle' instead of 'bubbleProps.style'`
			);
		}
		validateCss(commonStyle);
		const actualBubbleBorderWidth =
			typeof bubbleBorderWidth === 'undefined'
				? borderWidth
				: bubbleBorderWidth;
		const actualArrowBorderWidth =
			typeof arrowBorderWidth === 'undefined' ? borderWidth : arrowBorderWidth;
		return (
			<div
				ref={passRef}
				style={{
					visibility: visible ? 'visible' : 'hidden',
					display: 'block',
					color: 'white',
					background: defaultColor,
					borderRadius: 3,
					paddingLeft: 13,
					paddingRight: 13,
					paddingTop: 9,
					paddingBottom: 9,
					fontSize: 12,
					zIndex: 1,
					textAlign: 'left',
					borderWidth: actualBubbleBorderWidth,
					borderStyle: bubbleBorderStyle || borderStyle,
					borderColor: bubbleBorderColor || borderColor,
					...style,
					...getContainerStyle(placement, actualBubbleBorderWidth, arrowSize),
					...commonStyle,
					...bubbleStyle
				}}
				{...customProps}
				data-placement={placement}
			>
				<div
					ref={popperArrowProps.ref}
					style={{
						...popperArrowProps.style,
						...getArrowStyle(
							placement,
							actualBubbleBorderWidth,
							actualArrowBorderWidth,
							arrowBorderStyle || borderStyle,
							arrowBorderColor || borderColor,
							arrowSize
						),
						backgroundColor: defaultColor,
						...commonStyle,
						...arrowStyle
					}}
					{...customDivProps}
				/>
				{children}
			</div>
		);
	}
}
