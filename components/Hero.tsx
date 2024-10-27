"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
		<section className='relative flex items-center justify-center h-screen bg-red-500 overflow-hidden'>
			{/* Masked Text with Image Animation */}
			<div className='relative z-10 text-white text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold overflow-hidden'>
				{/* Mask Text */}
				<span className='block mix-blend-overlay'>GRAMABLE</span>

				{/* Animated Images Layer */}
			</div>
		</section>
	);
};

export default Hero;
