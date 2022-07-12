import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';
import AddFile from '../add-file/add-file.jsx';

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.openPopup = this.openPopup.bind(this);
	}

	openPopup() {
		document.querySelector('.popup').classList.add('active');
	}

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

						taskStatusChangeHandler={this.props.taskStatusChangeHandler}
					/>
					<AddFile deleteFile={this.props.deleteFile}
						onDropHandler={this.props.onDropHandler}
						addFile={this.props.addFile}
						tasksList={this.props.tasksList}
						currentTask={this.props.currentTask}
					/>

				</div>

				<div className='sidebar__bottom'>
					<div className='edditing-time'>
						Last edit: {
							this.props.tasksList[this.props.currentTask] ?
								this.props.tasksList[this.props.currentTask].lastEdit : ''
						}
					</div>
					<div onClick={this.openPopup} className='delete icon-bin'></div>
				</div>

			</aside>
		);
	}
}

export default Sidebar;