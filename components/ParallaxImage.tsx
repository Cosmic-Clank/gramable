"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ className, imageClassName, src, alt = "parallax image" }: { className?: string; imageClassName?: string; src: string; alt?: string }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useGSAP(() => {
		if (containerRef.current && imageRef.current) {
			gsap.set(imageRef.current, { scale: 1.3, y: -80 });

			gsap.to(imageRef.current, {
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true,
				},
				y: 10,
			});
		}
	}, []);

	return (
		<div ref={containerRef} className={cn("overflow-hidden", className)}>
			<img ref={imageRef} className={cn("w-full h-full object-cover", imageClassName)} src={src} alt={alt} />
		</div>
	);
};

export default ParallaxImage;
