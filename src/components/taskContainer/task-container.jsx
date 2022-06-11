import React, { Component } from 'react';
import Task from '../task/task.jsx';

class TaskContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tasks: this.props.tasks,
		}
	}

	render() {
		return (
			<div className="tasks-container">
				{
					this.state.tasks.map((title, index) => (
						<Task key={index} title={title} />
					))
				}
			</div>
		);
	}
}

export default TaskContainer;