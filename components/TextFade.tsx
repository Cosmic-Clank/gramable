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

const FadeInText: React.FC<FadeInTextProps> = ({ children, className }) => {
	const textRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			textRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
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
		<div>
			{/* Add scrollable space */}
			<div ref={textRef} className={className} style={{ opacity: 0 }}>
				{children}
			</div>
		</div>
	);
};

export default FadeInText;
