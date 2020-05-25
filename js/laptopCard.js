import React from 'react';

import '../style/card.css';

class Laptop extends React.Component {
	render() {
		return (
			<div id={'recommendations'} className={'card'}>
				<div className={'card-layout'}>
					<h1>{this.props.header}</h1>

					<div className={'laptop'}>
						<img
							style={{
								width: '150%'
							}}
							src={this.props.device}
							alt={this.props.alt}
						/>
						<div className={'overlay-laptop'}>
							<div className={'maps'}>
								<iframe
									title="mapExample"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
									src={
										// TODO: make this URL near by the user location
										'https://www.mapquest.com/search/results?query=Hotels&queryId=sic:701101&boundingBox=' +
										(this.props.lat ? this.props.lat : Math.random() * 30 + 1) +
										',' +
										(this.props.long ? this.props.long : Math.random() * 30 + 1) +
										',6.70759350405294,22.47802734375&page=0'
									}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Laptop;
