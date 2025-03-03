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
			description: "Our social media management service helps businesses grow their online presence by creating engaging content, managing accounts, and implementing effective strategies. We handle everything from content creation and scheduling to audience engagement and analytics, ensuring your brand stays active and relevant. Let us boost your visibility, drive engagement, and build a strong digital community for your business!",
		},
		{
			id: 2,
			title: "Social Media Marketing",
			description: "Our social media marketing service helps businesses reach their target audience through strategic advertising, compelling content, and data-driven campaigns. We create and manage paid ads, optimize engagement, and track performance to maximize your brand’s online impact. Let us drive traffic, generate leads, and boost conversions with effective social media marketing!",
		},
		{
			id: 3,
			title: "Branding and Design",
			description: "Our branding services help businesses create a strong and memorable identity that stands out. From logo design and brand messaging to visual identity and strategy, we craft a cohesive brand experience that resonates with your audience. Let us bring your vision to life and build a brand that leaves a lasting impression!",
		},
		{
			id: 4,
			title: "Web Design and Development",
			description: "Our UI/UX design service focuses on creating intuitive, visually appealing, and user-friendly digital experiences. We design seamless interfaces that enhance usability, improve engagement, and drive conversions. From wireframing to prototyping, we ensure every interaction is smooth and meaningful. Let us craft a design that not only looks great but also delivers exceptional user experiences!",
		},
		{
			id: 5,
			title: "Content Creation",
			description: "Our content creation and reels service helps businesses capture attention with high-quality visuals, engaging videos, and compelling storytelling. From eye-catching reels to branded content, we craft dynamic and shareable media that boosts engagement and visibility. Let us bring your brand to life with creative content that stands out!",
		},
		{
			id: 6,
			title: "NFC Cards and Digital Products",
			description: "Our digital products, including NFC cards and Google Review cards, provide innovative solutions to enhance customer engagement and brand credibility. With NFC cards, you can share contact details, social links, or product information instantly. Our Google Review cards make it easy for customers to leave reviews, boosting your online reputation. Elevate your business with smart, digital solutions!",
		},
	];

	return (
		<section className='bg-[#ECDDD0] py-44 px-4 flex justify-center items-center'>
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
			<h3 className='text-xl md:text-2xl font-bold p-6 h-32 text-balck border-black border-b-4'>{service.title.toUpperCase()}</h3>
			<p className='text-black p-6'>{service.description}</p>
		</div>
	);
};

export default Services;
