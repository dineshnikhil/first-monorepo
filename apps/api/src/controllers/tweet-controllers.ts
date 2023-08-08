import { Request, Response } from 'express';
import TweetServices from '../services/tweet-services';
import { tweet } from 'common';

const tweetServices = new TweetServices();

const create = async (req: Request, res: Response) => {
	try {
		const resFromUser = {
			content: req.body.content,
			userId: req.headers['userId'],
		};
		const parsedInput = tweet.safeParse(resFromUser);
		if (parsedInput.success) {
			const tweet = await tweetServices.create(parsedInput.data);
			return res.status(201).json({
				data: tweet,
				message: 'successfully created the tweet..!',
				error: {},
			});
		} else {
			return res.status(411).json({
				data: {},
				message: 'validation error occur..!',
				error: parsedInput.error,
			});
		}
	} catch (error) {
		return res.status(400).json({
			data: {},
			message: 'unable to create the tweet.!',
			error: error,
		});
	}
};

const getTweets = async (req: Request, res: Response) => {
	try {
		const userIdFromClient: string = req.headers['userId'] as string;
		const tweets = await tweetServices.getTweets(userIdFromClient);
		return res.status(200).json({
			tweets: tweets,
			message: 'successfully fetched the tweets.!',
			error: {},
		});
	} catch (error) {
		return res.status(400).json({
			data: {},
			message: 'unable to fetch the tweets.!',
			error: error,
		});
	}
};

export default {
	create,
	getTweets,
};
