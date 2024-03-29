import React, { Component } from 'react';
import Header from '../header/header.jsx';
import AddTask from '../add-task/add-task.jsx'
import TaskContainer from '../taskContainer/task-container.jsx';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<Header refreshTasks={this.props.refreshTasks} />

				<TaskContainer tasks={this.props.tasksList}
					chooseTask={this.props.chooseTask}
					starStatusChange={this.props.starStatusChange}
					taskStatusChangeHandler={this.props.taskStatusChangeHandler} />

				<AddTask addTask={this.props.addTask} />
			</main>
		);
	}
}

export default Main;