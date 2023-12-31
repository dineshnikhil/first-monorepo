import * as React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tweetType } from 'common';
import { authState } from 'state';
import { AddTweet, Tweet } from 'ui';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [tweets, setTweets] = useState([]);
	const authstate = useRecoilValue(authState);
	const setAuth = useSetRecoilState(authState);

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		async function getTweets() {
			const response = await axios.get('http://localhost:3000/api/v1/tweet', {
				headers: {
					Authorization: token,
				},
			});
			setAuth({ token: token as string, username: response.data.username });
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
			<div>
				<h2>username: {authstate.username}</h2>
				<AddTweet />
			</div>
			{tweets.map((tweet: tweetType) => {
				return <Tweet key={Math.random()} tweet={tweet} />;
			})}
		</div>
	);
};

export default Home;
