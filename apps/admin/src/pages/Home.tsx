import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tweetType } from 'common';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		async function getTweets() {
			const response = await axios.get('http://localhost:3000/api/v1/tweet', {
				headers: {
					Authorization: token,
				},
			});
			setTweets(response.data.tweets);
		}

		if (!token) {
			navigate('/login');
		} else {
			getTweets();
		}
	}, []);

	return (
		<div>
			{tweets.map((tweet: tweetType) => {
				return <h1 key={Math.random()}>{tweet.content}</h1>;
			})}
		</div>
	);
};

export default Home;
