import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Nav } from 'ui';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';

function App() {
	return (
		<RecoilRoot>
			<Nav />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signin />} />
				</Routes>
			</div>
		</RecoilRoot>
	);
}

export default App;
