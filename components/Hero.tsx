"use client";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import { Poppins } from "next/font/google";
import React, { useEffect } from "react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "600",
	display: "swap",
});

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
		<section className={cn("relative flex items-center justify-center h-screen bg-black overflow-hidden", poppins.className)}>
			{/* Masked Text with Image Animation */}
			<div className='relative z-10 text-white text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold overflow-hidden'>
				{/* Mask Text */}
				<span className='block mix-blend-overlay'>Gramable.</span>

				{/* Animated Images Layer */}
			</div>
		</section>
	);
};

export default Hero;
