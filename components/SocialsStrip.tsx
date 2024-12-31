"use client";
import React, { useRef } from "react";
import { FiAperture, FiBookmark, FiCamera, FiCompass, FiDribbble, FiEdit, FiExternalLink, FiHeart, FiInstagram, FiTarget, FiThumbsUp } from "react-icons/fi";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

const SocialsStrip = ({ className }: { className?: string }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const strokeWidth = 0.5;

	const icons = [<FiAperture strokeWidth={strokeWidth} key='plane1' />, <FiHeart strokeWidth={strokeWidth} key='comment1' />, <FiBookmark strokeWidth={strokeWidth} key='bookmark1' />, <FiInstagram strokeWidth={strokeWidth} key='insta1' />, <FiHeart strokeWidth={strokeWidth} key='heart1' />, <FiCompass strokeWidth={strokeWidth} key='plane2' />, <FiBookmark strokeWidth={strokeWidth} key='comment2' />, <FiTarget strokeWidth={strokeWidth} key='bookmark2' />, <FiExternalLink strokeWidth={strokeWidth} key='insta2' />, <FiDribbble strokeWidth={strokeWidth} key='heart2' />, <FiThumbsUp strokeWidth={strokeWidth} key='plane3' />, <FiCamera strokeWidth={strokeWidth} key='comment3' />, <FiCompass strokeWidth={strokeWidth} key='bookmark3' />, <FiEdit strokeWidth={strokeWidth} key='insta3' />, <FiAperture strokeWidth={strokeWidth} key='heart3' />, <FiHeart strokeWidth={strokeWidth} key='comment1' />, <FiBookmark strokeWidth={strokeWidth} key='bookmark1' />, <FiInstagram strokeWidth={strokeWidth} key='insta1' />, <FiHeart strokeWidth={strokeWidth} key='heart1' />, <FiCompass strokeWidth={strokeWidth} key='plane2' />, <FiBookmark strokeWidth={strokeWidth} key='comment2' />, <FiTarget strokeWidth={strokeWidth} key='bookmark2' />, <FiExternalLink strokeWidth={strokeWidth} key='insta2' />, <FiDribbble strokeWidth={strokeWidth} key='heart2' />, <FiThumbsUp strokeWidth={strokeWidth} key='plane3' />];

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
		<div ref={containerRef} className='absolute left-0 right-0 top-0 w-full py-4 flex items-center justify-evenly overflow-hidden'>
			{icons.map((icon, index) => (
				<div key={index} className={cn("icon text-5xl md:text-7xl text-black opacity-0", className)}>
					{icon}
				</div>
			))}
		</div>
	);
};

export default SocialsStrip;
