import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
	API_IMG,
	API_KEY,
	MOVIES_DETAIL,
	SERIES_DETAIL,
} from '../Config/TmdbAPI';
import Loading from '../Components/Loading';
import '../Styles/DetailPage.css';

function DetailPage() {
	const { elementId, options } = useParams();
	const [details, setDetails] = useState({});
	const [loading, setLoading] = useState(true);
	const apiType = options === 'movies' ? MOVIES_DETAIL : SERIES_DETAIL;

	useEffect(() => {
		const detailURL = `${apiType}${elementId}?api_key=${API_KEY}&language=es-es`;

		fetch(detailURL)
			.then((response) => response.json())
			.then((res) => {
				setDetails(res);
				setLoading(false);
				console.log(detailURL);
			});
	}, [elementId, apiType]);

	console.log(options);

	return (
		<div className='detailContainer'>
			{loading ? (
				<Loading />
			) : (
				<div className='card card-side bg-base-100 shadow-xl'>
					<img
						className='backgroundImg'
						src={API_IMG + details.backdrop_path}
						alt={details.id}
					/>
					<div className='card-body'>
						<h2 className='card-title detailTitle'>{details.title}</h2>
						{details.overview ? (
							<div>
								<p className='detailOverview'>{details.overview}</p>

								<div className='companies'>
									{details.production_companies &&
									details.production_companies.length > 0 ? (
										<>
											{details.production_companies[0] &&
											details.production_companies[0].name ? (
												<img
													src={
														API_IMG + details.production_companies[0].logo_path
													}
													alt={details.production_companies[0].id}
													className='companyImg'
												/>
											) : (
												<p>No company name available</p>
											)}

											{details.production_companies[1] &&
											details.production_companies[1].name ? (
												<img
													src={
														API_IMG + details.production_companies[1].logo_path
													}
													alt={details.production_companies[1].id}
													className='companyImg'
												/>
											) : (
												<p>No company name available</p>
											)}
										</>
									) : (
										<p>No production companies available</p>
									)}
								</div>

								<div className='genres'>
									<p>GENRES</p>
									{details.genres.map((genre) => (
										<div
											className='badge badge-accent badge-outline'
											key={genre.id}>
											{genre.name}
										</div>
									))}
								</div>
							</div>
						) : (
							<div className='errorMesagge'>
								<p>No overview data available in the API</p>
							</div>
						)}

						<div className='card-actions justify-end'>
							<button className='btn btn-outline btn-accent'>
								<Link to={`/${options}/page/${elementId}`}>Back</Link>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default DetailPage;
