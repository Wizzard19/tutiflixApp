import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../Styles/SocialMedia.css';

function SocialMedia() {
	return (
		<div className='mainContainer'>
			<div className='socialMediaIcon'>
				<a href='https://github.com/Wizzard19' target='blank'>
					<FaGithub />
				</a>

				<a href='https://www.instagram.com/alejandrospitale/' target='blank'>
					<FaInstagram />
				</a>

				<a href='https://www.linkedin.com/in/alejandro-spitale/' target='blank'>
					<FaLinkedinIn />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
