import React, { Component } from 'react';
import ChosenFile from '../chosen-file/chosen-file.jsx';

class AddFile extends Component {
	constructor(props) {
		super(props)

		this.dragStartHandler = this.dragStartHandler.bind(this);
		this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
	}

	dragStartHandler(e) {
		e.preventDefault();
		document.querySelector('.add-file').classList.add('active');

	}
	dragLeaveHandler(e) {
		e.preventDefault();
		document.querySelector('.add-file').classList.remove('active');
	}

	render() {
		return (
			<div className='add-file'>
				<div className='add-file__button'
					onDragStart={this.dragStartHandler}
					onDragLeave={this.dragLeaveHandler}
					onDragOver={this.dragStartHandler}
					onDrop={this.props.onDropHandler}
				>
					<label className='add-file__label' htmlFor='file'>
						Press or drop file here
					</label>
					<input className='add-file__input' type={'file'} name={'file'} />
				</div>
				<ul className='add-file__chosen'>
					{
						this.props.chosenFiles.map((file, index) => (
							<ChosenFile index={index} key={index}
								fileHref={this.props.filesURL[index]}
								fileName={file.name} func={this.props.deleteFile} />
						))
					}
				</ul>
			</div>

		);
	}
}

export default AddFile;