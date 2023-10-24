import React from 'react';
import '../Styles/NotFound404.css';
import sw from '../assets/sw.png';
import { Link } from 'react-router-dom';
function NotFound404() {
	return (
		<div className='errorContainer'>
			<p className='upperText'>i have a bad feelig about this...</p>
			<img src={sw} />
			<p className='bottomText'>you dont have the high ground, 404 not Found</p>
			<button className='btn btn-warning button'>
				<Link to='/'>This is the way</Link>
			</button>
		</div>
	);
}

export default NotFound404;
