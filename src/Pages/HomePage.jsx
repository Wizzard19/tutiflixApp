import React from 'react';
import '../Styles/HomePage.css';

function HomePage() {
	return (
		<div className='hero min-h-screen bg-base-1	200'>
			<div className='hero-content flex-col lg:flex-row'>
				<img
					src='https://media.licdn.com/dms/image/D4D03AQHhCAH1GUCXlw/profile-displayphoto-shrink_800_800/0/1682372968467?e=1703116800&v=beta&t=rcqCh3kWJaow4T9yni6fP6vDAjU166C_ETvTWyok6ck'
					className='max-w-sm rounded-lg shadow-2xl'
				/>
				<div>
					<h1 className='text-5xl font-bold mainText'>Welcome</h1>
					<p className='py-6 textArea'>
						My Name is Spitale Alejandro, and i love the front-end web
						development.
					</p>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
