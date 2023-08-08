import mongoose from 'mongoose';
import { z } from 'zod';
// import { tweetType } from '../../../common/src';
import { tweetType } from 'common';

// defining the tweet model schema.
const tweetSchema = new mongoose.Schema<tweetType>(
	{
		content: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
		},
	},
	{ timestamps: true }
);

// creating the tweet model.
const Tweet = mongoose.model<tweetType>('tweet', tweetSchema);

export default Tweet;
