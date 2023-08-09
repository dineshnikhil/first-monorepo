import React from 'react';

export const LoginForm: React.FC<{
	username: string;
	password: string;
	onLoginHandler: () => {};
}> = ({ username, password, onLoginHandler }) => {
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" ref={username} />

				<label htmlFor="password">Password</label>
				<input type="text" id="password" ref={password} />

				<button type="submit" onClick={onLoginHandler}>
					login
				</button>
			</form>
		</div>
	);
};
