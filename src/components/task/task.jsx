import React, { Component } from 'react';

class Task extends Component {
	render() {
		return (
			<div className='task'>
				<div class="task__status"></div>
				<div class="task__title">
					Task text
				</div>
				<div class="task__star">★</div>

			</div>
		);
	}
}

export default Task;