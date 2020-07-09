import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskRow = props => {
	const tasks = props.tasks;
	return tasks.map(task => {
		return (
			<div className='container-fluid grid  p-3 shadow-sm' key={task.id}>
				<input
					className='title'
					value={task.title}
					onChange={e => props.handleUpdate(e.target.value, task.id)}
				/>

				<div className='toogleCheck'>
					<input
						id='check'
						className='checkmark'
						type='checkbox'
						checked={task.completed}
						onChange={() => props.toggleTask(task)}
					/>
				</div>
				<div className='buttons '>
					<a
						type='button'
						className='btn-delete'
						onClick={() => props.handleDelete(task.id)}>
						<FontAwesomeIcon className='faiconTrash' icon='trash' />
					</a>
				</div>
			</div>
		);
	});
};

export default TaskRow;
