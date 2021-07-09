import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
	name: 'musicList',
	initialState: [
		{
			id: 1625837262826,
			title: 'Good 4 U',
			artist: 'Olivia Rodrigo',
			genre: 'pop',
			rating: 2,
			youtube: 'https://www.youtube.com/embed/gNi_6U5Pm_o',
		},
		{
			id: 1625837462323,
			title: 'Bad habits',
			artist: 'Ed Sheeran',
			genre: 'pop',
			rating: 5,
			youtube: 'https://www.youtube.com/embed/orJSJGHjBLI',
		},
		{
			id: 1627837462827,
			title: 'Early In The Morning',
			artist: 'Kris Kross Amsterdam, Shaggy, Conor maynard',
			genre: 'new Age',
			rating: 3,
			youtube: 'https://www.youtube.com/embed/GlJ-fMjqhwk',
		},
	],
	reducers: {
		addSong: (state, action) => {
			const newSong = {
				id: Date.now(),
				title: action.payload.title,
				artist: action.payload.artist,
				genre: action.payload.genre,
				rating: action.payload.rating,
				youtube: action.payload.youtube,
			};
			state.push(newSong);
		},
		deleteSong: (state, action) => {
			return state.filter((song) => song.id !== action.payload.id);
		},
	},
});

export const { addSong, deleteSong } = musicSlice.actions;

export default musicSlice.reducer;
