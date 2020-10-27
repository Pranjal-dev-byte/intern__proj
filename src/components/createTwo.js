import React, { Component } from 'react';
import { gql, useMutation } from '@apollo/client';

const INSERT_SCHEDULE = gql`
	mutation InsertSchedule($timeFrom: String, $mer1: String, $timeto: String, $mer2: String) {
		insert_schedules(objects: { timeFrom: $timeFrom, mer1: $mer1, timeto: $timeto, mer2: $mer2 }) {
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
		hrfrom: 4,
		minfrom: 4,
		meridianFrom: '',
		hrto: 4,
		minto: 4,
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
				variables: { timeFrom: data.timefrom, mer1: data.meridian1, timeto: data.timeTo, mer2: data.meridian2 }
			});

			console.log(dataDB);
		};
		return (
			<div>
				<input
					type="number"
					value={this.state.hrfrom}
					onChange={(event) => this.setState({ hrfrom: event.target.value })}
					required
				/>
				<input
					type="number"
					value={this.state.minfrom}
					onChange={(event) => this.setState({ minfrom: event.target.value })}
					required
				/>
				<input
					type="text"
					value={this.state.meridianFrom}
					onChange={(event) => this.setState({ meridianFrom: event.target.value })}
					required
				/>
				<input
					type="number"
					value={this.state.hrto}
					onChange={(event) => this.setState({ hrto: event.target.value })}
					required
				/>
				<input
					type="number"
					value={this.state.minto}
					onChange={(event) => this.setState({ minto: event.target.value })}
					required
				/>
				<input
					type="text"
					value={this.state.meridianTo}
					onChange={(event) => this.setState({ meridianTo: event.target.value })}
					required
				/>
				<button onClick={onSubmit}>Go!</button>
			</div>
		);
	}
}
export default withMyHook(CreateScheduleOne);
