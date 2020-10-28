import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
				<div className="text-field">
					<label className="label" htmlFor="title">
						Title
					</label>
					<input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
				</div>
				<div className="date">
					<div className="label">Date</div>
					<div className="date-fields">
						<div className="date-field">
							<label className="label" htmlFor="day">
								Day
							</label>
							<input
								type="text"
								name="day"
								maxLength="2"
								size="2"
								onChange={(e) => setDay(e.target.value)}
							/>
						</div>
						<div className="date-field">
							<label className="label" htmlFor="month">
								Month
							</label>
							<input
								type="text"
								name="month"
								maxLength="2"
								size="2"
								onChange={(e) => setMonth(e.target.value)}
							/>
						</div>
						<div className="date-field">
							<label className="label" htmlFor="year">
								Year
							</label>
							<input
								type="text"
								name="year"
								maxLength="4"
								size="4"
								onChange={(e) => setYear(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
