import React from 'react';
import SocialMedia from './socialMedia';

function Footer() {
	return (
		<footer className='footer p-10 bg-neutral text-neutral-content'>
			<aside>
				<p>
					TUTIFLIX
					<br />
					FROM WIZZARDTECH INC. ©
				</p>
			</aside>

			<nav>
				<header className='footer-title'>Social</header>
				<div className='grid grid-flow-col gap-2'>
					<SocialMedia />
				</div>
			</nav>
		</footer>
	);
}

export default Footer;
