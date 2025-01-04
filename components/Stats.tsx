"use client";
import React from "react";
import CountNumbers from "./CountNumbers";
import TextFadeUp from "./TextFadeUp";

const Stats = () => {
	const stats = [
		{ title: "TEAM", value: "10" },
		{ title: "IN THE INDUSTRY SINCE", value: "2020" },
		{ title: "COUNTRIES", value: "3" },
		{ title: "PROJECTS", value: "15", suffix: "+" },
		{ title: "SERVICES", value: "10", suffix: "+" },
	];

	return (
		<section className='bg-white py-48 px-6'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16'>
				{stats.map((stat, index) => (
					<TextFadeUp key={index}>
						<div className='border-b border-gray-300 pb-6'>
							<TextFadeUp>
								<h3 className='text-md font-medium text-black text-center md:text-start'>{stat.title}</h3>
							</TextFadeUp>
							<TextFadeUp>
								<CountNumbers start={0} end={parseFloat(stat.value.replace(/[^0-9.-]+/g, ""))} duration={3} className='text-3xl font-bold text-black mt-2 flex justify-center md:justify-start' suffix={stat.suffix} />
							</TextFadeUp>
						</div>
					</TextFadeUp>
				))}
			</div>
		</section>
	);
};

export default Stats;
