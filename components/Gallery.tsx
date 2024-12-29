import React from "react";
import ParallaxImage from "./ParallaxImage";
import TextFadeUp from "./TextFadeUp";

const Gallery = () => {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' id='work'>
			{Array.from({ length: 24 }, (_, index) => index + 1).map((number) => (
				<div key={number} className='aspect-square overflow-hidden'>
					<ParallaxImage src={`/images/gallery/${number}.png`} alt={`Gallery Image ${number}`} className='w-full h-full object-cover' />
				</div>
			))}
		</div>
	);
};

export default Gallery;
