import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countdown from './components/Countdown';
import Dimensions from './components/Dimensions';
import GridLights from './components/GridLights';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu';
import Pagination from './components/Pagination';
import Progress from './components/Progress';
import Search from './components/Search';


function App() {
	

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/progress" element={<Progress />}  />
					<Route path="/pagination" element={<Pagination />}  />
					<Route path="/countdown" element={<Countdown />}  />
					<Route path="/search" element={<Search />}  />
					<Route path="/login" element={<LoginForm />}  />
					<Route path="/grid" element={<GridLights />}  />
					<Route path="/dimensions" element={<Dimensions />}  />
					<Route path="/menu" element={<Menu />}  />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
