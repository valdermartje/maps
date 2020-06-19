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
										"https://www.mapquest.com/search/results?query=Shopping&queryId=sic:565101,651201,566101,531102&boundingBox="+ (this.props.long ? this.props.long : Math.random() * 30 + 1) + "," + (this.props.lat ? this.props.lat : Math.random() * 30 + 1) + ","+ (this.props.long ? this.props.long : Math.random() * 30 + 1) +","+ (this.props.lat ? this.props.lat : Math.random() * 30 + 1) + "&page=0"
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
