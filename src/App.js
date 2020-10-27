import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateScheduleOne from './components/createOne';
import Home from './components/Home';
import CreateScheduleTwo from './components/createTwo';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://pleasing-gobbler-63.hasura.app/v1/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="app">
				<BrowserRouter>
					<Route path="/" exact component={Home} />
					<Route path="/step1" component={CreateScheduleOne} />
					<Route path="/step2" component={CreateScheduleTwo} />
				</BrowserRouter>
			</div>
		</ApolloProvider>
	);
}

export default App;
