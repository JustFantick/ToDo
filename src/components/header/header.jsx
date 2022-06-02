import React, { Component } from 'react';
import './header.less';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__title">
					<h1>Your`s day</h1>
					<p>date & time</p>
				</div>
				<div className="settings-button">
					<span></span>
				</div>
			</header>
		);
	}
}

export default Header;