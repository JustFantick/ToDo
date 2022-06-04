import React from 'react'

function AddTask() {
	function handleClick(e) {
		let target = e.target;
		let plus = document.querySelector('.add-task__plus');
		let input = document.querySelector('.add-task__title');
		let parent = document.querySelector('.add-task');

		if (target === input || target === plus && !parent.classList.contains('focused')) {
			parent.classList.add('focused');
			input.focus();

			document.querySelector('.wrapper').addEventListener('click', function (e) {
				if (!e.target.closest('.add-task'))
					parent.classList.remove('focused');
			}, { 'once': true })
		} else if (target === plus && parent.classList.contains('focused')) {
			parent.classList.remove('focused');
			input.value = '';
		}
	}

	function unFocus(e) {
		document.querySelector(".add-task").classList.remove('focused');
	}

	return (
		<footer className='add-task' onClick={handleClick}>
			<div className="add-task__plus"></div>
			<input type={"text"} placeholder='Enter next task`s title' className="add-task__title" />

		</footer>
	)
}

export default AddTask;
