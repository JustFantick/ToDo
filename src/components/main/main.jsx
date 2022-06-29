import React, { Component } from 'react';
import Header from '../header/header.jsx';
import AddTask from '../add-task/add-task.jsx'
import TaskContainer from '../taskContainer/task-container.jsx';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<Header />

				<TaskContainer tasks={this.props.tasksList} />

				<AddTask func={this.props.addTask} />
			</main>
		);
	}
}

export default Main;