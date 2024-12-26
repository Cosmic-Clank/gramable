import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import TextFadeLeft from "./TextFadeLeft";
import TextFadeRight from "./TextFadeRight";

const ContactUs = () => {
	return (
		<section className='bg-black text-white py-44 px-6' id='contact'>
			{/* Main Contact and Map Container */}
			<div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{/* Contact Information */}
				<div>
					<TextFadeRight>
						<h1 className='text-3xl md:text-4xl font-bold mb-6'>CONTACT US</h1>
					</TextFadeRight>
					<TextFadeRight>
						<div className='text-lg my-12'>
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
					</TextFadeRight>
					<div className='bg-black text-white flex items-center justify-between py-4'>
						<TextFadeRight>
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
						</TextFadeRight>
						<TextFadeLeft>
							<div className='text-right'>
								<p className='text-white font-medium'>we build brands.</p>
							</div>
						</TextFadeLeft>
					</div>
				</div>

				{/* Google Map Section */}
				<div className='w-full h-[400px] rounded-lg overflow-hidden'>
					<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7592215406694!2d55.384523400000006!3d25.278683899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6108f4d41dfb%3A0xabd10ab959eca4f6!2sLoloat%20Al%20MadenaTechnical%20Services%20LLC!5e0!3m2!1sen!2sae!4v1735212310930!5m2!1sen!2sae' width='1000' height='700' loading='lazy'></iframe>
				</div>
			</div>

			{/* Social Media Icons */}
			<div className='flex justify-start items-center space-x-6 mt-10'>
				<a href='#' className='text-white hover:text-gray-400 text-2xl'>
					<i className='fas fa-paper-plane'></i>
				</a>
				<a href='#' className='text-white hover:text-gray-400 text-2xl'>
					<i className='fas fa-envelope'></i>
				</a>
				<a href='#' className='text-white hover:text-gray-400 text-2xl'>
					<i className='fab fa-instagram'></i>
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
