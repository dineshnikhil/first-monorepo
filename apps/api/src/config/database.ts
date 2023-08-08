import mongoose from 'mongoose';

async function connect(): Promise<void> {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/twitter_dev');
		console.log('Connected to Mongo..!');
	} catch (error) {
		console.error('Error while connecting to Mongo,', error);
	}
}

export default connect;
