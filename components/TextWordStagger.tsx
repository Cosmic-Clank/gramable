"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextWordStaggerProps {
	text: string;
	className?: string;
	containerClassName?: string;
}

const TextWordStagger: React.FC<TextWordStaggerProps> = ({ text, className, containerClassName }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (containerRef.current) {
			const words = containerRef.current.querySelectorAll(".word");

			gsap.fromTo(
				words,
				{ opacity: 1, y: 80 },
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					stagger: 0.05,
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
		<div ref={containerRef} className={cn("flex flex-wrap gap-x-2", containerClassName)}>
			{/* Add scrollable space */}
			{text.split(" ").map((word, index) => (
				<div className='overflow-hidden' key={index}>
					<p className={cn("word", className)}>{word}</p>
				</div>
			))}
		</div>
	);
};

export default TextWordStagger;
