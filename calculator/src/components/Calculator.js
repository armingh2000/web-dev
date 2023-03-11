import React from 'react';
import Button from './Button';

const Calculator = () => {
	const buttons = [
		['AC', 'C', '%', '/'],
		['7', '8', '9', '*'],
		['4', '5', '6', '-'],
		['1', '2', '3', '+'],
		['.', '0', '='],
	];

	return (
		<React.Fragment>
			<div className="row d-flex align-items-center text-center justify-content-center vh-100">
				<div className="col col-sm-5 bg-secondary-subtle rounded-5">
					<div className="row">
						<h1 className="border-bottom">RESULT</h1>
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
