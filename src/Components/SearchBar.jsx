import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../Styles/SearchBar.css';
function SearchBar() {
	const [input, setInput] = useState('');

	return (
		<div>
			<input
				type='text'
				placeholder='Search movies or series...'
				className='input input-bordered searchBar'
				onChange={(e) => setInput(e.target.value)}
			/>

			<Link to={`/results/${input}`}>
				<FaSearch className='searchBtn' />
			</Link>
		</div>
	);
}

export default SearchBar;
