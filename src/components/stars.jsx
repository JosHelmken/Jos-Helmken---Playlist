import React from 'react';
import { FaStar } from 'react-icons/fa';

export const generateStars = (nr) => {
	let icons = [];

	for (let num = 0; num < nr; num++) {
		icons = [...icons, <FaStar key={num}/>];
	}

	return icons;
};
