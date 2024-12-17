"use client";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "600",
	display: "swap",
});

const Intro = () => {
	const dotRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);
	useGSAP(() => {
		const tl = gsap.timeline();
		const tl2 = gsap.timeline();
		tl.fromTo(dotRef.current, { y: "-70vh", scale: 8, opacity: 1 }, { y: 0, scale: 8, opacity: 1, duration: 2, ease: "expo.inOut" });
		tl.to(dotRef.current, { x: -210, scale: 1, ease: "expo.out", delay: -0.4, duration: 0.5 });
		tl2.from(textRef.current, { x: -250, scaleX: 0.01, opacity: 0, duration: 1, ease: "expo.out", delay: 2.4 });
		tl.to(dotRef.current, { x: 210, scale: 0.6, ease: "expo.out", delay: 0.3, duration: 1 });
		tl.to(dotRef.current, { x: 198, y: 16, scale: 0.5 });
		tl.to(sectionRef.current, { left: "200%", opacity: 0.5, delay: 0.5, ease: "back.inOut", duration: 1 });
	});
	return (
		<section className={cn("flex items-center justify-center h-screen bg-black overflow-hidden z-50 absolute left-0 right-0", poppins.className)} ref={sectionRef}>
			<div className='flex flex-row justify-center items-center absolute' ref={containerRef}>
				<div className='text-white text-7xl' ref={textRef}>
					Gramable
				</div>
				<div className='w-10 h-10 rounded-full bg-white absolute opacity-0' ref={dotRef}></div>
			</div>
		</section>
	);
};

export default Intro;
