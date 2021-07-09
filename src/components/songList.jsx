import React from 'react';
import SongItem from './songItem';
import { useSelector } from 'react-redux';

const SongList = () => {
	const songs = useSelector((state) => state.musicList);

	return (
		<ul>
			{songs.map((song) => (
				<SongItem
					key={song.id}
					id={song.id}
					title={song.title}
					artist={song.artist}
					rating={song.rating}
					youtube={song.youtube}
					genre={song.genre}
				/>
			))}
		</ul>
	);
};

export default SongList;
