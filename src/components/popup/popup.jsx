import React, { Component } from 'react';

class Popup extends Component {
	render() {
		return (
			<div className='popup'>
				<div className="popup__body">
					<div className='popup__question'>
						You want to delete the "{this.props.tasksList[this.props.currentTask].title}", right?
					</div>
					<button type='submit' className='popup__right-btn'>Delete</button>
					<button type='submit' className='popup__cancel-btn'>Cancel</button>
				</div>
			</div>
		);
	}
}

export default Popup;