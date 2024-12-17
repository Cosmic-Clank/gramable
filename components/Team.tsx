"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
	const teamRef = useRef<(HTMLDivElement | null)[]>([]);

	const teamMembers = [
		{
			name: "Ahmad",
			role: "Design & Branding",
			image: "https://via.placeholder.com/150", // Replace with actual image URL
		},
		{
			name: "Abdullah",
			role: "Content Creation",
			image: "https://via.placeholder.com/150", // Replace with actual image URL
		},
		{
			name: "Tayyab",
			role: "Software Developer",
			image: "https://via.placeholder.com/150", // Replace with actual image URL
		},
		{
			name: "Huzaifa",
			role: "Digital Marketing",
			image: "https://via.placeholder.com/150", // Replace with actual image URL
		},
	];

	useGSAP(() => {
		gsap.fromTo(
			teamRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: "power2.out",
				stagger: 0.3,
				scrollTrigger: {
					trigger: teamRef.current[0],
					start: "top 80%",
				},
			}
		);
	});

	return (
		<section className='bg-yellow-400 py-28 px-6'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
				{teamMembers.map((member, index) => (
					<div
						key={index}
						ref={(el) => {
							teamRef.current[index] = el;
						}}
						className='flex flex-col items-center text-center'>
						{/* Image */}
						<div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden'>
							<img src={member.image} alt={member.name} className='w-full h-full object-cover' />
						</div>
						{/* Name */}
						<h3 className='text-lg md:text-xl font-bold mt-4'>{member.name}.</h3>
						{/* Role */}
						<p className='text-sm md:text-base text-gray-800'>{member.role}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
