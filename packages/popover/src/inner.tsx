import React, {Component, CSSProperties} from 'react';
import {RefHandler, PopperArrowProps} from 'react-popper';
import Popper from 'popper.js';
import {LineStyle} from 'csstype';
import {Content, DivProps} from '@jonny/base-ui';

type PopupProps = {
	onClose: () => void;
	passRef: RefHandler;
	style: object;
	placement: Popper.Placement;
	borderWidth?: number;
	borderColor?: string;
	borderStyle?: LineStyle;
	popperArrowProps: PopperArrowProps;
	children: any;
	arrowSize?: number;
	bubbleProps?: DivProps;
	arrowProps?: DivProps;
	visible: boolean;
	commonStyle: CSSProperties;
	bubbleStyle: CSSProperties;
	arrowStyle: CSSProperties;
};

export default class extends Component<PopupProps> {
	el = React.createRef<HTMLDivElement>();
	clickOff: (arg0: Event) => void;
	keyPress: (arg0: KeyboardEvent) => void;
	constructor(props: PopupProps) {
		super(props);
		this.clickOff = (_: Event) => {};
		this.keyPress = (_: KeyboardEvent) => {};
	}
	componentDidMount() {
		this.clickOff = evt => {
			if (this.el.current === null) {
				return;
			}
			if (!this.el.current.contains(evt.target as Node)) {
				document.removeEventListener('click', this.clickOff);
				this.props.onClose();
			}
		};
		this.keyPress = (evt: KeyboardEvent) => {
			if (this.el.current === null) {
				return;
			}
			const keyCode = evt.keyCode || evt.which;
			if (keyCode === 27) {
				this.props.onClose();
			}
		};
		document.addEventListener('click', this.clickOff);
		document.addEventListener('keydown', this.keyPress);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.clickOff);
		document.removeEventListener('keydown', this.keyPress);
	}
	render() {
		const {
			passRef,
			visible,
			style,
			placement,
			popperArrowProps,
			children
		} = this.props;
		const {
			borderWidth = 0,
			borderColor = '#b3b3b3',
			borderStyle = 'solid',
			arrowSize = 12,
			bubbleProps = {},
			arrowProps = {},
			commonStyle,
			bubbleStyle,
			arrowStyle
		} = this.props;
		return (
			<div ref={this.el}>
				<Content
					borderWidth={borderWidth}
					passRef={passRef}
					borderColor={borderColor}
					borderStyle={borderStyle}
					visible={visible}
					arrowSize={arrowSize}
					placement={placement}
					bubbleProps={bubbleProps}
					bubbleStyle={{
						padding: 12,
						backgroundColor: 'white',
						color: 'black',
						...bubbleStyle
					}}
					arrowProps={arrowProps}
					arrowStyle={{backgroundColor: 'white', ...arrowStyle}}
					popperArrowProps={popperArrowProps}
					style={style}
					commonStyle={commonStyle}
				>
					{children}
				</Content>
			</div>
		);
	}
}
