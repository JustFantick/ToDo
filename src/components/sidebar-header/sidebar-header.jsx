import React, { Component } from 'react';
import Status from '../status/status.jsx';
import StepsList from '../steps-list/steps-list.jsx';

class SidebarHeader extends Component {
	constructor(props) {
		super(props)
		this.state = { stepsList: ['Test step'] }
		this.addStep = this.addStep.bind(this);
	}
	addStep(e) {
		if (e.which === 13 && document.querySelector('.add-step__title').value !== '') {
			let temp = this.state.stepsList;
			temp.push(document.querySelector('.add-step__title').value);

			this.setState({
				stepsList: temp,
			})
		}
	}

	render() {
		return (
			<div className='sidebar-header'>
				<div className="sidebar-task">
					<Status mb={22} pc={30} />
					<div className="sidebar-task__title" contentEditable="true">Task name</div>
				</div>
				<StepsList steps={this.state.stepsList} />

				<div className='add-step'>
					<div className="add-step__plus"></div>
					<input type={'text'} placeholder='Enter next task`s title' className="add-step__title" onKeyDown={this.addStep} />
				</div>
			</div>
		);
	}
}

export default SidebarHeader;