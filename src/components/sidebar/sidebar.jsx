import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';

class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<SidebarHeader />

				<div className='add-file'></div>
				<div className='sidebar__bottom'>
					<div className='edditing-time'></div>
					<div className='delete'></div>
				</div>

			</aside>
		);
	}
}

export default Sidebar;