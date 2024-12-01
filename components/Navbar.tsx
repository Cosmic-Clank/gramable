"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

const navigation = [
	{ name: "Home", href: "#", current: false },
	{ name: "About", href: "#", current: false },
	{ name: "Services", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Testimonials", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
];

export default function Example() {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleNavbar = () => {
		setIsExpanded((prev) => !prev);
	};

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 50);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<header className={`fixed top-0 z-50 w-full flex justify-center items-center px-12 transition-all duration-200 ${isScrolled ? "py-4 bg-transparent" : "py-8 bg-transparent"}`}>
			{/* <nav className='hidden lg:flex w-full h-full flex-row justify-between items-center max-w-7xl z-50'>
				<div>
					<Link href='/' className='overflow-hidden'>
						<Image className='rounded-full' alt='Al Madena Landscape Logo' src='/images/logos/logo-2.png' width={300} height={300} />
					</Link>
				</div>
				<div className={`flex flex-row gap-10 uppercase transition-transform ${isExpanded ? "scale-100" : "scale-0"}`}>
					<ul className='flex flex-row gap-10'>
						{navigation.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className='text-white hover:opacity-50'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<button type='button' onClick={toggleNavbar} className='text-white hover:opacity-50 flex justify-center items-center text-2xl font-semibold tracking-widest gap-4'>
					MENU
					<IoMenu size={50} />
				</button>
			</nav> */}

			<nav className='flex w-full h-full flex-row-reverse justify-between items-center z-50'>
				{/* <div className='w-20'>
					<Link href='/' className='overflow-hidden'>
						{isScrolled ? <Image className='w-12' alt='Al Madena Landscape Logo' src='/images/logos/logo-white.png' width={150} height={150} /> : <Image className='' alt='Al Madena Landscape Logo' src='/images/logos/logo-black.png' width={200} height={200} />}
					</Link>
				</div> */}
				<button type='button' onClick={toggleNavbar} className='text-white bg-gray bg-opacity-50 rounded-xl px-3 py-2 hover:opacity-50 flex justify-center items-center text-base font-semibold tracking-widest gap-4'>
					MENU <IoMenu size={30} />
					{/* <IoMenu size={50} /> */}
				</button>

				<div className={`fixed flex flex-col justify-evenly top-0 right-full px-10 lg:px-20 transition-transform ease-in-out duration-500 transform bg-white h-screen w-screen text-teal overflow-hidden ${isExpanded ? "translate-x-full" : ""}`}>
					<div className='tracking-widest text-lg lg:text-xl underline uppercase font-thin'>
						<p>
							Experienced Technical Services
							<br />
							company of Uae
						</p>
					</div>
					<ul className='flex flex-col gap-8 text-4xl lg:text-6xl font-bold'>
						<li>
							<Link href='#home' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								HOME
							</Link>
						</li>
						<li>
							<Link href='#about' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								ABOUT
							</Link>
						</li>
						<li>
							<Link href='#services' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								SERVICES
							</Link>
						</li>
						<li>
							<Link href='#contact' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								CONTACT
							</Link>
						</li>
					</ul>
					<ul className='flex flex-col tracking-widest gap-2 text-lg lg:text-xl'>
						<li>
							<Link href='#mission' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								MISSION
							</Link>
						</li>
						<li>
							<Link href='#vision' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								VISION
							</Link>
						</li>
						<li>
							<Link href='#gallery' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								GALLERY
							</Link>
						</li>
						<li>
							<Link href='#projects' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								PROJECTS
							</Link>
						</li>
						<li>
							<Link href='#testimonials' onClick={() => setIsExpanded(false)} className='transition-transform duration-100 transform hover:translate-x-10 inline-block'>
								TESTIMONIALS
							</Link>
						</li>
					</ul>
					<button onClick={() => setIsExpanded(false)} type='button' className='absolute top-5 lg:top-10 right-10 lg:right-20 text-black hover:opacity-50 flex justify-center items-center text-xl font-semibold tracking-widest gap-4 z-10'>
						<IoClose size={50} />
					</button>
					<div className={""}>
						{/* <div className='hidden lg:block absolute top-9 -right-48 -scale-x-100 -rotate-45'>
							<Image src={"/images/logos/leaf-green.png"} width={550} height={550} alt='green leaf logo'></Image>
						</div>
						<div className='hidden lg:block absolute bottom-0 -right-16 rotate-[220deg]'>
							<Image src={"/images/logos/leaf-green.png"} width={550} height={550} alt='green leaf logo'></Image>
						</div> */}
					</div>
				</div>
			</nav>
		</header>
	);
}
