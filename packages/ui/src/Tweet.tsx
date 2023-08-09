import React from 'react';

import { tweetType } from 'common';

export const Tweet: React.FC<{ tweet: tweetType }> = ({ tweet }) => {
	return (
		<div
			style={{
				padding: '1rem',
			}}
		>
			<span>{tweet.content}</span>
			<button>edit</button>
			<button>delete</button>
		</div>
	);
};
