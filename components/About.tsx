import React from "react";

const About = () => {
	return (
		<section className='w-full py-16 bg-[#ffeae1]'>
			{/* Intro Section */}
			<div className='container mx-auto px-8 md:px-16'>
				<div className='md:w-2/3'>
					<h2 className='text-5xl font-extrabold text-black mb-6 leading-tight'>Soul drivers.</h2>
					<p className='text-xl text-black mb-12 leading-relaxed'>Patients and providers navigate an industry that can feel complex and cold. In few other categories than healthcare is soul more important. We’ve identified four drivers to help bring it to life and guide our work with clients.</p>
				</div>
			</div>

			{/* Drivers Section */}
			<div className='container mx-auto px-8 md:px-16 space-y-20'>
				{/* Authenticity */}
				<div className='md:flex md:items-start md:justify-between'>
					<h3 className='text-[80px] font-bold text-red-600 mb-6 md:mb-0 leading-none drop-shadow-lg'>Authenticity</h3>
					<p className='md:w-1/2 text-2xl text-red-600 leading-relaxed'>We believe that keeping it real begins with the principles guiding the brand. A compelling purpose and values are vital building blocks in creating connection.</p>
				</div>

				{/* Empathy */}
				<div className='md:flex md:items-start md:justify-between'>
					<h3 className='text-[80px] font-bold text-red-700 mb-6 md:mb-0 leading-none drop-shadow-lg'>Empathy</h3>
					<p className='md:w-1/2 text-2xl text-red-700 leading-relaxed'>In any relationship, nothing feels better than feeling understood. We help clients frame every move through the lens of audience needs and interests.</p>
				</div>

				{/* Clarity */}
				<div className='md:flex md:items-start md:justify-between'>
					<h3 className='text-[80px] font-bold text-red-800 mb-6 md:mb-0 leading-none drop-shadow-lg'>Clarity</h3>
					<p className='md:w-1/2 text-2xl text-red-800 leading-relaxed'>Healthcare can be overwhelming. Brands that take on the work of simplifying the complex—vs putting that burden on the audience—can quickly gain favor.</p>
				</div>

				{/* Courage */}
				<div className='md:flex md:items-start md:justify-between'>
					<h3 className='text-[80px] font-bold text-red-900 mb-6 md:mb-0 leading-none drop-shadow-lg'>Courage</h3>
					<p className='md:w-1/2 text-2xl text-red-900 leading-relaxed'>Sameness is an epidemic. Standing out from competitors is an imperative that requires conviction and confidence. A bold step forward always pays off.</p>
				</div>
			</div>
		</section>
	);
};

export default About;
