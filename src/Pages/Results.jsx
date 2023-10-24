import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	API_IMG,
	API_KEY,
	MOVIES_SEARCH,
	SERIES_SEARCH,
} from '../Config/TmdbAPI';
import SearchCard from '../Components/searchCard';
import '../Styles/Results.css';

function Results() {
	const { query } = useParams();
	const [moviesData, setMoviesData] = useState([]);
	const [seriesData, setSeriesData] = useState([]);

	useEffect(() => {
		const movieResultURL = `${MOVIES_SEARCH}query=${query}&api_key=${API_KEY}&language=es-es`;

		fetch(movieResultURL)
			.then((response) => response.json())
			.then((res) => {
				setMoviesData(res.results);
				console.log(moviesData, 'this ', movieResultURL);
			});
	}, [query]);

	//fetch de series

	useEffect(() => {
		const seriesResultURL = `${SERIES_SEARCH}query=${query}&api_key=${API_KEY}&language=es-es`;

		fetch(seriesResultURL)
			.then((response) => response.json())
			.then((res) => {
				setSeriesData(res.results);
				console.log(seriesData, 'this ', seriesResultURL);
			});
	}, [query]);

	return (
		<div>
			<p className='searchCardTitle'>Movies</p>
			<section className='elementGrid'>
				{moviesData.slice(0, 12).map((movie) => (
					<SearchCard
						imgSrc={API_IMG + movie.poster_path}
						altImg={movie.id}
						title={movie.title}
						type='movies'
					/>
				))}
			</section>

			<p className='searchCardTitle'>Series</p>
			<section className='elementGrid'>
				{seriesData.slice(0, 12).map((series) => (
					<SearchCard
						imgSrc={API_IMG + series.poster_path}
						altImg={series.id}
						title={series.name}
						type='series'
					/>
				))}
			</section>
		</div>
	);
}

export default Results;
