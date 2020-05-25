import React from 'react';

import '../style/button.css';

const Button = (props) => {
	return <button onClick={props.function}>{props.text}</button>;
};

export default Button;
