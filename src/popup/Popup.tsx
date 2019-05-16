import React from 'react';
import {Manager, Reference, Popper} from 'react-popper';
import {Placement} from 'popper.js';
import PopupContent from './PopupContent';

export default ({
	children,
	preferredPlacement,
	onClose,
	message
}: {
	children: any;
	preferredPlacement: Placement;
	onClose: () => void;
	message: any;
}) => (
	<Manager>
		<Reference>{({ref}) => React.cloneElement(children, {ref})}</Reference>
		<Popper placement={preferredPlacement}>
			{({ref, ...popupProps}) => (
				<PopupContent passRef={ref} {...popupProps} onClose={onClose}>
					{message}
				</PopupContent>
			)}
		</Popper>
	</Manager>
);
