import React from "react";
import TodoPrivateWrapper from "./Todo/TodoWrapper";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
		return new ApolloClient({
		uri: 'https://humble-coyote-29.hasura.app/v1/graphql',
		cache: new InMemoryCache(),
		headers: {
		'content-type': 'application/json',
		'x-hasura-admin-secret': process.env.REACT_APP_CLIENT_SECRET
		}
		});
	};

const App = () => {
	const client = createApolloClient();
	return (
		<ApolloProvider client={client}>
		<div className="myclass">
			<div className="row container-fluid ">
				<div className="sliderMenu col-md-8 offset-md-2">
				<TodoPrivateWrapper /> 
				</div>
			</div>
		</div>
			</ApolloProvider>
	);
};

export default App;
