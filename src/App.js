import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countdown from './components/Countdown';
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
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
