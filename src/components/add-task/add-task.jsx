import React, { Component } from 'react';

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.interactBlock = this.interactBlock.bind(this);
		this.inputEnterHandler = this.inputEnterHandler.bind(this);
	}

	interactBlock(e) {
		let target = e.target;
		let plus = document.querySelector('.add-task__plus');
		let input = document.querySelector('.add-task__title');
		let parent = document.querySelector('.add-task');

		if (target === input || target === plus && !parent.classList.contains('focused')) {
			parent.classList.add('focused');
			input.focus();

			document.querySelector('.wrapper').addEventListener('click', function (e) {
				if (!e.target.closest('.add-task'))
					parent.classList.remove('focused');
			}, { 'once': true })
		} else if (target === plus && parent.classList.contains('focused')) {
			parent.classList.remove('focused');
			input.value = '';
		}
	}

	inputEnterHandler(e) {
		if (e.which === 13) {
			this.props.addTask();
		}
	}

	render() {
		return (
			<footer className='add-task' onClick={this.interactBlock}>
				<div className="add-task__plus"></div>
				<input type={'text'} className="add-task__title"
					name='taskName' onKeyDown={this.inputEnterHandler}
					placeholder='Enter next task`s title'
				/>
				<div className='add-task__send-icon icon-send' onClick={this.props.addTask}></div>

			</footer>
		);
	}
}

export default AddTask;