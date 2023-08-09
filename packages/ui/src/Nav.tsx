import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { authState } from 'state';

export const Nav: React.FC = () => {
	const authstate = useRecoilValue(authState);
	const setAuth = useSetRecoilState(authState);

	const navigate = useNavigate();

	const logoutHandler = () => {
		window.localStorage.removeItem('token');
		setAuth({
			token: '',
			username: '',
		});
		navigate('/login');
	};

	return (
		<nav>
			<div>
				<Link to="/">Home</Link>
			</div>
			{authstate.token === '' ? (
				<div>
					<Link to="/login">login</Link>
					<Link to="/signup">signup</Link>
				</div>
			) : (
				<div>
					<h2>{authstate.username}</h2>
					<button onClick={logoutHandler}>logout</button>
				</div>
			)}
		</nav>
	);
};
