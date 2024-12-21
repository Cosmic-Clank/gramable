"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInTextProps {
	children: React.ReactNode;
	className?: string;
}

const FadeInTextLeft: React.FC<FadeInTextProps> = ({ children, className }) => {
	const textRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			textRef.current,
			{ opacity: 0, x: 50 },
			{
				opacity: 1,
				x: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: textRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);
	});

	return (
		<div className='overflow-hidden'>
			{/* Add scrollable space */}
			<div ref={textRef} className={className} style={{ opacity: 0, overflow: "hidden" }}>
				{children}
			</div>
		</div>
	);
};

export default FadeInTextLeft;
