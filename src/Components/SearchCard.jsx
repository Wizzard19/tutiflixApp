import React, { useState } from 'react';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';

function SearchCard(props) {
	const [isFavorite, setIsFavorite] = useState(true);

	return (
		<div className='card w-96 bg-base-100 shadow-xl' id='cardContainer'>
			<figure className='figureContainer'>
				<img src={props.imgSrc} alt={props.imgAlt} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{props.title || props.name}</h2>
				<div className='card-actions justify-end cardBtn'>
					<button
						style={{
							color: isFavorite ? 'red' : 'white',
						}}>
						{isFavorite ? '❤' : '🤍'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default SearchCard;
