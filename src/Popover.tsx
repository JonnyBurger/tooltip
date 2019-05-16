import React, {Component, CSSProperties} from 'react';
import {RefHandler, PopperArrowProps} from 'react-popper';
import Popper from 'popper.js';
import {LineStyle} from 'csstype';
import {getContainerStyle, getArrowStyle} from './positioning';
import {DivProps} from './types';

const defaultColor = '#222';

export default class extends Component<{
	passRef: RefHandler;
	placement: Popper.Placement;
	visible: boolean;
	popupProps: DivProps;
	arrowDivProps: DivProps;
	borderWidth: number;
	borderStyle: LineStyle;
	borderColor: string;
	arrowProps: PopperArrowProps;
	style: CSSProperties;
	arrowSize?: number;
}> {
	render() {
		const {
			passRef,
			visible,
			placement,
			arrowProps,
			children,
			borderWidth = 0,
			borderStyle = 'solid',
			borderColor = 'gray',
			popupProps = {},
			arrowDivProps = {},
			style,
			arrowSize = 6
		} = this.props;
		const {style: customStyle = {}, ...customProps} = popupProps;
		const {style: customArrowStyle = {}, ...customDivProps} = arrowDivProps;
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
					borderWidth,
					borderStyle,
					borderColor,
					...style,
					...getContainerStyle(placement, borderWidth, arrowSize),
					...customStyle
				}}
				{...customProps}
				data-placement={placement}
			>
				<div
					ref={arrowProps.ref}
					style={{
						...arrowProps.style,
						...getArrowStyle(
							placement,
							borderWidth,
							borderStyle,
							borderColor,
							arrowSize
						),
						backgroundColor: defaultColor,
						...customArrowStyle
					}}
					{...customDivProps}
				/>
				{children}
			</div>
		);
	}
}
