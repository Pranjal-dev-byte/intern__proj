import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './createOne.css';

function Home() {
	const [ title, setTitle ] = useState('');
	const [ day, setDay ] = useState('');
	const [ month, setMonth ] = useState('');
	const [ year, setYear ] = useState('');
	function Clickme() {
		return {
			title: title,
			date: `${day}-${month}-${year}`
		};
	}
	return (
		<div>
			<div className="header">New Schedule - Step 1</div>
			<div className="create-button">
				<button>
					<Link
						to={{
							pathname: '/step2',
							data: Clickme()
						}}
					>
						Next
					</Link>
				</button>
			</div>
			<div className="main">
				<div className="main__column">
					<div className="start__field">
						<div className="start__field--wrap">
							<label className="label" htmlFor="title">
								Title
							</label>
							<br />
							<input
								className="field__title"
								type="text"
								name="title"
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
						</div>
					</div>
				</div>
				<div className="main__column">
					<p>Date</p>
					<div className="start__field">
						<div className="start__field--wrap">
							<label className="label" htmlFor="day">
								Day
							</label>
							<input
								className="field"
								type="text"
								name="day"
								maxLength="2"
								size="2"
								onChange={(e) => setDay(e.target.value)}
								required
							/>
						</div>
						<div className="start__field--wrap">
							<label className="label" htmlFor="month">
								Month
							</label>
							<input
								className="field"
								type="text"
								name="month"
								maxLength="3"
								size="3"
								onChange={(e) => setMonth(e.target.value)}
								required
							/>
						</div>
						<div className="start__field--wrap">
							<label className="label" htmlFor="year">
								Year
							</label>
							<input
								className="field"
								type="text"
								name="year"
								maxLength="4"
								size="4"
								onChange={(e) => setYear(e.target.value)}
								required
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
