import React from "react";
import TextFadeUp from "./TextFadeUp";
import { cn } from "@/lib/utils";
import SocialsStrip from "./SocialsStrip";
import TextWordStagger from "./TextWordStagger";
import ParallaxImage from "./ParallaxImage";

const WeBuildBrands = () => {
	return (
		<section className={cn("w-full text-center py-56 px-4 text-4xl md:text-5xl relative")} id='about'>
			<SocialsStrip />
			<div className='flex md:flex-row flex-col items-center justify-center py-16 px-2 bg-white gap-16'>
				{/* Image Section */}
				<div className='max-w-96 aspect-square p-4'>
					<ParallaxImage src='https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg' alt='Interior Design' className='w-full h-full object-cover rounded-lg' />
				</div>

				{/* Text Section */}
				<div className='text-left tracking-wide space-y-11'>
					<TextFadeUp className='text-2xl font-semibold tracking-wide mb-4'>
						<p>WE BUILD BRANDS.</p>
					</TextFadeUp>
					<TextWordStagger containerClassName='max-w-xl' className='text-3xl text-gray-700' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in metus iaculis, convallis dui nec, sodales enim. Quisque lacinia aliquam nunc, nec widj jdiwwwd ii' />
				</div>
			</div>
		</section>
	);
};

export default WeBuildBrands;
