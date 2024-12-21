"use client";
import React from "react";
import CountNumbers from "./CountNumbers";
import TextFadeUp from "./TextFadeUp";

const Stats = () => {
	const stats = [
		{ title: "Team experts", value: "70" },
		{ title: "In the industry since", value: "2009" },
		{ title: "Exits by our clients", value: "$6B+" },
		{ title: "Startup clients raised", value: "$1B+" },
		{ title: "IPO for Cellebrite", value: "$2.4B" },
		{ title: "Improvement in self-service for Turo", value: "58%" },
		{ title: "Ninox after-trial retention increased", value: "+30%" },
		{ title: "Completed sessions in Tile onboarding", value: "+60%" },
	];

	return (
		<section className='bg-white py-40 px-6'>
			<div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
				{stats.map((stat, index) => (
					<TextFadeUp key={index}>
						<div className='border-b border-gray-300 pb-6'>
							<TextFadeUp>
								<h3 className='text-lg font-medium text-black'>{stat.title}</h3>
							</TextFadeUp>
							<TextFadeUp>
								<CountNumbers start={0} end={parseFloat(stat.value.replace(/[^0-9.-]+/g, ""))} duration={3} className='text-3xl font-bold text-black mt-2' />
							</TextFadeUp>
						</div>
					</TextFadeUp>
				))}
			</div>
		</section>
	);
};

export default Stats;
