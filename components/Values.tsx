import React from "react";

const values = [
	{
		title: "Mastery",
		description: "Constant repetition of processes leads to mastery. We've been honing our craft and improving our processes for years, every day.",
	},
	{
		title: "Dependability",
		description: "You can't create value without a trusted partner. Staying true to our word is an intrinsic need, not just an external obligation.",
	},
	{
		title: "Passion",
		description: "A true love for what you do manifests in where you invest your time. The passion for our work is quiet and calm, yet potent.",
	},
	{
		title: "Flexibility",
		description: "We rely on our processes but adapt to the specific needs of projects or partners. Flexibility leads to lasting improvements.",
	},
	{
		title: "Discipline",
		description: "Discipline starts within and shapes all our processes. Though meticulous, our standards ensure solid long-term delivery.",
	},
	{
		title: "Creativity",
		description: "We combine inspiration with workflow to foster systematic creativity and deliver predictable results.",
	},
];

const Values = () => {
	return (
		<section className='w-full px-8 py-16 bg-white text-center'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-4xl font-bold mb-12'>Our values</h2>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{values.map((value, index) => (
						<div key={index} className='flex flex-col items-start text-left space-y-4'>
							<h3 className='text-2xl font-semibold text-gray-900'>{value.title}</h3>
							<p className='text-gray-700'>{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Values;
