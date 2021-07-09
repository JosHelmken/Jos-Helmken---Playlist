import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/musicSlice';

const AddSongForm = () => {
	const [title, setTitle] = useState('');
	const [artist, setArtist] = useState('');
	const [position, setPosition] = useState('');
	const [youtube, setYoutube] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addSong({
				title,
				artist,
				position,
				youtube,
			})
		);
	};

	return (
		<form onSubmit={onSubmit} className='addsongform'>
			<input
				type='text'
				className='form-input'
				placeholder='Song Title'
				name='title'
				value={title}
				onChange={(event) => setTitle(event.target.value)}
				required></input>
			<input
				type='text'
				className='form-input'
				placeholder='Song Artist'
				name='artist'
				value={artist}
				onChange={(event) => setArtist(event.target.value)}
				required></input>
			<input
				type='number'
				className='form-input'
				placeholder='Song position'
				name='position'
				value={position}
				onChange={(event) => setPosition(event.target.value)}
				min='1'
				max='20'
				required></input>
			<input
				type='text'
				className='form-input'
				placeholder='Song youtube (optional)'
				name='youtube'
				value={youtube}
				onChange={(event) => setYoutube(event.target.value)}></input>
			<button type='submit' className='form-submit-btn'>
				Add Song
			</button>
		</form>
	);
};

export default AddSongForm;
