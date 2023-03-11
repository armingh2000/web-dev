import React from 'react';

const Button = (props) => {
	const button = props.button;
	const spanList = ['='];
	const butStyle = 'col col-3';
	const spanStyle = 'col col-6';
	const shareStyle = 'bg-body-secondary mx-1 my-3 p-1 ';

	const divStyle = spanList.includes(button) ? spanStyle : butStyle;

	const pStyle =
		shareStyle +
		(spanList.includes(button) ? 'rounded-5' : 'rounded-5');

	return (
		<div className={divStyle}>
			<p className={pStyle} style={{'font-size': '3vmin'}}> {button} </p>
		</div>
	);
};

export default Button;
