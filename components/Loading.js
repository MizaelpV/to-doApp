import React from 'react';

const Loading = () => {
	return (
		<>
			<div className='spinner-border text-light'>
				<span className='sr-only'></span>
			</div>
			<div className='container-fluid text-white text-center mt-5'>
				<h4>Wait a minute please, is still loading... 😔</h4>
			</div>
		</>
	);
};

export default Loading;
