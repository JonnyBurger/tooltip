import React, {Component} from 'react';
import {RefHandler, PopperArrowProps} from 'react-popper';
import Popper from 'popper.js';
import {LineStyle} from 'csstype';
import Content from '../shared/Content';
import {DivProps} from 'shared/types';

type PopupProps = {
	onClose: () => void;
	passRef: RefHandler;
	style: object;
	placement: Popper.Placement;
	borderWidth?: number;
	borderColor?: string;
	borderStyle?: LineStyle;
	arrowProps: PopperArrowProps;
	children: any;
	arrowSize?: number;
	popupProps?: DivProps;
	arrowDivProps?: DivProps;
	visible: boolean;
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
			arrowProps,
			children
		} = this.props;
		const {
			borderWidth = 0,
			borderColor = '#b3b3b3',
			borderStyle = 'solid',
			arrowSize = 12,
			popupProps = {},
			arrowDivProps = {}
		} = this.props;
		const {style: popupPropsStyle = {}, ...otherPopupProps} = popupProps;
		const {style: arrowPropsStyle = {}, ...otherArrowProps} = arrowDivProps;
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
					popupProps={{
						...otherPopupProps,
						style: {
							padding: 12,
							backgroundColor: 'white',
							color: 'black',
							...popupPropsStyle
						}
					}}
					arrowDivProps={{
						...otherArrowProps,
						style: {
							backgroundColor: 'white',
							...arrowPropsStyle
						}
					}}
					arrowProps={arrowProps}
					style={style}
				>
					{children}
				</Content>
			</div>
		);
	}
}
