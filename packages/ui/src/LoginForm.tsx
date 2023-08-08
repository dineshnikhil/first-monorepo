import React from 'react';

export const LoginForm: React.FC = () => {
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />

				<label htmlFor="password">Password</label>
				<input type="text" id="password" />
				<button type="submit">login</button>
			</form>
		</div>
	);
};
