import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import TaskRow from '../components/TaskRow';
import VisibilityControl from './VisibilityControl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';
import Loading from './Loading';
import ErrorView from './ErrorView';

library.add(faTrash, faSearch);

function App(props) {
	const dataTasks = props.data;
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [tasks, setTasks] = useState(dataTasks);
	const [query, setQuery] = useState('');
	const [showCompleted, setshowCompleted] = useState(false);
	const [newTask, setNewTask] = useState({
		newtask: {
			title: '',
			completed: false,
			id: ''
		}
	});

	const getDataTasks = () => {
		try {
			setLoading(true);
			setTasks(dataTasks);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		getDataTasks();
	}, []);

	const filtered = tasks.filter(t => {
		return t.title.toLowerCase().includes(query);
	});

	const handleSearch = text => {
		setQuery(text);
	};

	//Catching the new task
	const handleChange = text => {
		setNewTask({
			title: text,
			completed: false,
			id: Date.now()
		});
	};
	//Adding it to the state
	const handleAddTask = e => {
		e.preventDefault();
		const input = document.getElementById('addTask').value;
		const normalize = tasks.find(t => {
			return t.title.toLowerCase() === input.toLowerCase();
		});

		if (normalize) {
			alert('It looks like you already add this task');
		} else if (input === '') {
			alert('It cannot be an empty task');
		} else {
			setTasks([...tasks, newTask]);
		}
		document.querySelector('form').reset();
	};

	const handleDelete = key => {
		setTasks(tasks.filter(task => task.id !== key));
	};

	const handleUpdate = (text, key) => {
		setNewTask(
			tasks.map(t => {
				t.id === key ? (t.title = text) : t;
			})
		);
	};

	//Look at your completed tasks
	const toggleTask = task => {
		setTasks(
			tasks.map(t =>
				t.title === task.title ? { ...t, completed: !t.completed } : t
			)
		);
	};

	//Rendering the app
	const tasksDashboard = doneValue => {
		const taskFiltered = filtered.filter(t => t.completed === doneValue);
		return (
			<TaskRow
				tasks={taskFiltered}
				handleDelete={handleDelete}
				toggleTask={toggleTask}
				handleUpdate={handleUpdate}
			/>
		);
	};

	return (
		<>
			{loading && <Loading />}
			{error && <ErrorView />}
			<NavBar
				tasks={filtered}
				query={query}
				handleAddTask={handleAddTask}
				handleChange={handleChange}
				handleSearch={handleSearch}
			/>
			<Layout>{tasksDashboard(false)}</Layout>>
			<VisibilityControl
				completed={showCompleted}
				callback={completed => setshowCompleted(completed)}
			/>
			{showCompleted && <Layout>{tasksDashboard(true)}</Layout>}
		</>
	);
}

export default App;
