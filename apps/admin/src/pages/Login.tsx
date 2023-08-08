import * as React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signInUser } from 'common';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const loginSubmitHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		// const pasedInput = signInUser.safeParse({
		// 	username: username.current?.value,
		// 	password: password.current?.value,
		// });
		// if (pasedInput.success) {
		// 	const response = await axios.post(
		// 		'http://localhost:3000/api/v1/signin',
		// 		pasedInput.data
		// 	);
		// 	if (response.data.token) {
		// 		window.localStorage.setItem('token', response.data.token);
		// 		navigate('/');
		// 	} else {
		// 		window.alert('wrong input..!');
		// 	}
		// } else {
		// 	window.alert('wrong input..!');
		// }
		const response = await axios.post('http://localhost:3000/api/v1/signin', {
			username: username.current?.value,
			password: password.current?.value,
		});

		if (response.data.token) {
			window.localStorage.setItem('token', response.data.token);
			navigate('/');
		} else {
			window.alert('wrong input..!');
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={loginSubmitHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" ref={username} />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" ref={password} />
				<button type="submit">login</button>
			</form>
		</div>
	);
};

export default Login;
