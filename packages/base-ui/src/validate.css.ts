import {CSSProperties} from 'react';

export default (css: CSSProperties) => {
	const explanation =
		'This is because border properties might conflict while re-rendering and must be handled separately';
	if (css.borderStyle) {
		throw new TypeError(
			`[@jonny/ui] Use the 'borderStyle' prop instead of putting 'borderStyle' into style. ${explanation}`
		);
	}
	if (css.borderWidth) {
		throw new TypeError(
			`[@jonny/ui] Use the 'borderWidth' prop instead of putting 'borderWidth' into style. ${explanation}`
		);
	}
	if (css.borderColor) {
		throw new TypeError(
			`[@jonny/ui] Use the 'borderColor' prop instead of putting 'borderColor' into style. ${explanation}`
		);
	}
};
