import React from 'react'
import './status.less';

export default function Status(props) {
	let calc = 'calc(' + props.mb + 'px' + ' + (' + props.pc + ' - ' + props.mb + ') * ((100vw - 320px) / (1280 - 320)))';
	let statusSize = {
		width: calc,
		height: calc
	}
	return <div className="status" style={statusSize}></div>
}
