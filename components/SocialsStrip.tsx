"use client";
import React, { useRef } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import { CiLocationArrow1, CiChat1, CiBookmark, CiHeart } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

const SocialsStrip = ({ className }: { className?: string }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const icons = [<CiLocationArrow1 key='plane1' />, <CiChat1 key='comment1' />, <CiBookmark key='bookmark1' />, <PiInstagramLogoLight key='insta1' />, <CiHeart key='heart1' />, <CiLocationArrow1 key='plane2' />, <CiChat1 key='comment2' />, <CiBookmark key='bookmark2' />, <PiInstagramLogoLight key='insta2' />, <CiHeart key='heart2' />, <CiLocationArrow1 key='plane3' />, <CiChat1 key='comment3' />, <CiBookmark key='bookmark3' />, <PiInstagramLogoLight key='insta3' />, <CiHeart key='heart3' />];

	useGSAP(() => {
		if (containerRef.current) {
			const iconElements = containerRef.current.querySelectorAll(".icon");

			gsap.fromTo(
				iconElements,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "expo.out",
					stagger: 0.08,
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 80%",
						toggleActions: "play none none none",
					},
				}
			);
		}
	}, []);

	return (
		<div ref={containerRef} className='absolute left-0 right-0 top-0 w-full py-4 flex items-center justify-evenly gap-3 overflow-hidden'>
			{icons.map((icon, index) => (
				<div key={index} className={cn("icon text-7xl text-black opacity-0", className)}>
					{icon}
				</div>
			))}
		</div>
	);
};

export default SocialsStrip;
