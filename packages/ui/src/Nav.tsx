import React from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
	return (
		<nav>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/login">login</Link>
				<Link to="/signup">signup</Link>
			</div>
		</nav>
	);
};
