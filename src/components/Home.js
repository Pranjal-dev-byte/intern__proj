import React from 'react';
import './Home.css';

import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Schedule from './schedule';

const GET_SCHEDULES = gql`
	query getSchedules {
		schedules {
			id
			timeFrom
			mer1
			timeto
			mer2
			title
			date
			participants
		}
	}
`;
function Home() {
	const { loading, error, data } = useQuery(GET_SCHEDULES);
	if (loading) {
		return <div className="loading">Loading...</div>;
	}

	if (error) {
		return <div className="loading">Something Went wrong</div>;
	}

	return (
		<div className="home">
			<div className="header">Schedules</div>
			<div className="create-button">
				<button>
					<Link to="/step1">Create Schedule</Link>
				</button>
			</div>
			<main className="main">{data.schedules.map((item) => <Schedule key={item.id} data={item} />)}</main>
		</div>
	);
}

export default Home;
