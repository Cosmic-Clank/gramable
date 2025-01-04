"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextWordStagger from "./TextWordStagger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
	{
		name: "AHMAD",
		role: "Design & Management",
		image: "/images/ahmad.svg", // Replace with the correct image path
	},
	{
		name: "HUZAIFAH",
		role: "Marketing Strategies & Ad Campaigns",
		image: "/images/huzaifah.svg", // Replace with the correct image path
	},
	{
		name: "ABDULLAH",
		role: "Photography & Content Creation",
		image: "/images/abdullah.svg", // Replace with the correct image path
	},
	{
		name: "TAYYAB",
		role: "Web Design & Development",
		image: "/images/tayyab.svg", // Replace with the correct image path
	},
];

const TeamSection = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (containerRef.current) {
			const cards = containerRef.current.querySelectorAll(".team-card");

			gsap.fromTo(
				cards,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power2.out",
					stagger: 0.3,
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
		<section ref={containerRef} className='bg-[#c5a680] py-44 px-6 flex justify-center items-center' id='team'>
			<div className='max-w-7xl'>
				<div className='mb-16'>
					<TextWordStagger className='text-4xl font-bold text-white tracking-wide' text='THE TEAM' />
					<TextWordStagger className='text-sm text-white mt-2' text='THE MINDS BEHIND THE QUALITY PRODUCTION' />
				</div>

				<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
					{teamMembers.map((member, index) => (
						<div key={index} className='team-card bg-black rounded-3xl text-center py-16 px-8 flex flex-col items-center shadow-lg'>
							<img src={member.image} alt={member.name} className='mb-6' />
							<h3 className='text-white text-lg tracking-widest'>{member.name}</h3>
							<p className='text-white text-sm mt-2'>{member.role}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
