import React, { Component } from 'react';
import background from "../img/bg1.webp"
import Main from "./main/main.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Popup from './popup/popup.jsx';

class App extends Component {
	constructor(props) {
		super(props)

		this.addStep = this.addStep.bind(this);
		this.deleteStep = this.deleteStep.bind(this);
		this.stepStatusChangeHandler = this.stepStatusChangeHandler.bind(this);


		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.chooseTask = this.chooseTask.bind(this);
		this.taskStatusChangeHandler = this.taskStatusChangeHandler.bind(this);
		this.refreshTasks = this.refreshTasks.bind(this);
		this.starStatusChange = this.starStatusChange.bind(this);

		this.onTaskTitleChange = this.onTaskTitleChange.bind(this);
		this.onTaskStepChange = this.onTaskStepChange.bind(this);
		this.updateEditingTime = this.updateEditingTime.bind(this);

		this.saveNote = this.saveNote.bind(this);

		this.state = {
			tasks:
				[{
					title: 'Test task',
					taskStatusDone: false,
					isImportant: true,
					steps: [{ stepDone: false, title: '1' }, { stepDone: false, title: '2' }],
					stepsNote: '',
					lastEdit: new Date().toLocaleString('ru', {
						hour: 'numeric',
						minute: 'numeric',	
					}),
				},
				{
					title: 'Second test task',
					taskStatusDone: false,
					isImportant: false,
					steps: [],
					stepsNote: '',
					lastEdit: new Date().toLocaleString('ru', {
						hour: 'numeric',
						minute: 'numeric',
					}),
				}],
			taskIndex: 0,
		}
	}
	componentDidUpdate() {
		let presentTasks = this.state.tasks;
		localStorage.setItem('tasks', JSON.stringify(presentTasks));
	}

	componentDidMount() {
		//everyday refresh tasks
		const currentDate = new Date().toLocaleString('en-EU', {
			month: 'long',
			day: 'numeric',
			weekday: 'short',
		});

		if (!localStorage.getItem('date')) {
			localStorage.setItem('date', JSON.stringify(currentDate));
		} else if (JSON.parse(localStorage.getItem('date')) !== currentDate) {
			let templateState = [{
				title: 'Test task',
				taskStatusDone: false,
				isImportant: false,
				steps: [{ stepDone: false, title: '1' }, { stepDone: false, title: '2' }],
				lastEdit: new Date().toLocaleString('ru', {
					hour: 'numeric',
					minute: 'numeric',
				}),
			},
			{
				title: 'Second test task',
				taskStatusDone: false,
				isImportant: false,
				steps: [],
				lastEdit: new Date().toLocaleString('ru', {
					hour: 'numeric',
					minute: 'numeric',
				}),
			}];
			this.setState({ tasks: templateState });
			this.componentDidUpdate();
			localStorage.setItem('date', JSON.stringify(currentDate));
		}

		//check on already created tasks, saved in LocalStorage;
		if (localStorage.getItem('tasks')) {
			let tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({ tasks: tasks });
		}
	}

	refreshTasks() {
		let templateState = [{
			title: 'Test task',
			taskStatusDone: false,
			isImportant: false,
			steps: [{ stepDone: false, title: '1' }, { stepDone: false, title: '2' }],
			stepsNote: '',
			lastEdit: new Date().toLocaleString('ru', {
				hour: 'numeric',
				minute: 'numeric',
			}),
		},
		{
			title: 'Second test task',
			taskStatusDone: false,
			isImportant: false,
			steps: [],
			stepsNote: '',
			lastEdit: new Date().toLocaleString('ru', {
				hour: 'numeric',
				minute: 'numeric',
			}),
		}];
		this.setState({ tasks: templateState });
	}

	taskStatusChangeHandler(e) {
		let temp = this.state.tasks;
		let index = e.target.closest('.task') ?
			e.target.closest('.task').getAttribute('index') : this.state.taskIndex;

		let prevStatus = temp[index].taskStatusDone;

		temp[index].taskStatusDone = !prevStatus;
		this.setState({ tasks: temp });
		this.updateEditingTime();
	}
	stepStatusChangeHandler(e) {
		let temp = this.state.tasks;
		let index = e.target.closest('.step').getAttribute('index');

		let prevStatus = temp[this.state.taskIndex].steps[index].stepDone;

		temp[this.state.taskIndex].steps[index].stepDone = !prevStatus;
		this.setState({ tasks: temp });
		this.updateEditingTime();
	}

