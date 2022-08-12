import React, { Component } from 'react';

class Notes extends Component {
	render() {
		return (
			<div className='sidebar-notes'
				data-text="Add notes"
				contentEditable="true"
				tabIndex={-1}
				suppressContentEditableWarning="true"
				onBlur={this.props.saveNote}>
				{this.props.noteText}
			</div>
		);
	}
}

export default Notes;