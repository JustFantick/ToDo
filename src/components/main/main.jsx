import React, { Component } from 'react';
import Header from '../header/header.jsx';
import Task from '../task/task.jsx';

class Main extends Component {
	render() {
		return (
			<main className="main">
				<Header />

				<div className="tasks-container">
					<Task />
				</div>

				<footer className="add-task">

				</footer>
			</main>
		);
	}
}

export default Main;