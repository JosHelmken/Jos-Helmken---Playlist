import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
	name: 'musicList',
	initialState: [
		{
			id: 1625837262826,
			title: 'Good 4 U',
			artist: 'Olivia Rodrigo',
			rating: 1,
			youtube: 'https://www.youtube.com/embed/gNi_6U5Pm_o',
		},
		{
			id: 1625837462323,
			title: 'We are the People',
			artist: 'Marting Garrix feat Bono & the Edge',
			rating: 2,
			youtube: 'https://www.youtube.com/embed/kGT73GcwhCU',
		},
		{
			id: 1627837462827,
			title: 'Afraid of the Dark',
			artist: 'Chef`s Special',
			rating: 3,
			youtube: 'https://www.youtube.com/embed/TP7CPfj-N98',
		},
	],
	reducers: {
		addSong: (state, action) => {
			const newSong = {
				id: Date.now(),
				title: action.payload.title,
				artist: action.payload.artist,
				position: action.payload.rating,
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
