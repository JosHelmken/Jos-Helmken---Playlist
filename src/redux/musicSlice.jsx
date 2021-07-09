import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
	name: 'musicList',
	initialState: [
		{
			id: 1,
			title: 'Good 4 U',
			artist: 'Olivia Rodrigo',
			position: 1,
			youtube: 'https://www.youtube.com/embed/gNi_6U5Pm_o',
		},
		{
			id: 2,
			title: 'We are the People',
			artist: 'Marting Garrix feat Bono & the Edge',
			position: 2,
			youtube: 'https://www.youtube.com/embed/kGT73GcwhCU',
		},
		{
			id: 3,
			title: 'Afraid of the Dark',
			artist: 'Chef`s Special',
			position: 3,
			youtube: 'https://www.youtube.com/embed/TP7CPfj-N98',
		},
	],
	reducers: {
		addSong: (state, action) => {
			const newSong = {
				id: Date.now(),
				title: action.payload.title,
				artist: action.payload.artist,
				position: action.payload.position,
				youtube: action.payload.youtube,
			};
			state.push(newSong);
		},
		deleteSong: (state, action) => {
			console.log(state.filter((song) => song.id !== action.payload.id));
			//return state.filter((song) => song.position !== action.payload.position);
		},
	},
});

export const { addSong, deleteSong } = musicSlice.actions;

export default musicSlice.reducer;
