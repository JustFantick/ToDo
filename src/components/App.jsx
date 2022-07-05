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
		this.onTaskStepChange = this.onTaskStepChange.bind(this);
		this.chooseTask = this.chooseTask.bind(this);

		this.deleteFile = this.deleteFile.bind(this);
		this.onDropHandler = this.onDropHandler.bind(this);

		this.state = {
			tasks:
				[{
					title: 'Test task',
					steps: ['1', '2', '2'],
					files: [],
				},
				{
					title: 'Second task',
					steps: [],
					files: [],
				}],
			taskIndex: 0,
			chosenFiles: [],
			filesURL: [],
		}
	}

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
		temp[this.state.taskIndex].title = e.target.textContent;
		this.setState({ tasks: temp });
	}

	onTaskStepChange(e) {
		let temp = this.state.tasks;
		let currentStepIndex = e.target.closest('.step').getAttribute('index');
		temp[this.state.taskIndex].steps[currentStepIndex] = e.target.textContent;
		this.setState({ tasks: temp });
	}

	chooseTask(e) {
		let targetParent = e.target.closest('.task');

		if (!e.target.closest('.status') && !e.target.closest('.task__star')) {
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
					document.querySelectorAll('.task').forEach((task) => {
						task.classList.remove('active');
					});
					document.querySelector('.main').removeEventListener('click', function (e) { })
				}
			});
		}
	}

	deleteFile(e) {
		if (e.target.closest('.delete-step')) {
			let temp = this.state.chosenFiles;

			let index = e.target.closest('.chosen-file').getAttribute('index');

			temp.splice(index, 1);

			this.setState({ chosenFiles: temp });
		}
	}
	onDropHandler(e) {
		e.preventDefault();
		let files = [...e.dataTransfer.files];
		let temp = this.state.chosenFiles;
		let tempURL = this.state.filesURL;

		files.forEach(file => {
			temp.push(file);

			let fileURL = URL.createObjectURL(file);
			tempURL.push(fileURL);
		});

		this.setState({
			chosenFiles: temp,
			filesURL: tempURL,
		});
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
					onTaskStepChange={this.onTaskStepChange}
					addStep={this.addStep}
					deleteStep={this.deleteStep}

					deleteFile={this.deleteFile}
					onDropHandler={this.onDropHandler}
					chosenFiles={this.state.chosenFiles}
					filesURL={this.state.filesURL}
				/>
			</div>
		);
	}
}

export default App;