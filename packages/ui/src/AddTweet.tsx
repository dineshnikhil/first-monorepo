import React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authState } from 'state';

export const AddTweet: React.FC = () => {
	const tweet = useRef<HTMLInputElement>(null);
	const authAtom = useRecoilValue(authState);

	const tweetAddHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		console.log(tweet.current?.value);
		const response = await axios.post(
			'http://localhost:3000/api/v1/tweet',
			{
				content: tweet.current?.value,
			},
			{
				headers: {
					Authorization: authAtom.token,
				},
			}
		);
		if (response) {
			window.location.reload();
		}
	};

	return (
		<div>
			<form>
				<input type="text" id="tweet" ref={tweet} />
				<button onClick={tweetAddHandler} type="submit">
					tweet.!
				</button>
			</form>
		</div>
	);
};
