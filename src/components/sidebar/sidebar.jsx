import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.openPopup = this.openPopup.bind(this);
	}

	openPopup() { document.querySelector('.popup').classList.add('active'); }

	componentDidMount() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
			.test(navigator.userAgent)) {
			let x1, y1;

			document.querySelector('.sidebar').addEventListener('touchstart', handleTouchStart);
			document.querySelector('.sidebar').addEventListener('touchmove', handleTouchMove);

			function handleTouchStart(e) {
				const firstTouch = e.touches[0];
				x1 = firstTouch.clientX;
				y1 = firstTouch.clientY;
			}

			function handleTouchMove(e) {
				let x2 = e.touches[0].clientX,
					y2 = e.touches[0].clientY,
					xDiff = x2 - x1,
					yDiff = y2 - y1;

				if (Math.abs(xDiff) > Math.abs(yDiff) && xDiff > 0) {
					document.querySelector('.wrapper').classList.remove('active');
					document.querySelectorAll('.task').forEach((task) => {
						task.classList.remove('active');
					});
				}
			}
		}
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
						stepStatusChangeHandler={this.props.stepStatusChangeHandler}
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