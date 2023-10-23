import React from 'react';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';

function Card(props) {
	return (
		<div className='card w-96 bg-base-100 shadow-xl' id='cardContainer'>
			<figure className='figureContainer'>
				<img src={props.imgSrc} alt={props.imgAlt} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{props.title}</h2>
				<div className='card-actions justify-end cardBtn'>
					{/*<div className='badge badge-outline'>Fashion</div>
					<div className='badge badge-outline'>Products</div>*/}
					<Link to={`/detail/${props.id}`} className='btnAction'>
						Show More
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card;
