import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';
import AddFile from '../add-file/add-file.jsx';

class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<div className='sidebar__header'>
					<SidebarHeader
						stepsList={this.props.stepsList}
						addStep={this.props.addStep}
						deleteStep={this.props.deleteStep}
					/>
				</div>

				<div className='sidebar__add-file'>
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