import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux'

const Calculator = () => {
	const buttons = [
		['AC', 'C', '%', '/'],
		['7', '8', '9', '*'],
		['4', '5', '6', '-'],
		['1', '2', '3', '+'],
		['.', '0', '='],
	];

	const display = useSelector((state) => state.calculator.sequence);

	return (
		<React.Fragment>
			<div className="row d-flex align-items-center text-center justify-content-center vh-100">
				<div className="col col-sm-5 bg-secondary-subtle rounded-5">
					<div className="row">
						<h1 className="border-bottom text-end mh-10"> &nbsp; {display} </h1>
					</div>

					{buttons.map((row) => (
						<div className="row">
							{row.map((button) => (
								<Button button={button} />
							))}
						</div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Calculator;
