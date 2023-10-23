import React, { useEffect, useState } from 'react';
import { MOVIES_URL, API_IMG, SERIES_URL } from '../Config/TmdbAPI';
import Card from '../Components/Card';
import '../Styles/MoviesPage.css';
import Loading from '../Components/Loading';
import NotFound404 from './NotFound404';
import { useParams, useNavigate } from 'react-router-dom';

function SeriesPage() {
	const [series, setSeries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchMovie, setSearchMovie] = useState('');
	const { elementId, currentPage } = useParams();

	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${SERIES_URL}&page=${currentPage}`)
			.then((response) => response.json())
			.then((res) => {
				setSeries(res.results);
				setLoading(false);
			});
	}, [elementId, currentPage]);

	const handleSearch = (event) => {
		if (event.key === 'Enter') {
			setSearchMovie(event.target.value.toLowerCase());
			console.log(searchMovie);
			event.target.value = '';
		}
	};

	function handleNextPage() {
		const nextPage = parseInt(currentPage) + 1;
		navigate(`/series/page/${nextPage}`);
	}

	function handlePrevPage() {
		if (currentPage === '1') {
			return;
		} else {
			const prevPage = parseInt(currentPage) - 1;
			navigate(`/series/page/${prevPage}`);
		}
	}

	return (
		<>
			<input
				type='text'
				placeholder='Type here'
				className='input input-bordered searchBar'
				onKeyDown={handleSearch}
			/>
			<div className='gridContainer'>
				<div className='elementGrid'>
					{loading ? (
						<Loading className='loading' />
					) : series.length > 0 ? (
						series.map((series) => (
							<div key={series.id}>
								<Card
									imgSrc={API_IMG + series.poster_path}
									altId={series.id}
									title={series.name}
									options='series'
									elementId={series.id}
								/>
							</div>
						))
					) : (
						<NotFound404 />
					)}
				</div>
			</div>
			<div className='Paginator'>
				<div className='join'>
					<button className='join-item btn' onClick={handlePrevPage}>
						«
					</button>
					<button className='join-item btn'>{currentPage}</button>
					<button className='join-item btn' onClick={handleNextPage}>
						»
					</button>
				</div>
			</div>
		</>
	);
}

export default SeriesPage;
