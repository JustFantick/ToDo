import React, { Component } from 'react';
import Header from '../header/header.jsx';
import AddTask from '../add-task/add-task.jsx'
import TaskContainer from '../taskContainer/task-container.jsx';

class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			taskTitles: ["Test task"],
		}

		this.addTask = this.addTask.bind(this);
	}

	addTask(e) {
		if (e.which === 13 && document.querySelector('.add-task__title').value !== '') {

			let temp = this.state.taskTitles;
			temp.push(document.querySelector('.add-task__title').value);

			this.setState({
				taskTitles: temp
			});

			document.querySelector('.add-task__title').value = '';
		}
	}

	render() {
		return (
			<main className="main">
				<Header />

				<TaskContainer tasks={this.state.taskTitles} />

				<AddTask func={this.addTask} />
			</main>
		);
	}
}

export default Main;