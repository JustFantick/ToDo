import React, { Component } from 'react';
import Step from '../step/step.jsx';
import Status from '../status/status.jsx';

class SidebarHeader extends Component {
	render() {
		return (
			<div className='sidebar-header'>
				<div className="sidebar-task">
					<Status mb={22} pc={30} />
					<div className="sidebar-task__title" contentEditable="true">Task name</div>
				</div>
				<ul className='steps-list'>
					<Step />
					<Step />
					<Step />
				</ul>
				<div className='add-step'>
					<div className="add-step__plus"></div>
					<input type={'text'} placeholder='Enter next task`s title' className="add-step__title" />
				</div>
			</div>
		);
	}
}

export default SidebarHeader;