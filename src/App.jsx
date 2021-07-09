import React, { useState } from 'react';
import './App.css';
import AddSongForm from './components/addSongForm';
import SongList from './components/songList';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<h1>Musiclist</h1>
			<AddSongForm />
			<SongList />
		</div>
	);
}

export default App;
