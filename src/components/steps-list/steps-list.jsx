import React, { Component } from 'react';
import Step from '../step/step.jsx';

class StepsList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			steps: this.props.steps
		}

	}
	

	render() {
		return (
			<ul className='steps-list'>
				{
					this.state.steps.map((step, index) => (
						<Step key={index} text={step} func={this.deleteStep} />
					))
				}
			</ul>
		);
	}
}

export default StepsList;