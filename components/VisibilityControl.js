import React from 'react';

const VisibilityControl = props => {
	return (
		<div className='container-fluid visibility mt-4'>
			<h3 className='seeCompletedTitle'>Look at your completed tasks</h3>
			<div className='showDone'>
				<input
					className='showDoneInput'
					type='checkbox'
					checked={props.completed}
					onChange={e => props.callback(e.target.checked)}
				/>
			</div>
		</div>
	);
};

export default VisibilityControl;
