import React from 'react'

export default function Header() {
	var options = {
		month: 'long',
		day: 'numeric',
		weekday: 'short',
	};
	return (
		<header className="header">
			<div className="header__title">
				<h1>Your`s day</h1>
				<p>{new Date().toLocaleString('en-EU', options)}</p>
			</div>
			<div className="settings-button">
				<span></span>
			</div>
		</header>
	)
}
