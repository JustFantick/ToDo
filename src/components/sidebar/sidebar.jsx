import React, { Component } from 'react';
import SidebarHeader from '../sidebar-header/sidebar-header.jsx';
import Notes from '../notes/notes.jsx';

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.openPopup = this.openPopup.bind(this);
		this.hideSidebar = this.hideSidebar.bind(this);
		this.state = { isPc: true };
	}

	openPopup() {
		document.querySelector('.popup').classList.add('active');
		if (this.state.isPc) {
			window.addEventListener("keyup", (e) => {
				if (e.keyCode == 27) document.querySelector('.popup').classList.remove('active');
			}, { once: true });
		}
	}

	hideSidebar() {
		document.querySelector('.wrapper').classList.remove('active');
		document.querySelectorAll('.task').forEach((task) => {
			task.classList.remove('active');
		});
	}
	componentDidMount() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
			.test(navigator.userAgent)) {
			this.setState({
				isPc: false
			});
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

					<Notes saveNote={this.props.saveNote}
						noteText={this.props.tasksList[this.props.currentTask] ?
							this.props.tasksList[this.props.currentTask].stepsNote : ''} />

				</div>

				<div className='sidebar__bottom'>
					<div className='ico-back-Btn' onClick={this.hideSidebar}></div>
					<div className='edditing-time'>
						Last edit: {
							this.props.tasksList[this.props.currentTask] ?
								this.props.tasksList[this.props.currentTask].lastEdit : ''
						}
					</div>
					<div onClick={this.openPopup} className='delete ico-bin'></div>
				</div>

			</aside>
		);
	}
}

export default Sidebar;