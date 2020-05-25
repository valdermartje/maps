import React from 'react';

import './../style/menu.css';
import { mobileMenu } from './functions/menuCollapse.js';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<div
					className="menu"
					style={{
						display: 'flex'
					}}
				>
					<div className="container">
						<div className="logo ">
							<h1>Maps</h1>
						</div>

						<div className="links">
							<a href={'#location'}>Locatie</a>
							<a href={'#recommendations'}>In uw buurt</a>

							<div className={'menu-mobile'} onClick={mobileMenu}>
								<div className={'streep'} />
								<div className={'streep'} />
								<div className={'streep'} />
							</div>
						</div>
					</div>
				</div>

				<div
					className={'overlay-menu'}
					style={{
						display: 'none'
					}}
				>
					<div className={'mobileLinks'}>
						<div className={'menuLinks'}>
							<a href={'#location'}>Locatie</a>
							<a href={'#recommendations'}>In uw buurt</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
