import TweetRepository from '../repository/tweet-repository';
// import { tweetType } from '../../../common/src';
import { tweetType } from 'common';

class TweetServices {
	tweetRepository: TweetRepository;
	constructor() {
		this.tweetRepository = new TweetRepository();
	}

	async create(data: tweetType) {
		try {
			const tweet = await this.tweetRepository.create(data);
			return tweet;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			console.log(error);
		}
	}

	async getTweets(userId: string) {
		try {
			const tweets = await this.tweetRepository.getTweets(userId);
			return tweets;
		} catch (error) {
			console.log('Something went wrong in the service layer..!');
			console.log(error);
		}
	}
}

export default TweetServices;
