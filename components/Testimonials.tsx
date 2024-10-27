import React from "react";

const testimonials = [
	{
		name: "John Doe",
		content: "This product has changed my life for the better! I can't imagine going back.",
	},
	{
		name: "Jane Smith",
		content: "The customer service was outstanding, and the quality exceeded my expectations.",
	},
	{
		name: "Emily Davis",
		content: "A must-have for anyone in this industry. Highly recommended!",
	},
	{
		name: "Michael Brown",
		content: "Absolutely fantastic experience from start to finish.",
	},
	{
		name: "Sarah Wilson",
		content: "The best investment I've made in a long time. This has been a game-changer for me.",
	},
	{
		name: "David Clark",
		content: "Remarkably intuitive and easy to use. I'm very impressed with the results!",
	},
	{
		name: "Sophia Lewis",
		content: "Exceptional quality and incredible attention to detail. I'm beyond satisfied.",
	},
	{
		name: "Chris Johnson",
		content: "I've recommended this to all my colleagues. Everyone needs this in their life!",
	},
];

const Testimonials = () => {
	return (
		<section className='w-full px-8 py-24 flex space-x-8 bg-[#212121] text-white'>
			{/* Left Half: Centered, Sticky Title */}
			<div className='w-1/2 flex items-start justify-center'>
				<div className='sticky top-1/3 pt-28'>
					{" "}
					{/* Sticky at the very top with padding */}
					<h2 className='text-5xl font-bold text-gray-200'>TESTIMONIALS</h2>
				</div>
			</div>

			{/* Right Half: Scrolling Testimonials */}
			<div className='w-1/2'>
				{testimonials.map((testimonial, index) => (
					<div key={index} className='flex flex-col items-center justify-center space-y-8 py-16'>
						<p className='text-2xl font-medium text-gray-200 leading-relaxed'>&quot;{testimonial.content}&quot;</p>
						<span className='block text-lg text-gray-400 mb-44'>- {testimonial.name}</span>
						{index < testimonials.length - 1 && <hr className='w-full border-gray-600' />} {/* Added my-8 for space around the hr */}
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
