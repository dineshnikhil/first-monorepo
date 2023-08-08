import { z } from 'zod';

export const tweet = z.object({
	content: z.string(),
	userId: z.string(),
});

export const createUser = z.object({
	username: z.string(),
	email: z.string().email('Send the valid email..!'),
	password: z.string(),
});

export const signInUser = z.object({
	username: z.string(),
	password: z.string(),
});

export type tweetType = z.infer<typeof tweet>;
export type createUserType = z.infer<typeof createUser>;
export type signInUserType = z.infer<typeof signInUser>;
