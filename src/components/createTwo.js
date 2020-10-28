import React, { Component } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import './createTwo.css';

const INSERT_SCHEDULE = gql`
	mutation InsertSchedule(
		$timeFrom: String
		$mer1: String
		$timeto: String
		$mer2: String
		$title: String
		$date: String
		$participants: Int
	) {
		insert_schedules(
			objects: {
				timeFrom: $timeFrom
				mer1: $mer1
				timeto: $timeto
				mer2: $mer2
				title: $title
				date: $date
				participants: $participants
			}
		) {
			returning {
				id
			}
		}
	}
`;

function withMyHook(Component) {
	return function WrappedComponent(props) {
		const [ insertSchedule ] = useMutation(INSERT_SCHEDULE);
		return <Component {...props} myHookValue={insertSchedule} />;
	};
}

class CreateScheduleOne extends Component {
	state = {
		hrfrom: null,
		minfrom: null,
		meridianFrom: '',
		hrto: null,
		minto: null,
		meridianTo: ''
	};
	render() {
		const { data } = this.props.location;
		const onSubmit = async () => {
			let insertSchedule = this.props.myHookValue;
			data['timefrom'] = `${this.state.hrfrom % 12}:${this.state.minfrom}`;
			data['meridian1'] = this.state.meridianFrom;
			data['timeTo'] = `${this.state.hrto % 12}:${this.state.minto}`;
			data['meridian2'] = this.state.meridianTo;
			data['participants'] = Math.floor(Math.random() * 100);

			const { dataDB } = await insertSchedule({
				variables: {
					timeFrom: data.timefrom,
					mer1: data.meridian1,
					timeto: data.timeTo,
					mer2: data.meridian2,
					title: data.title,
					date: data.date,
					participants: data.participants
				}
			});

			console.log(dataDB);
		};
		return (
			<div>
				<div className="header">New Schedule - Step 2</div>
				<div className="create-button">
					<button onClick={onSubmit}>
						<Link to="/">Create</Link>
					</button>
				</div>
				<div className="main">
					<div className="main__column">
						<p>Start Time</p>
						<div className="start__field">
							<div className="start__field--wrap">
								<label className="label" htmlFor="hour">
									Hr
								</label>
								<input
									className="field"
									name="hour"
									type="text"
									value={this.state.hrfrom}
									onChange={(event) => this.setState({ hrfrom: event.target.value })}
									required
								/>
							</div>
							<div className="start__field--wrap">
								<label className="label" htmlFor="min">
									Min
								</label>
								<input
									className="field"
									name="min"
									type="text"
									value={this.state.minfrom}
									onChange={(event) => this.setState({ minfrom: event.target.value })}
									required
								/>
							</div>
							<div className="start__field--wrap">
								<label className="label" htmlFor="mer-1">
									AM/PM
								</label>
								<input
									className="field"
									name="mer-1"
									type="text"
									value={this.state.meridianFrom}
									onChange={(event) => this.setState({ meridianFrom: event.target.value })}
									required
								/>
							</div>
						</div>
					</div>
					<div className="main__column">
						<p>End Time</p>
						<div className="start__field">
							<div className="start__field--wrap">
								<label className="label" htmlFor="hour-1">
									Hr
								</label>
								<input
									className="field"
									name="hour-1"
									type="text"
									value={this.state.hrto}
									onChange={(event) => this.setState({ hrto: event.target.value })}
									required
								/>
							</div>
							<div className="start__field--wrap">
								<label className="label" htmlFor="min-1">
									Min
								</label>
								<input
									className="field"
									name="min-1"
									type="text"
									value={this.state.minto}
									onChange={(event) => this.setState({ minto: event.target.value })}
									required
								/>
							</div>
							<div className="start__field--wrap">
								<label className="label" htmlFor="mer-2">
									AM/PM
								</label>
								<input
									className="field"
									name="mer-2"
									type="text"
									value={this.state.meridianTo}
									onChange={(event) => this.setState({ meridianTo: event.target.value })}
									required
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withMyHook(CreateScheduleOne);
