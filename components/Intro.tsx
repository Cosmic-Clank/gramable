"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
	subsets: ["latin"],
	weight: ["100", "300", "500", "600"],
	variable: "--font-league-spartan",
	display: "swap",
});

const Intro = () => {
	const textRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const divRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	useGSAP(() => {
		const tl = gsap.timeline(); // Pause the timeline initially

		// Forward animation
		tl.fromTo(textRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "expo.Out" })
			.fromTo(".subtitle", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "expo.out", stagger: 0.2 })
			.to(
				textRef.current,
				{ y: -50, opacity: 0, duration: 0.2, ease: "expo.out", delay: 3 } // Reverse manually after 3 seconds
			)
			.to(".subtitle", { y: -10, opacity: 0, duration: 0.5, ease: "expo.out" })
			.to(divRef.current, { opacity: 0, duration: 1, ease: "expo.out" })
			.set(divRef.current, { display: "none" })
			.fromTo(".gramable-letter", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "back.out", stagger: 0.1 })
			.fromTo(".gramable-subtitle", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back.out", delay: -0.8 })
			.fromTo(".gramable-logo", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back.out", delay: -0.8 })
			.fromTo(".nav-link", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back.out", delay: -0.8, stagger: 0.2 })
			.fromTo(".nav-container", { borderBottomColor: "#00000000" }, { borderBottomColor: "#ffffffff", duration: 1, ease: "back.out", delay: -0.8 });
	});

	return (
		<section className='relative' id='home'>
			<div className='flex items-center justify-center h-screen bg-black overflow-hidden z-50 absolute left-0 right-0 top-0' ref={divRef}>
				<div className='flex flex-col justify-center items-center absolute' ref={containerRef}>
					<h1 className={`text-white text-6xl md:text-8xl opacity-0 font-bold ${league_spartan.className}`} ref={textRef}>
						Gramable.
					</h1>
					<div className='flex text-white gap-6'>
						<div className='uppercase opacity-0 tracking-widest md:tracking-[1rem] font-thin text-xl md:text-2xl subtitle'>SOCIAL</div>
						<div className='uppercase opacity-0 tracking-widest md:tracking-[1rem] font-thin text-xl md:text-2xl subtitle'>MEDIA</div>
						<div className='uppercase opacity-0 tracking-widest md:tracking-[1rem] font-thin text-xl md:text-2xl subtitle'>AGENCY</div>
					</div>
				</div>
			</div>
			<nav className='fixed top-0 left-0 right-0 flex items-center justify-between md:mx-20 sm:mx-12 mx-6 border-b border-b-transparent py-6 bg-transparent z-50 nav-container'>
				{/* Logo */}
				<div className='text-white text-4xl font-extrabold tracking-wider opacity-0 gramable-logo'>
					G<span className='text-4xl'>.</span>
				</div>

				{/* Desktop Links */}
				<div className='hidden md:flex gap-12 items-center uppercase text-sm text-white'>
					<a href='#home' className='hover:opacity-70 opacity-0 nav-link'>
						Home
					</a>
					<a href='#about' className='hover:opacity-70 opacity-0 nav-link'>
						About
					</a>
					<a href='#work' className='hover:opacity-70 opacity-0 nav-link'>
						Work
					</a>
					<a href='#team' className='hover:opacity-70 opacity-0 nav-link'>
						Team
					</a>
					<a href='#contact' className='hover:opacity-70 opacity-0 nav-link'>
						Contact
					</a>
				</div>

				{/* Hamburger Menu */}
				<div className='md:hidden'>
					<button onClick={toggleMenu} className='text-white text-3xl'>
						☰
					</button>
				</div>

				{/* Mobile Menu */}
				<div className={cn("fixed inset-y-0 right-0 bg-black bg-opacity-90 w-64 transform transition-transform duration-300", isOpen ? "translate-x-0" : "translate-x-full")}>
					<button onClick={toggleMenu} className='text-white text-3xl absolute top-6 right-6'>
						✕
					</button>
					<div className='flex flex-col items-center justify-center h-full gap-8 text-white uppercase'>
						<a href='#home' className='hover:opacity-70 text-lg'>
							Home
						</a>
						<a href='#about' className='hover:opacity-70 text-lg'>
							About
						</a>
						<a href='#work' className='hover:opacity-70 text-lg'>
							Work
						</a>
						<a href='#team' className='hover:opacity-70 text-lg'>
							Team
						</a>
						<a href='#contact' className='hover:opacity-70 text-lg'>
							Contact
						</a>
					</div>
				</div>
			</nav>
			<div className='h-screen'>
				<video className='absolute inset-0 w-full h-full object-cover' autoPlay muted loop>
					<source src='/videos/intro.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
				<div className='absolute inset-0 w-full h-full object-cover flex flex-col justify-center items-center bg-black bg-opacity-40'>
					<div className='text-center max-w-3xl p-4'>
						<div className={`text-white md:text-9xl sm:text-8xl text-6xl font-bold flex justify-center items-center ${league_spartan.className}`}>
							<div className='G opacity-0 gramable-letter'>G</div>
							<div className='r opacity-0 gramable-letter'>r</div>
							<div className='a opacity-0 gramable-letter'>a</div>
							<div className='m opacity-0 gramable-letter'>m</div>
							<div className='a opacity-0 gramable-letter'>a</div>
							<div className='b opacity-0 gramable-letter'>b</div>
							<div className='l opacity-0 gramable-letter'>l</div>
							<div className='e opacity-0 gramable-letter'>e</div>
							<div className='. opacity-0 gramable-letter'>.</div>
						</div>
						<p className='flex text-white gap-6 md:text-base text-sm opacity-0 gramable-subtitle'>WE HELP BUISNESS OWNERS, COMPANIES & STARTUPS TURN THEIR BUISNESS INTO A BRAND. SO THEY CAN FOCUS ON OTHER PARTS OF IT.</p>
					</div>
				</div>
				<div className='absolute flex justify-between items-center bottom-0 md:p-14 p-8 w-full text-white font-medium'>
					<div className='flex justify-center gap-2'>
						<FaInstagram className='mt-[0.15rem]' />
						<Link href='https://www.instagram.com/gramableagency/'>GRAMABLE.AE</Link>
					</div>
					<div className=''>UAE US UK</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
