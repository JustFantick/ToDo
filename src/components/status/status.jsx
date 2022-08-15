import React from 'react'
import './status.less';

export default function Status(props) {
	let statusSize = {
		width: 'calc(' + props.mb + 'px' + ' + (' + props.pc + ' - ' + props.mb + ') * ((100vw - 320px) / (1280 - 320)))',
		height: 'calc(' + props.mb + 'px' + ' + (' + props.pc + ' - ' + props.mb + ') * ((100vw - 320px) / (1280 - 320)))'
	}
	return (
		<div
			onClick={props.statusChangeHandler} style={statusSize}
			className={props.status ? "status ico-tick done" : "status icon-tick"} >
		</div>
	)
}