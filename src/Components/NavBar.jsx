import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

export function NavBar() {
	const handleWhat = console.log('this?');

	return (
		<div className='navbar bg-base-100' id='myNavBar'>
			<div className='brand'>
				<Link to='/'>TUTIFLIX</Link>
			</div>
			<div className='navBarItems'>
				<ul className='navBarList'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/movies/page/1'>Movies</Link>
					</li>
					<li>
						<Link to='/series/page/1'>Series</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;

/*<a>Home</a>
<a>Movies</a>
<a>Series</a>
<a>Categories</a> */
