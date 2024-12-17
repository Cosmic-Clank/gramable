import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import TextFade from "./TextFade";

const ContactUs = () => {
	return (
		<section className='bg-black text-white py-44 px-6'>
			{/* Main Contact Information */}
			<div className='max-w-4xl mx-auto'>
				<TextFade>
					<h1 className='text-3xl md:text-4xl font-bold mb-6'>CONTACT US</h1>
				</TextFade>
				<TextFade>
					<div className='text-lg my-24'>
						<p>Mobile Number: 123-456-7890</p>
						<p>Address: 123 Anywhere St., Any City, ST 12345</p>
						<p>
							Website:{" "}
							<a href='https://www.reallygreatsite.com' className='text-gray-400 hover:underline'>
								www.reallygreatsite.com
							</a>
						</p>
						<p>
							Email Address:{" "}
							<a href='mailto:hello@reallygreatsite.com' className='text-gray-400 hover:underline'>
								hello@reallygreatsite.com
							</a>
						</p>
					</div>
				</TextFade>
				<TextFade>
					<div className='bg-black text-white flex items-center justify-between py-4'>
						{/* Icons Section */}
						<div className='flex space-x-6'>
							<a href='#' className='text-white hover:text-gray-400 text-2xl'>
								<FaLocationArrow />
							</a>
							<a href='#' className='text-white hover:text-gray-400 text-2xl'>
								<IoMailOutline />
							</a>
							<a href='#' className='text-white hover:text-gray-400 text-2xl'>
								<BsInstagram />
							</a>
						</div>

						{/* Text Section */}
						<div className='text-right'>
							<p className='text-white font-medium'>we build brands.</p>
						</div>
					</div>
				</TextFade>
			</div>

			{/* Social Media Icons */}
			<div className='flex justify-start items-center space-x-6 mt-10'>
				{/* Icons */}
				<a href='#' className='text-white hover:text-gray-400 text-2xl'>
					<i className='fas fa-paper-plane'></i> {/* Replace with an actual SVG or icon library */}
				</a>
				<a href='#' className='text-white hover:text-gray-400 text-2xl'>
					<i className='fas fa-envelope'></i> {/* Replace with an actual SVG or icon library */}
				</a>
				<a href='#' className='text-white hover:text-gray-400 text-2xl'>
					<i className='fab fa-instagram'></i> {/* Replace with an actual SVG or icon library */}
				</a>
			</div>

			{/* Footer Section */}
			<div className='absolute bottom-8 right-8'>
				<p className='text-gray-400 text-sm'>we build brands.</p>
			</div>
		</section>
	);
};

export default ContactUs;
