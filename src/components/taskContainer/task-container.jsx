import React, { Component } from 'react';
import Task from '../task/task.jsx';

class TaskContainer extends Component {
	constructor(props) {
		super(props)
		this.scrollHandler = this.scrollHandler.bind(this);
	}

	componentDidMount() {
		let headerHeight = document.querySelector('.header').offsetHeight;

		this.taskContainerBody = document.querySelector('.tasks-container__body');
		this.taskContainerBody.style.paddingTop = headerHeight + 'px';
	}

	scrollHandler() {
		let header = document.querySelector('.header');
		let main = document.querySelector('.main');

		if (this.taskContainerBody.scrollTop > main.clientTop) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	}

	render() {
		return (
			<div className="tasks-container">
				<div
					className='tasks-container__body'
					onScroll={this.scrollHandler}
				>
					{
						this.props.tasks.map((task, index) => (
							<Task key={index} index={index} title={task.title} chooseTask={this.props.chooseTask}
								taskStatusChangeHandler={this.props.taskStatusChangeHandler}
								taskStatus={this.props.tasks[index].taskStatusDone} />
						))
					}
				</div>
			</div>
		);
	}
}

export default TaskContainer;