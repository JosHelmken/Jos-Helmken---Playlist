import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/musicSlice';

const AddSongForm = () => {
	const dispatch = useDispatch();
	const ratings = [1, 2, 3, 4, 5];

	const [formData, setFormData] = useState({
		title: '',
		artist: '',
		rating: 0,
		youtube: '',
	});

	const handleChance = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addSong(formData));
		setFormData({
			title: '',
			artist: '',
			rating: 0,
			youtube: '',
		});
	};

	return (
		<form onSubmit={onSubmit} className='addsongform'>
			<input
				type='text'
				className='form-input'
				placeholder='Song Title'
				name='title'
				value={formData.title}
				onChange={handleChance}
				required></input>
			<input
				type='text'
				className='form-input'
				placeholder='Song Artist'
				name='artist'
				value={formData.artist}
				onChange={handleChance}
				required></input>
			<select
				name='rating'
				className='form-select'
				onChange={handleChance}
				required>
				<option disabled hidden value={formData.rating}>
					Select Rating
				</option>
				{ratings.map((rate) => {
					return (
						<option value={rate} key={rate}>
							{rate} star
						</option>
					);
				})}
			</select>
			<input
				type='text'
				className='form-input'
				placeholder='Song youtube (optional)'
				name='youtube'
				value={formData.youtube}
				onChange={handleChance}></input>
			<button type='submit' className='form-submit-btn'>
				Add Song
			</button>
		</form>
	);
};

export default AddSongForm;
