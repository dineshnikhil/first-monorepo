import React from 'react';

export const SignupForm: React.FC = () => {
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />

				<label htmlFor="email">Email</label>
				<input type="text" id="email" />

				<label htmlFor="password">Password</label>
				<input type="text" id="password" />

				<button type="submit">create account</button>
			</form>
		</div>
	);
};
