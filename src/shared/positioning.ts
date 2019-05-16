import {Placement} from 'popper.js';
import {CSSProperties} from 'react';
import {LineStyle} from 'csstype';

export const getArrowStyle = (
	placement: Placement,
	borderWidth: number,
	borderStyle: LineStyle,
	borderColor: string,
	tooltipSize: number
): CSSProperties => {
	const isBottom = Boolean(placement && placement.indexOf('bottom') === 0);
	const isLeft = Boolean(placement && placement.indexOf('left') === 0);
	const isRight = Boolean(placement && placement.indexOf('right') === 0);
	const isTop = Boolean(placement && placement.indexOf('top') === 0);

	const offset = Math.ceil(0 - tooltipSize / 2) - borderWidth;

	return {
		...(isBottom
			? {
					borderTopWidth: borderWidth,
					borderTopStyle: borderStyle,
					borderTopColor: borderColor,
					borderLeftWidth: borderWidth,
					borderLeftStyle: borderStyle,
					borderLeftColor: borderColor,
					borderRightWidth: 0,
					borderBottomWidth: 0,
					top: offset
			  }
			: {}),
		...(isTop
			? {
					borderBottomWidth: borderWidth,
					borderBottomColor: borderColor,
					borderBottomStyle: borderStyle,
					borderRightWidth: borderWidth,
					borderRightStyle: borderStyle,
					borderRightColor: borderColor,
					borderLeftWidth: 0,
					borderTopWidth: 0,
					bottom: offset
			  }
			: {}),
		...(isRight
			? {
					borderLeftWidth: borderWidth,
					borderLeftColor: borderColor,
					borderLeftStyle: borderStyle,
					borderBottomWidth: borderWidth,
					borderBottomColor: borderColor,
					borderBottomStyle: borderStyle,
					borderRightWidth: 0,
					borderTopWidth: 0,
					right: offset
			  }
			: {}),
		...(isLeft
			? {
					borderRightWidth: borderWidth,
					borderRightColor: borderColor,
					borderRightStyle: borderStyle,
					borderTopWidth: borderWidth,
					borderTopColor: borderColor,
					borderTopStyle: borderStyle,
					borderLeftWidth: 0,
					borderBottomWidth: 0,
					left: offset
			  }
			: {}),
		position: 'absolute',
		height: tooltipSize,
		width: tooltipSize,
		transform: 'rotate(45deg)'
	};
};

export const getContainerStyle = (
	placement: Placement,
	borderWidth: number,
	tooltipSize: number
): CSSProperties => {
	const isBottom = Boolean(placement && placement.indexOf('bottom') === 0);
	const isLeft = Boolean(placement && placement.indexOf('left') === 0);
	const isRight = Boolean(placement && placement.indexOf('right') === 0);
	const isTop = Boolean(placement && placement.indexOf('top') === 0);

	const offset = Math.floor(tooltipSize / 2) + borderWidth;

	return {
		...(isBottom ? {marginTop: offset} : {}),
		...(isTop ? {marginBottom: offset} : {}),
		...(isLeft ? {marginRight: offset} : {}),
		...(isRight ? {marginLeft: offset} : {})
	};
};
