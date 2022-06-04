import React from 'react'

function Task(props) {
	let statusChange = (e) => e.target.classList.toggle('done');
	let starChange = (e) => e.target.classList.toggle('active');

	return (
		<div className='task'>
			<div onClick={statusChange} className="task__status" />
			<div className="task__title"> {props.title} </div>
			<div onClick={starChange} className="task__star">★</div>

		</div>
	)
}

export default Task;