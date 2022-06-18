import React from 'react'
import Status from '../status/status.jsx';

function Task(props) {
	let starChange = (e) => e.target.classList.toggle('active');

	return (
		<div className='task'>
			<Status pc={25} mb={20} />
			<div className="task__title"> {props.title} </div>
			<div onClick={starChange} className="task__star">★</div>

		</div>
	)
}

export default Task;