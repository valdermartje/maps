import React from 'react';

import '../style/footer.css';

let year = new Date().getFullYear();

const Footer = (props) => {
	return (
		<div className="footer">
			<div className={'container'}>
				<div
					style={{
						display: 'flex',
						position: 'relative'
					}}
				>
					<h1 className={'footer-logo'}>Maps</h1>
					<div className={'extra-info'}>
						<div
							className="center-top"
							style={{
								color: `${props.color}`
							}}
						>
							| {year} &copy;Copyright
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
