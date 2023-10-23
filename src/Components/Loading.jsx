import { LineWobble } from '@uiball/loaders';
import React from 'react';
import '../Styles/Loading.css';

function Loading() {
	return (
		<div className='line-wobble'>
			<LineWobble lineWeight={3.5} size={10} speed={10000} />
		</div>
	);
}

export default Loading;
