import React from 'react';
import DeleteStep from '../delete-step/delete-step.jsx';
import './chosen-file.less'

export default function ChosenFile(props) {
	return (
		<li className='chosen-file' onClick={props.func} index={props.index}>
			<DeleteStep pc={23} mb={19} />
			<a className='chosen-file__name' href={props.fileHref} download>
				{props.fileName}
			</a>
		</li>
	)
}
