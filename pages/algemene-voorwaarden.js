import React from 'react';

import Footer from './js/footer';
import Menu from './js/menu';
import './style/stylesheet.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<Menu />

				<div className={'container'}>hallo</div>

				<Footer color={'#1D1D1D'} />
			</div>
		);
	}
}

export default App;
