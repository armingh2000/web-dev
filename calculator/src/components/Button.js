import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	pressButton,
	backspace,
	clear,
	getResult,
} from '../features/calculator/calculatorSlice';

const Button = (props) => {
	const button = props.button;
	const spanList = ['='];
	const butStyle = 'col col-3';
	const spanStyle = 'col col-6';
	const shareStyle = 'bg-body-secondary mx-1 my-3 p-1 ';

	const divStyle = spanList.includes(button) ? spanStyle : butStyle;

	const pStyle =
		shareStyle + (spanList.includes(button) ? 'rounded-5' : 'rounded-5');

	const dispatch = useDispatch();
	const seq = useSelector((state) => state.calculator.sequence);
	const getAction = (button) => {
		if (seq == 'Error' && button != 'AC') return null;

		switch (button) {
			case 'AC':
				return clear();
			case 'C':
				return backspace();
			case '=':
				return getResult();
			default:
				return pressButton(button);
		}
	};
	const action = getAction(button);

	return (
		<div className={divStyle}>
			<p
				onClick={() => dispatch(action)}
				className={pStyle}
				style={{ 'font-size': '3vmin' }}>
				{button}
			</p>
		</div>
	);
};

export default Button;
