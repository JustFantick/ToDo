import React, { Component } from 'react';
import Task from '../task/task.jsx';

class TaskContainer extends Component {
	render() {
		return (
			<div className="tasks-container">
				<div className='tasks-container__body'>
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