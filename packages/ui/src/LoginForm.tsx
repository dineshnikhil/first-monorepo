import React from 'react';

export const LoginForm: React.FC<{
	username: string;
	password: string;
	onLoginHandler: () => {};
}> = ({ username, password, onLoginHandler }) => {
	return (
		<div>
			<form>
				<label htmlFor="username" ref={username}>
					Username
				</label>
				<input type="text" id="username" />

				<label htmlFor="password" ref={password}>
					Password
				</label>
				<input type="text" id="password" />

				<button type="submit" onClick={onLoginHandler}>
					login
				</button>
			</form>
		</div>
	);
};
