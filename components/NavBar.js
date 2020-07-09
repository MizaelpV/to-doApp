import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = props => {
	const quantity = props.tasks.filter(f => !f.completed).length;
	const todayName = () => {
		const week = [
			'sunday',
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday'
		];
		const d = new Date();
		const day = d.getDay();
		return week[day];
	};

	const dayNumber = () => {
		const d = new Date();
		const dayNum = d.getDate();
		return dayNum;
	};

	const month = () => {
		const monthName = [
			'January',
			'February',
			'March',
			'April',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		const d = new Date();
		const month = d.getMonth();
		return monthName[month];
	};

	todayName();
	month();
	dayNumber();

	return (
		<div className='container-fluid  p-4 navbar-container p-5'>
			<span className='welcomeUser'>Welcome, Infocasas 😊</span>
			<span className='day'>{todayName()}</span>
			<div className='line'></div>
			<div className='containerDate'>
				<h2 className='month'>{month()},</h2>
				<span className='dayNumber'>{dayNumber()}</span>
			</div>
			<form className='formAddTask' autoComplete='off'>
				<input
					className='addTaskInput'
					id='addTask'
					type='text'
					name='title'
					onChange={e => props.handleChange(e.target.value)}
				/>
				<span className='addNew'>Add a new task</span>
				<button className='btnAdd' onClick={props.handleAddTask}>
					+
				</button>
			</form>
			<div className='searchTaskContainer'>
				<input
					autoComplete='off'
					className='searchTask'
					id='searchTask'
					type='text'
					name='title'
					value={props.query}
					onChange={e => props.handleSearch(e.target.value)}
				/>
				<span className='searchPlaceHolder'>Search your task</span>

				<span className='searchIcon'>
					<FontAwesomeIcon className='faiconSearch' icon='search' />
				</span>
			</div>
			<div className='tasksPending'>
				<h4 className='quantity'>You have {quantity} taks to do 💪🏽</h4>
			</div>
		</div>
	);
};

export default NavBar;