	updateEditingTime() {
		let temp = this.state.tasks;
		temp[this.state.taskIndex].lastEdit = new Date().toLocaleString('ru', {
			hour: 'numeric',
			minute: 'numeric',
		});

		this.setState({ tasks: temp });
	}

	addStep(e) {
		if (e.which === 13 && document.querySelector('.add-step__title').value !== '') {
			let temp = this.state.tasks;
			let newSteps = this.state.tasks[this.state.taskIndex].steps;

			newSteps.push({
				stepDone: false,
				title: document.querySelector('.add-step__title').value
			});
			temp[this.state.taskIndex].steps = newSteps;

			this.setState({ tasks: temp });
			this.updateEditingTime();

			document.querySelector('.add-step__title').value = '';
		}
	}

	deleteStep(e) {
		if (e.target.classList.contains('delete-step')) {
			let temp = this.state.tasks;

			let newSteps = this.state.tasks[this.state.taskIndex].steps;
			let index = e.target.closest('.step').getAttribute('index');

			newSteps.splice(index, 1);

			temp[this.state.taskIndex].steps = newSteps;

			this.setState({ tasks: temp });
			this.updateEditingTime();
		}
	}

	addTask() {
		if (document.querySelector('.add-task__title').value !== '') {
			let temp = this.state.tasks;
			let newTask = {
				title: document.querySelector('.add-task__title').value,
				taskStatusDone: false,
				isImportant: false,
				steps: [],
				stepsNote: '',
				lastEdit: new Date().toLocaleString('ru', {
					hour: 'numeric',
					minute: 'numeric',
				}),
			}
			temp.push(newTask);

			console.log(document.querySelector('.add-task__title').value);
			this.setState({ tasks: temp });
			document.querySelector('.add-task__title').value = '';
		}
	}

	onTaskTitleChange(e) {
		let temp = this.state.tasks;
		temp[this.state.taskIndex].title = e.target.textContent;
		this.setState({ tasks: temp });
		this.updateEditingTime();
	}

	onTaskStepChange(e) {
		let temp = this.state.tasks;
		let currentStepIndex = e.target.closest('.step').getAttribute('index');
		temp[this.state.taskIndex].steps[currentStepIndex].title = e.target.textContent;
		this.setState({ tasks: temp });
		this.updateEditingTime();
	}

	chooseTask(e) {
		let targetParent = e.target.closest('.task');

		if (!e.target.closest('.status') && !e.target.closest('.task__star') && !targetParent.classList.contains('active')) {
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
		} else if (targetParent.classList.contains('active')) {
			document.querySelector('.wrapper').classList.remove('active');
			document.querySelectorAll('.task').forEach((task) => {
				task.classList.remove('active');
			});
		}
	}

	removeTask() {
		let temp = this.state.tasks;
		temp.splice(this.state.taskIndex, 1);

		document.querySelector('.wrapper').classList.remove('active');
		document.querySelector('.popup').classList.remove('active');
		document.querySelectorAll('.task').forEach((task) => {
			task.classList.remove('active');
		});

		this.setState({ tasks: temp });
	}

	saveNote(e) {
		let temp = this.state.tasks;
		temp[this.state.taskIndex].stepsNote = e.target.textContent;
		this.setState({ tasks: temp });
		this.updateEditingTime();
	}

	starStatusChange(index) {
		let temp = this.state.tasks;
		temp[index].isImportant = !temp[index].isImportant;
		this.setState({ tasks: temp });
		this.updateEditingTime();
	}

	render() {
		return (
			<div className="wrapper" style={{ backgroundImage: `url(${background})` }}>
				<Main tasksList={this.state.tasks}
					addTask={this.addTask}
					chooseTask={this.chooseTask}
					taskStatusChangeHandler={this.taskStatusChangeHandler}
					refreshTasks={this.refreshTasks}
					starStatusChange={this.starStatusChange}
				/>

				<Sidebar
					tasksList={this.state.tasks}
					currentTask={this.state.taskIndex}
					onTitleChange={this.onTaskTitleChange}
					onTaskStepChange={this.onTaskStepChange}

					taskStatusChangeHandler={this.taskStatusChangeHandler}

					addStep={this.addStep}
					deleteStep={this.deleteStep}
					stepStatusChangeHandler={this.stepStatusChangeHandler}

					saveNote={this.saveNote}
				/>

				<Popup tasksList={this.state.tasks}
					currentTask={this.state.taskIndex}
					removeTask={this.removeTask} />
			</div>
		);
	}
}

export default App;