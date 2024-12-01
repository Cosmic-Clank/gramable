import React from "react";

const Services = () => {
	const services = [
		{
			title: "Social Media Management",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			title: "Social Media Marketing",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			title: "Content Creation & Design",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			title: "Social Media Management",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			title: "Social Media Marketing",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
		{
			title: "Content Creation & Design",
			description: "Highlight a specific service or product. It can be a property appraisal service, a consultation, or something uniquely yours. Give it room to shine here.",
		},
	];

	return (
		<section className='bg-[#818c90] py-12 px-4 flex justify-center items-center'>
			<div className='max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{services.map((service, index) => (
					<div key={index} className='border-4 border-white hover:shadow-lg transition-shadow'>
						<h3 className='text-3xl font-bold p-6 h-48 text-white border-white border-b-4'>{service.title}</h3>
						<p className='text-white p-6'>{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
