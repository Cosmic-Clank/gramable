"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ className, imageClassName, src, alt = "parallax image" }: { className?: string; imageClassName?: string; src: string; alt?: string }) => {
	useGSAP(() => {
		gsap.set(".parallaxImage", { scale: 1.3, y: -80 });
		gsap.to(".parallaxImage", {
			scrollTrigger: {
				trigger: ".parallaxContainer",
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
			y: 10,
		});
	});
	return (
		<div className={cn("parallaxContainer overflow-hidden", className)}>
			<img className={cn("parallaxImage w-full h-full object-cover", imageClassName)} src={src} alt={alt} />
		</div>
	);
};

export default ParallaxImage;
