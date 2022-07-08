import React, { Component } from 'react';

class Popup extends Component {
	constructor(props) {
		super(props)
		this.hidePopup = this.hidePopup.bind(this);
		this.outBodyClick = this.outBodyClick.bind(this);
	}

	hidePopup() {
		document.querySelector('.popup').classList.remove('active');
	}
	outBodyClick(e) {
		if (!e.target.closest('.popup__body')) this.hidePopup();
	}

	render() {
		return (
			<div className='popup' onClick={this.outBodyClick}>
				<div className="popup__body">
					<div className='popup__question'>
						You want to delete the "{this.props.tasksList[this.props.currentTask].title}", right?
					</div>
					<button onClick={this.props.removeTask}
						className='popup__right-btn'>Delete</button>
					<button onClick={this.hidePopup} className='popup__cancel-btn'>Cancel</button>
				</div>
			</div>
		);
	}
}

export default Popup;