import React from 'react';
import DeleteStep from '../delete-step/delete-step.jsx';
import './chosen-file.less'

export default function ChosenFile(props) {
	return (
		<li className='chosen-file' onClick={props.func}>
			<DeleteStep pc={23} mb={19} />
			<p className='chosen-file__name'>
				{props.fileName}
			</p>
		</li>
	)
}
