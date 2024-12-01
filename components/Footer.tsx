import React from "react";

const Footer = () => {
	return (
		<footer className='bg-gray-50 text-gray-700'>
			{/* Subscription Section */}
			<div className='py-8 px-6 border-b border-gray-200'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
					<div>
						<h2 className='text-lg font-bold'>Join the inner circle</h2>
						<p className='text-sm text-gray-500'>Subscribe for insights, case studies, and updates from the expert teams at Ramotion.</p>
					</div>
					<button className='px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100'>Subscribe</button>
				</div>
			</div>

			{/* Links Section */}
			<div className='py-12 px-6'>
				<div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8'>
					{/* Social */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Social</h3>
						<ul className='space-y-2'>
							<li>LinkedIn</li>
							<li>Instagram</li>
							<li>Behance</li>
							<li>Dribbble</li>
							<li>X (Twitter)</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Company</h3>
						<ul className='space-y-2'>
							<li>About</li>
							<li>Case studies</li>
							<li>Process</li>
							<li>Services</li>
						</ul>
					</div>

					{/* Learn */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Learn</h3>
						<ul className='space-y-2'>
							<li>Testimonials</li>
							<li>FAQs</li>
							<li>Articles</li>
							<li>Careers</li>
						</ul>
					</div>

					{/* Locations */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Locations</h3>
						<ul className='space-y-2'>
							<li>San Francisco, CA</li>
							<li>Los Angeles, CA</li>
							<li>New York, NY</li>
						</ul>
					</div>

					{/* Get in touch */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Get in touch</h3>
						<ul className='space-y-2'>
							<li>+1 415 831 7880</li>
							<li>Contact us</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Links */}
			<div className='bg-gray-100 py-4'>
				<div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm text-gray-500'>
					<p>© 2024, Ramotion Inc.</p>
					<div className='flex space-x-4'>
						<a href='#'>Sitemap</a>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Terms of Use</a>
						<a href='#'>Cookie Policy</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
