import React, { Component } from 'react';
import Header from '../header/header.jsx';
import Task from '../task/task.jsx';
import AddTask from '../footer/footer.jsx';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<Header />

				<div className="tasks-container">
					<Task title={"Title from props"} />
					<Task title={"Second task"} />
					<Task title={"Thirs task"} />

				</div>

				<AddTask />
			</main>
		);
	}
}

export default Main;