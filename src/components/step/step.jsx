import React, { Component } from 'react';
import Status from '../status/status.jsx';

class Step extends Component {
	render() {
		return (
			<li className='step'>
				<Status pc={23} mb={15} />
				<div className="step__title" contentEditable="true">step name</div>
			</li>
		);
	}
}
export default Step;