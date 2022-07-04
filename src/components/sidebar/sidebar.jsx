import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';
import AddFile from '../add-file/add-file.jsx';

class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<div className='sidebar__header'>
					<SidebarHeader
						tasksList={this.props.tasksList}
						currentTask={this.props.currentTask}
						addStep={this.props.addStep}
						deleteStep={this.props.deleteStep}
						onTitleChange={this.props.onTitleChange}
						onTaskStepChange={this.props.onTaskStepChange}
					/>
					<AddFile />

				</div>

				<div className='sidebar__bottom'>
					<div className='edditing-time'>Last edit: 12:35</div>
					<div className='delete icon-bin'></div>
				</div>

			</aside>
		);
	}
}

export default Sidebar;