import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explorer from './components/Explorer';
import Pagination from './components/Pagination';


function App() {
	

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/explorer" element={<Explorer />}  />
					<Route path="/pagination" element={<Pagination />}  />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
