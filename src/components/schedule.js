import React from 'react';
import './schedule.css';

function Schedule(props) {
	return (
		<div className="schedule">
			<div className="left">{props.data.date}</div>
			<div className="right">
				<div className="title">{props.data.title}</div>
				<div className="info">
					<div className="time">
						{props.data.timeFrom} {props.data.mer1} & {props.data.timeto} {props.data.mer2}
					</div>
					<div className="paticipants">{props.data.participants} participants</div>
				</div>
			</div>
		</div>
	);
}

export default Schedule;
