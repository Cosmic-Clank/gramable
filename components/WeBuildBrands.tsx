import React from "react";
import TextFadeUp from "./TextFadeUp";
import { cn } from "@/lib/utils";
import SocialsStrip from "./SocialsStrip";
import TextWordStagger from "./TextWordStagger";
import ParallaxImage from "./ParallaxImage";

const WeBuildBrands = () => {
	return (
		<section className={cn("w-full text-center py-40 px-4 text-4xl md:text-5xl relative bg-[#f1ede2] ")} id='about'>
			<SocialsStrip />
			<div className='flex md:flex-row flex-col items-center justify-center py-16 px-2 gap-16'>
				{/* Image Section */}
				<ParallaxImage src='https://studiominimadesigns.com/designsessions/images/ffdb91b9a1299000426d76c8e2aa5b22.jpg' alt='Interior Design' className='w-full h-full object-cover rounded-lg max-w-[28rem] aspect-square md:aspect-[5/4] p-4' />

				{/* Text Section */}
				<div className='text-left tracking-wide space-y-11'>
					<TextFadeUp className='text-3xl font-semibold tracking-wide mb-4'>
						<p>WE BUILD BRANDS.</p>
					</TextFadeUp>
					<TextWordStagger containerClassName='max-w-xl' className='text-lg text-gray-700' text="At Gramable, we're passionate about transforming businesses into unforgettable brands. We believe that every detail matters—from striking visuals to engaging content—and we leverage the power of design, storytelling, and strategy to bring your brand's personality to life. Our team thrives on creating cohesive brand identities that stand out in a crowded digital world, ensuring that every post, campaign, and interaction reflects your unique vision and values. By blending creativity with data-driven insights, we help businesses not only gain visibility but also build lasting connections with their audience. Let us help you turn your business into a brand that leaves a lasting impression." />
				</div>
			</div>
		</section>
	);
};

export default WeBuildBrands;
