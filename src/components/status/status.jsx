import React from 'react'
import './status.less';

export default function Status(props) {
	let statusChange = (e) => e.target.classList.toggle('done');

	let statusSize = {
		width: 'calc(' + props.mb + 'px' + ' + (' + props.pc + ' - ' + props.mb + ') * ((100vw - 320px) / (1280 - 320)))',
		height: 'calc(' + props.mb + 'px' + ' + (' + props.pc + ' - ' + props.mb + ') * ((100vw - 320px) / (1280 - 320)))'
	}
	return <div onClick={statusChange} className="status icon-tick" style={statusSize}></div>
}
