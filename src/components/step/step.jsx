import React, { Component } from 'react';
import Status from '../status/status.jsx';
import DeleteStep from '../delete-step/delete-step.jsx';

class Step extends Component {
	constructor(props) {
		super(props)

		this.state = {
			stepText: this.props.text
		}
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleFocus(e) {
		e.target.closest('.step').querySelector('.step__btns').classList.add('active');
	}
	handleBlur(e) {
		e.target.closest('.step').querySelector('.step__btns').classList.remove('active');
	}

	render() {
		return (
			<li className='step'>
				<div className='step__btns'>
					<Status pc={23} mb={15} />
					<DeleteStep pc={23} mb={15} />
				</div>
				<div className="step__title" contentEditable="true" onFocus={this.handleFocus} onBlur={this.handleBlur}>{this.state.stepText}</div>
			</li>
		);
	}
}
export default Step;