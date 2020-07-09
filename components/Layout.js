import React from 'react';

const Layout = props => {
	return (
		<>
			<div className='container-fluid'>
				<div className='row mt-4'>
					<div className='col'>
						<div className='task-card text-center p-4'>{props.children}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
