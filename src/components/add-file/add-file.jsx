import React, { Component } from 'react';
import ChosenFile from '../chosen-file/chosen-file.jsx';

class AddFile extends Component {
	constructor(props) {
		super(props)

		this.dragStartHandler = this.dragStartHandler.bind(this);
		this.dragLeaveHandler = this.dragLeaveHandler.bind(this);
		this.onDropHandler = this.onDropHandler.bind(this);
		this.deleteFile = this.deleteFile.bind(this);
		this.state = {
			chosenFiles: [],
		}
	}

	dragStartHandler(e) {
		e.preventDefault();
		document.querySelector('.add-file').classList.add('active');

	}
	dragLeaveHandler(e) {
		e.preventDefault();
		document.querySelector('.add-file').classList.remove('active');
	}
	onDropHandler(e) {
		e.preventDefault();
		let files = [...e.dataTransfer.files];
		let temp = this.state.chosenFiles;
		files.forEach(file => temp.push(file));
		this.setState({ chosenFiles: temp });
	}
	deleteFile(e) {
		let fileName = e.target.closest('.chosen-file').querySelector('.chosen-file__name').textContent;
		let temp = this.state.chosenFiles;

		temp.forEach(file => {
			if (file.name === fileName) {
				temp.splice(temp.indexOf(file), 1);
			}
		})

		this.setState({ chosenFiles: temp });
	}

	render() {
		return (
			<div className='add-file'>
				<div className='add-file__button'
					onDragStart={this.dragStartHandler}
					onDragLeave={this.dragLeaveHandler}
					onDragOver={this.dragStartHandler}
					onDrop={this.onDropHandler}
				>
					<label className='add-file__label' htmlFor='file'>
						Press or drop file here
					</label>
					<input className='add-file__input' type={'file'} name={'file'} />
				</div>
				<ul className='add-file__chosen'>
					{
						this.state.chosenFiles.map((file, index) => (
							<ChosenFile fileName={file.name} key={index} func={this.deleteFile} />
						))
					}
				</ul>
			</div>

		);
	}
}

export default AddFile;