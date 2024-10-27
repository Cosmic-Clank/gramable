import React from "react";

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

const Numbers = () => {
	return (
		<section className='w-full px-8 py-16 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-col md:flex-row justify-between items-start mb-12'>
					<h3 className='text-lg font-semibold mb-4 md:mb-0'>About →</h3>
					<p className='md:w-1/2 text-gray-700'>Facts and figures confirm our expertise and contribution to the success of our partners. We always encourage to set clear, measurable goals and analyze data to achieve quantifiable results and make informed decisions.</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<div key={index} className='flex flex-col items-start'>
							<p className='text-md font-medium text-gray-600 mb-2'>{stat.title}</p>
							<p className='text-3xl font-bold text-gray-900'>{stat.value}</p>
							<hr className='w-full mt-4 border-gray-300' />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Numbers;
