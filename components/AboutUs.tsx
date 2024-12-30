import React from "react";
import ParallaxImage from "./ParallaxImage";
import TextWordStagger from "./TextWordStagger";

const AboutUs = () => {
	return (
		<section>
			<div className='flex xl:flex-row flex-col justify-center items-center'>
				<div className='flex justify-center items-center xl:w-1/2 mt-20 xl:mt-0 mb-20 xl:mb-0'>
					<div className='flex flex-col gap-8 h-full p-8'>
						<TextWordStagger className='text-5xl font-bold tracking-widest' text='ABOUT US' />
						<TextWordStagger containerClassName='max-w-xl' className='text-lg text-gray-700' text='Welcome to Gramable, where creativity meets strategy to drive meaningful results for your brand. For over four years, we’ve been proudly operating in the heart of Dubai, helping businesses navigate the ever-evolving digital landscape. Our expertise spans social media management, innovative design, and premium content production, offering end-to-end solutions that resonate with your target audience.' />
						<TextWordStagger
							containerClassName='max-w-xl'
							className='text-lg text-gray-700'
							text="At Gramable, we understand that every brand has a unique story to tell. That's why we combine a deep understanding of local market dynamics with cutting-edge global trends to create tailored strategies that engage, inspire, and deliver measurable success. Whether it's managing your social presence, designing visually striking campaigns, or producing compelling content that captures your essence, we are committed to elevating your brand's digital footprint.
"
						/>
						<TextWordStagger containerClassName='max-w-xl' className='text-lg text-gray-700' text="Partner with us and let's transform your social media presence into a powerful platform for growth and connection." />
					</div>
				</div>
				<div className='xl:w-1/2 h-full'>
					<ParallaxImage src='https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg' alt='Interior Design' className='w-full h-full object-cover' />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
