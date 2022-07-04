import React, { Component } from 'react';
import Status from '../status/status.jsx';
import StepsList from '../steps-list/steps-list.jsx';
import Step from '../step/step.jsx';

class SidebarHeader extends Component {
	constructor(props) {
		super(props)
		this.interactInput = this.interactInput.bind(this);
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
					<Status mb={22} pc={28} />
					<div className="sidebar-task__title"
						contentEditable="true"
						suppressContentEditableWarning="true"
						onBlur={this.props.onTitleChange}
					>
						{this.props.tasksList[this.props.currentTask].title}
					</div>
				</div>
				<ul className='steps-list'>
					{
						this.props.tasksList[this.props.currentTask].steps.map((step, index) => (
							<Step
								key={index}
								text={step}
								index={index}
								func={this.props.deleteStep}
								onTaskStepChange={this.props.onTaskStepChange}
							/>
						))
					}
				</ul>

				<div className='add-step' onClick={this.interactInput}>
					<div className="add-step__plus" ></div>
					<input type={'text'} placeholder='Enter next task`s title' className="add-step__title" onKeyDown={this.props.addStep} />
				</div>
			</div >
		);
	}
}

export default SidebarHeader;