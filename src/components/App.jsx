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
		this.onTaskTitleChange = this.onTaskTitleChange.bind(this);
		this.chooseTask = this.chooseTask.bind(this);

		this.state = {
			tasks:
				[{
					title: 'Test task',
					steps: ['test step'],
					files: [],
				},
				{
					title: 'Second task',
					steps: [],
					files: [],
				}],
			taskIndex: 0,
		}
	}

	// componentDidMount() {
	// 	let tasks = [
	// 		{
	// 			title: 'Test task',
	// 			steps: ['test step'],
	// 			files: [],
	// 		},
	// 		{
	// 			title: 'Second task',
	// 			steps: [],
	// 			files: [],
	// 		}
	// 	];
	// 	let temp = {
	// 		title: 'Third task',
	// 		steps: [],
	// 		files: [],
	// 	}

	// 	tasks.push(temp);
	// 	console.log(tasks);
	// }

	addStep(e) {
		if (e.which === 13 && document.querySelector('.add-step__title').value !== '') {
			let temp = this.state.tasks;
			let newSteps = this.state.tasks[this.state.taskIndex].steps;

			newSteps.push(document.querySelector('.add-step__title').value);
			temp[this.state.taskIndex].steps = newSteps;

			this.setState({ tasks: temp });

			document.querySelector('.add-step__title').value = '';
		}
	}

	deleteStep(e) {
		if (e.target.classList.contains('delete-step')) {
			let temp = this.state.tasks;

			let newSteps = this.state.tasks[this.state.taskIndex].steps;
			let value =
				e.target.closest('.step').querySelector('.step__title').innerText;
			newSteps.splice(temp.indexOf(value), 1);

			temp[this.state.taskIndex].steps = newSteps;

			this.setState({ tasks: temp })
		}
	}

	addTask(e) {
		if (e.which === 13 && document.querySelector('.add-task__title').value !== '') {
			let temp = this.state.tasks;
			let newTask = {
				title: document.querySelector('.add-task__title').value,
				steps: [],
				files: [],
			}
			temp.push(newTask);

			this.setState({ tasks: temp });

			document.querySelector('.add-task__title').value = '';
		}
	}

	onTaskTitleChange(e) {
		let temp = this.state.tasks;
		let changedTask = temp[this.state.taskIndex];
		changedTask.title = e.target.textContent;
		temp[this.state.taskIndex] = changedTask;

		this.setState({
			tasks: temp,
		})
		//косо-криво но работает
	}

	chooseTask(e) {
		let targetParent = e.target.closest('.task');

		if (!e.target.closest('.status') && !e.target.closest('.task__star')) {
			console.log(e.target);
			let targetIndex = targetParent.getAttribute('index');

			this.setState({ taskIndex: targetIndex })

			document.querySelectorAll('.task').forEach((task) => {
				task.classList.remove('active');
			});

			targetParent.classList.toggle('active');
			document.querySelector('.wrapper').classList.add('active');

			document.querySelector('.main').addEventListener('click', function (e) {
				if (!e.target.closest('.task')) {
					document.querySelector('.wrapper').classList.remove('active');
					document.querySelector('.main').removeEventListener('click', function (e) { })
				}
			});
		}
	}

	render() {
		return (
			<div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
				<Main tasksList={this.state.tasks}
					addTask={this.addTask}
					chooseTask={this.chooseTask} />

				<Sidebar
					tasksList={this.state.tasks}
					currentTask={this.state.taskIndex}
					onTitleChange={this.onTaskTitleChange}
					addStep={this.addStep}
					deleteStep={this.deleteStep}
				/>
			</div>
		);
	}
}

export default App;