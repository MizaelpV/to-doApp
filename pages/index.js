import React from 'react';
import Head from 'next/head';
import App from '../components/App';
import axios from 'axios';

export async function getStaticProps() {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/todos'
	);
	let data = response.data.splice(0, 6);
	return {
		props: {
			data
		}
	};
}

function Home({ data }) {
	return (
		<>
			<Head>
				<title>🔥Infocasas-Frontend-Challenge🔥</title>
			</Head>
			<App data={data} />
		</>
	);
}

export default Home;
