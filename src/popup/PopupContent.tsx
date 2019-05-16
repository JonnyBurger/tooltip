import React, {Component} from 'react';
import {RefHandler} from 'react-popper';
import Popper from 'popper.js';
import {LineStyle} from 'csstype';
import Popover from '../Popover';

type PopupProps = {
	onClose: () => void;
	passRef: RefHandler;
	style: object;
	placement: Popper.Placement;
	borderWidth?: number;
	borderColor?: string;
	borderStyle?: LineStyle;
	arrowProps: {
		style: object;
		ref: RefHandler;
	};
	children: any;
	arrowSize?: number;
	popupProps?: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
	arrowDivProps?: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
};

export default class extends Component<PopupProps> {
	el = React.createRef<HTMLDivElement>();
	clickOff: (arg0: Event) => void;
	constructor(props: PopupProps) {
		super(props);
		this.clickOff = (_: Event) => {};
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
		document.addEventListener('click', this.clickOff);
	}
	componentWillUnmount() {
		document.removeEventListener('click', this.clickOff);
	}
	render() {
		const {passRef, style, placement, arrowProps, children} = this.props;
		const {borderWidth = 0} = this.props;
		const borderColor = this.props.borderColor || '#b3b3b3';
		const borderStyle = this.props.borderStyle || 'solid';
		const arrowSize = this.props.arrowSize || 12;
		const {style: popupPropsStyle = {}, ...otherPopupProps} =
			this.props.popupProps || {};
		const {style: arrowPropsStyle = {}, ...otherArrowProps} =
			this.props.arrowDivProps || {};
		return (
			<div ref={this.el}>
				<Popover
					borderWidth={borderWidth}
					passRef={passRef}
					borderColor={borderColor}
					borderStyle={borderStyle}
					visible
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
				</Popover>
			</div>
		);
	}
}
