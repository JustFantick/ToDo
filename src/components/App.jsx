import React, { Component } from 'react';
import background from "../img/bg1.jpg"
import Main from "./main/main.jsx";
import Sidebar from "./sidebar/sidebar.jsx";

class App extends Component {
	constructor(props) {
		super(props)
		this.addStep = this.addStep.bind(this);
		this.deleteStep = this.deleteStep.bind(this);
		this.addTask = this.addTask.bind(this);
		this.titlesChangeHandler = this.titlesChangeHandler.bind(this);

		this.state = {
			stepsList: ['Test step'],
			tasksList: ["Test task"]
		}
	}
	titlesChangeHandler(e) {
		//Реализовать после того как будет 
		//сделано "открытие" доп - меню таска
	}

	addStep(e) {
		if (e.which === 13 && document.querySelector('.add-step__title').value !== '') {
			let temp = this.state.stepsList;
			temp.push(document.querySelector('.add-step__title').value);

			this.setState({
				stepsList: temp,
			})

			document.querySelector('.add-step__title').value = '';
		}
	}

	deleteStep(e) {
		if (e.target.classList.contains('delete-step')) {
			let value = e.target.closest('.step').querySelector('.step__title').innerText;
			let temp = this.state.stepsList;

			temp.splice(temp.indexOf(value), 1);

			this.setState({
				stepsList: temp,
			})
		}
	}

	addTask(e) {
		if (e.which === 13 && document.querySelector('.add-task__title').value !== '') {

			let temp = this.state.tasksList;
			temp.push(document.querySelector('.add-task__title').value);

			this.setState({
				tasksList: temp
			});

			document.querySelector('.add-task__title').value = '';
		}
	}

	render() {
		return (
			<div className="wrapper active" style={{ backgroundImage: `url(${background})` }}>
				<Main tasksList={this.state.tasksList} addTask={this.addTask} />

				<Sidebar
					stepsList={this.state.stepsList}
					addStep={this.addStep}
					deleteStep={this.deleteStep}
				/>
			</div>
		);
	}
}

export default App;