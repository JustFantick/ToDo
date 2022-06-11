import React, { Component } from 'react';
import Header from '../header/header.jsx';
import AddTask from '../footer/footer.jsx';
import TaskContainer from '../taskContainer/task-container.jsx';

class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			taskTitles: ["Components from state"],
		}

		this.keyIdentify = this.keyIdentify.bind(this);
	}

	keyIdentify(e) {
		if (e.which === 13 && document.querySelector('.add-task__title').value !== '') {

			let temp = this.state.taskTitles;
			temp.push(document.querySelector('.add-task__title').value);

			this.setState({
				taskTitles: temp
			});
		}
	}

	render() {
		return (
			<main className="main">
				<Header />

				<TaskContainer tasks={this.state.taskTitles} />

				<AddTask func={this.keyIdentify} />
			</main>
		);
	}
}

export default Main;