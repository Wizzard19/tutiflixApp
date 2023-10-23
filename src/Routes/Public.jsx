import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import MoviesPage from '../Pages/MoviesPage';
import SeriesPage from '../Pages/SeriesPage';
import NavBar from '../Components/NavBar';
import NotFound404 from '../Pages/NotFound404';
import DetailPage from '../Pages/DetailPage';
import Footer from '../Components/Footer';

function Public() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movies/page/:currentPage' element={<MoviesPage />} />
					<Route path='/series/page/:currentPage' element={<SeriesPage />} />
					<Route path='/detail:id' element={<DetailPage />} />
					<Route path='*' element={<NotFound404 />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default Public;
