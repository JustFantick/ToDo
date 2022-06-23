import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';
import AddFile from '../add-file/add-file.jsx';

class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<div className='sidebar__header'>
					<SidebarHeader />
				</div>

				<div className='sidebar__add-file'>
					<AddFile />
				</div>

				<div className='sidebar__bottom'>
					<div className='edditing-time'></div>
					<div className='delete'></div>
				</div>

			</aside>
		);
	}
}

export default Sidebar;