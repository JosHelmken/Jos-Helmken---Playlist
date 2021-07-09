import React from 'react';
import { FaYoutube, FaTrashAlt } from 'react-icons/fa';
import { deleteSong } from '../redux/musicSlice';
import { useDispatch } from 'react-redux';
import { generateStars } from './stars';

const SongItem = ({ id, rating, title, artist, youtube, genre }) => {
	const dispatch = useDispatch();

	const handleDeleteSong = () => {
		dispatch(deleteSong({ id }));
	};

	return (
		<li className='songlistwrapper' id={id}>
			<div className='title'>{title}</div>
			<div className='artist'>{artist}</div>
			<div className='genre'>{genre}</div>
			<div className='rating'>{generateStars(rating)}</div>
			<div className='youtube'>
				{youtube ? (
					<a href={youtube} target='_blank' className='youtube-btn'>
						<FaYoutube />
					</a>
				) : (
					''
				)}
			</div>
			<div className='delete'>
				<FaTrashAlt onClick={handleDeleteSong} />
			</div>
		</li>
	);
};

export default SongItem;
