"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaSnapchat } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	return (
		<footer className='bg-gray-50 text-gray-700'>
			{/* Subscription Section */}
			<div className='py-8 px-6 border-b border-gray-200'>
				<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
					<div>
						<h2 className='text-4xl font-bold'>Gramable.</h2>
						{/* <p className='text-sm text-gray-500'>Subscribe for insights, case studies, and updates from the expert teams at Ramotion.</p> */}
					</div>
					{/* <button className='px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100'>Subscribe</button> */}
				</div>
			</div>

			{/* Links Section */}
			<div className='py-12 px-6'>
				<div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8'>
					{/* Social */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Social</h3>
						<ul className='space-y-2'>
							<li>
								<TextFadeUp className='flex items-center space-x-1 hover:text-gray-500'>
									<FaInstagram className='mb-1' />
									<Link href='https://www.instagram.com/gramable.ae'>Instagram</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='flex items-center space-x-1 hover:text-gray-500'>
									<FaFacebook className='mb-1' />
									<Link href='https://www.facebook.com/profile.php?id=61556849725379'>Facebook</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='flex items-center space-x-1 hover:text-gray-500'>
									<FaSnapchat className='mb-1' />

									<Link href='https://www.facebook.com/gramable.ae'>Snapchat</Link>
								</TextFadeUp>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Company</h3>
						<ul className='space-y-2'>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link className='hover:text-gray' href='#about'>
										About
									</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link className='hover:text-gray' href='#services'>
										Services
									</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link className='hover:text-gray' href='#gallery'>
										Projects
									</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link href='#about'>Case studies</Link>
								</TextFadeUp>
							</li>
						</ul>
					</div>

					{/* Learn */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>More</h3>
						<ul className='space-y-2'>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link href='#team'>Team</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link href='#testimonials'>Testimonials</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link href='#team'>Careers</Link>
								</TextFadeUp>
							</li>
						</ul>
					</div>

					{/* Locations */}
					<div>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Locations</h3>
						<ul className='space-y-2'>
							<li>
								<TextFadeUp>UAE</TextFadeUp>
							</li>
							<li>
								<TextFadeUp>UK</TextFadeUp>
							</li>
							<li>
								<TextFadeUp>USA</TextFadeUp>
							</li>
						</ul>
					</div>

					{/* Get in touch */}
					<div className='col-span-2 lg:col-span-1'>
						<h3 className='text-sm font-bold text-gray-600 mb-4'>Get in touch</h3>
						<ul className='space-y-2'>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link href='tel:+971552782684'>Phone: +971552782684</Link>
								</TextFadeUp>
							</li>
							<li>
								<TextFadeUp className='hover:text-gray-500'>
									<Link href='https://wa.me/+971552782684'>Whatsapp: +971552782684</Link>
								</TextFadeUp>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Links */}
			<div className='bg-gray-100 px-6 py-4'>
				<div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm text-gray-500'>
					<p>© 2024 Gramable.</p>
					{/* <div className='flex space-x-4'>
						<a href='#'>Sitemap</a>
						<a href='#'>Privacy Policy</a>
						<a href='#'>Terms of Use</a>
						<a href='#'>Cookie Policy</a>
					</div> */}
				</div>
			</div>
		</footer>
	);
};
export default Footer;

interface FadeInTextProps {
	children: React.ReactNode;
	className?: string;
}

const TextFadeUp: React.FC<FadeInTextProps> = ({ children, className }) => {
	const textRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			textRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: textRef.current,
					toggleActions: "play none none none",
				},
			}
		);
	});

	return (
		<div>
			{/* Add scrollable space */}
			<div ref={textRef} className={className} style={{ opacity: 0 }}>
				{children}
			</div>
		</div>
	);
};
