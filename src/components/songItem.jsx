import React from 'react';
import { FaYoutube, FaTrashAlt } from 'react-icons/fa';
import { deleteSong } from '../redux/musicSlice';
import { useDispatch } from 'react-redux';

const SongItem = (song) => {
	const dispatch = useDispatch();

	const handleDeleteSong = () => {
		let id = song.id;
		dispatch(deleteSong({id: id}));
	};

	return (
		<li className='songlistwrapper' id={song.id}>
			<div className='position'>{song.position}</div>
			<div className='title'>{song.title}</div>
			<div className='artist'>{song.artist}</div>
			<div className='youtube'>
				<a href={song.youtube} target='_blank' className='youtube-btn'>
					<FaYoutube />
				</a>
			</div>
			<div className='delete'>
				<FaTrashAlt onClick={handleDeleteSong} />
			</div>
		</li>
	);
};

export default SongItem;
