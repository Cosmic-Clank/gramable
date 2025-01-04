import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import TextFadeLeft from "./TextFadeLeft";
import TextFadeRight from "./TextFadeRight";
import Link from "next/link";

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
							<p>
								Phone:{" "}
								<Link href='tel:+971552782684' className='text-gray-400 hover:underline'>
									+971552782684
								</Link>
							</p>
							<p>
								Address:{" "}
								<Link href='https://maps.app.goo.gl/Yun3bQPtuW6LZTA86' className='text-gray-400 hover:underline'>
									Al Qusais, Damascus Street, Rocky RE building First Floor, Block A, Office No: 117 - Dubai
								</Link>
							</p>
							<p>
								Website:{" "}
								<Link href='/' className='text-gray-400 hover:underline'>
									www.gramable.ae
								</Link>
							</p>
							<p>
								Email Address:{" "}
								<Link href='mailto:gramable.ae@yahoo.com' className='text-gray-400 hover:underline'>
									gramable.ae@yahoo.com
								</Link>
							</p>
						</div>
					</TextFadeRight>
					<div className='bg-black text-white flex items-center justify-between py-4'>
						<TextFadeRight>
							<div className='flex space-x-6'>
								<Link href='https://maps.app.goo.gl/Yun3bQPtuW6LZTA86' className='text-white hover:text-gray-400 text-2xl'>
									<FaLocationDot />
								</Link>
								<Link href='mailto:gramable.ae@yahoo.com' className='text-white hover:text-gray-400 text-2xl'>
									<IoMail />
								</Link>
								<Link href='https://www.instagram.com/gramable.ae' className='text-white hover:text-gray-400 text-2xl'>
									<BsInstagram />
								</Link>
								<Link href='https://www.facebook.com/profile.php?id=61556849725379' className='text-white hover:text-gray-400 text-2xl'>
									<BsFacebook />
								</Link>
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
				<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7592215406694!2d55.384523400000006!3d25.278683899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6108f4d41dfb%3A0xabd10ab959eca4f6!2sLoloat%20Al%20MadenaTechnical%20Services%20LLC!5e0!3m2!1sen!2sae!4v1735212310930!5m2!1sen!2sae' loading='lazy' className='rounded-xl mx-auto md:ml-auto max-w-sm max-h-sm aspect-square w-full'></iframe>
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
		</section>
	);
};

export default ContactUs;
