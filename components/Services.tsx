"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
			title: "Content Creation & Design",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 4,
			title: "Social Media Management",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 5,
			title: "Social Media Marketing",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			id: 6,
			title: "Content Creation & Design",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
	];

	return (
		<section className='bg-[#818c90] py-44 px-4 flex justify-center items-center'>
			<div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<Box key={index} service={service} />
				))}
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
	const boxRef = useRef(null);
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
					start: "top 80%",
					toggleActions: "play none none none",
				},
				delay: service.id * 0.3,
			}
		);
	});
	return (
		<div ref={boxRef} className='box border-4 border-white hover:shadow-lg transition-shadow'>
			<h3 className='text-3xl font-bold p-6 h-48 text-white border-white border-b-4'>{service.title}</h3>
			<p className='text-white p-6'>{service.description}</p>
		</div>
	);
};

export default Services;
