import React from 'react';

import '../style/card.css';
import './functions/maps';
// import '../js/functions/maps';

import macbook from '../img/macbook.png';

import Button from './button.js';

import { getLocation } from './functions/getLocation.js';

import Laptop from './laptopCard';

class Mobile extends React.Component {
	state = {
		coordinates: {}
	};

	getLocationCoordinates = () => {
		getLocation((coordinates) => {
			this.setState({ coordinates });
			console.log(this.state.coordinates);
		});
	};

	functionCoordinatePrint = (index) => {
		return this.state.coordinates[index] ? this.state.coordinates[index] : Math.random() * 50 + 1;
	};

	render() {
		const { lat, lng } = this.state.coordinates;
		return (
			<div id={'location'} className={'card'}>
				<div className={'card-layout'}>
					<div className={'text-card'}>
						<h1>{this.props.header}</h1>
						{this.props.text !== '' && <p className={'max-width-70'}>{this.props.text}</p>}

						<div
							style={{
								color: 'var(--color-text)'
							}}
						>
							<input type="checkbox" id="conditions-read" />
							<a href="../pages/algemene-voorwaarden">Accepteer voorwaarden</a>
						</div>

						<Button function={this.getLocationCoordinates} text={'Allow Location'} />
					</div>
					<div className={'mobile'}>
						<img src={this.props.device} className={'device'} alt={this.props.alt_image} />
						<div className={'overlay'}>
							<div id={'location-maps'}>
								<iframe
									title="map"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									src={`https://www.mapquest.com/near-${this.functionCoordinatePrint(
										'latitude'
									)},${this.functionCoordinatePrint('longitude')}?zoom=3`}
								/>
							</div>
						</div>
					</div>
				</div>

				<Laptop
					lat={this.functionCoordinatePrint('latitude')}
					long={this.functionCoordinatePrint('longitude')}
					device={macbook}
					header={'Locaties in de buurt'}
				/>
			</div>
		);
	}
}

export default Mobile;
