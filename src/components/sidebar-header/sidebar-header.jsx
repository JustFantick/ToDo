import React, { Component } from 'react';
import Status from '../status/status.jsx';
import StepsList from '../steps-list/steps-list.jsx';
import Step from '../step/step.jsx';

class SidebarHeader extends Component {
	constructor(props) {
		super(props)
		this.state = { stepsList: ['Test step'] }
		this.addStep = this.addStep.bind(this);
		this.deleteStep = this.deleteStep.bind(this);
		this.interactInput = this.interactInput.bind(this);
	}
	addStep(e) {
		if (e.which === 13 && document.querySelector('.add-step__title').value !== '') {
			let temp = this.state.stepsList;
			temp.push(document.querySelector('.add-step__title').value);

			this.setState({
				stepsList: temp,
			})

			document.querySelector('.add-step__title').value = '';
		}
	}

	deleteStep(e) {
		if (e.target.classList.contains('delete-step')) {
			let value = e.target.closest('.step').querySelector('.step__title').innerText;
			let temp = this.state.stepsList;

			temp.splice(temp.indexOf(value), 1);

			this.setState({
				stepsList: temp,
			})
		}
	}

	interactInput(e) {
		let target = e.target;
		let plus = document.querySelector('.add-step__plus');
		let input = document.querySelector('.add-step__title');
		let parent = document.querySelector('.add-step');

		if (target === input || target === plus && !parent.classList.contains('focused')) {
			parent.classList.add('focused');
			input.focus();

			document.querySelector('.wrapper').addEventListener('click', function (e) {
				if (!e.target.closest('.add-step'))
					parent.classList.remove('focused');
			}, { 'once': true })
		} else if (target === plus && parent.classList.contains('focused')) {
			parent.classList.remove('focused');
			input.value = '';
		}
	}

	render() {
		return (
			<div className='sidebar-header'>
				<div className="sidebar-task">
					<Status mb={22} pc={30} />
					<div className="sidebar-task__title" contentEditable="true">Task name</div>
				</div>
				<ul className='steps-list'>
					{
						this.state.stepsList.map((step, index) => (
							<Step key={index} text={step} func={this.deleteStep} />
						))
					}
				</ul>

				<div className='add-step' onClick={this.interactInput}>
					<div className="add-step__plus" ></div>
					<input type={'text'} placeholder='Enter next task`s title' className="add-step__title" onKeyDown={this.addStep} />
				</div>
			</div>
		);
	}
}

export default SidebarHeader;