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
		arabic: "ا",
	},
	{
		name: "HUZAIFAH",
		role: "Marketing Strategies & Ad Campaigns",
		arabic: "ح",
	},
	{
		name: "ABDULLAH",
		role: "Photography & Content Creation",
		arabic: "ع",
	},
	{
		name: "TAYYAB",
		role: "Web Design & Development",
		arabic: "ط",
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
		<section ref={containerRef} className='bg-[#b5a48a] py-44 px-6 flex justify-center items-center' id='team'>
			<div className='max-w-7xl'>
				<div className='mb-16'>
					<TextWordStagger className='text-4xl font-bold text-white tracking-wide' text='THE TEAM' />
					<TextWordStagger className='text-sm text-gray-300 mt-2' text='THE MINDS BEHIND THE QUALITY PRODUCTION' />
				</div>

				<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
					{teamMembers.map((member, index) => (
						<div key={index} className='team-card bg-black rounded-3xl text-center py-16 px-8 flex flex-col items-center shadow-lg'>
							<span className='text-8xl text-white mb-6'>{member.arabic}</span>
							<h3 className='text-white text-lg tracking-widest'>{member.name}</h3>
							<p className='text-gray-400 text-sm mt-2'>{member.role}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
