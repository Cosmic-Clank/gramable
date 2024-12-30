"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TextWordStagger from "./TextWordStagger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
	const services = [
		{
			id: 1,
			title: "Social Media Management",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 2,
			title: "Social Media Marketing",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 3,
			title: "Branding and Design",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 4,
			title: "Web Design and Development",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 5,
			title: "Content Creation",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 6,
			title: "NFC Cards and Digital Products",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
	];

	return (
		<section className='bg-[#ffde59] py-44 px-4 flex justify-center items-center'>
			<div className='max-w-7xl space-y-3'>
				<TextWordStagger className='text-4xl font-bold tracking-widest' text='OUR SERVICES' />
				<TextWordStagger className='text-lg tracking-widest' text='PROVIDING WIDE RANGE OF QUALITY SERVICES TO ALL OUR CLIENTS' />
				<div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20'>
					{services.map((service, index) => (
						<Box key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

interface Service {
	id: number;
	title: string;
	description: string;
}

const Box: React.FC<{ service: Service }> = ({ service }) => {
	const boxRef = useRef<HTMLDivElement>(null);

	// Scroll animation
	useGSAP(() => {
		gsap.fromTo(
			boxRef.current,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 3,
				ease: "expo.out",
				scrollTrigger: {
					trigger: boxRef.current,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			}
		);
	});

	// Hover animation
	const handleMouseEnter = () => {
		gsap.to(boxRef.current, {
			scale: 1.03,
			duration: 0.3,
			ease: "power1.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(boxRef.current, {
			scale: 1,
			duration: 0.3,
			ease: "power1.out",
		});
	};

	return (
		<div ref={boxRef} className='box border-4 border-black hover:shadow-2xl transition-shadow duration-200' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<h3 className='text-xl md:text-2xl font-bold p-6 h-40 text-balck border-black border-b-4'>{service.title.toUpperCase()}</h3>
			<p className='text-black p-6'>{service.description}</p>
		</div>
	);
};

export default Services;
