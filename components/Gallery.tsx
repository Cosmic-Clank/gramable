import React from "react";
import ParallaxImage from "./ParallaxImage";
import TextFadeUp from "./TextFadeUp";

const images = ["https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg", "https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg"];

const Gallery = () => {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' id='work'>
			{images.map((src, index) => (
				<div key={index} className='aspect-square overflow-hidden'>
					<TextFadeUp>
						<ParallaxImage src={src} alt={`Gallery Image ${index + 1}`} className='w-full h-full object-cover' />
					</TextFadeUp>
				</div>
			))}
		</div>
	);
};

export default Gallery;
