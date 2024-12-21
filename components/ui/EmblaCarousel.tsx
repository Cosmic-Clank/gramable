"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PropType = {
	slides: string[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 4000 })]);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	useGSAP(() => {
		gsap.set(".gsapParallax", { scale: 1 });
		gsap.to(".gsapParallax", {
			scrollTrigger: {
				start: "top top",
				end: "bottom top",
				trigger: ".gsapParallax",
				scrub: true,
			},
			y: 200,
		});
	});

	return (
		<section className='embla overflow-hidden'>
			<div className='absolute top-6 md:top-12 left-6 md:left-12 z-10'>
				<h2 className='text-white text-lg md:text-xl'>EXPERIENCED SOCIAL MEDIA AGENCY OF DUBAI</h2>
			</div>
			{/* Bottom-Left Text */}
			<div className='absolute bottom-8 md:bottom-14 left-8 md:left-14 z-10'>
				<h1 className='text-white text-lg md:text-4xl font-semibold'>Gramable.</h1>
			</div>
			{/* Bottom-Right Text */}
			<div className='absolute bottom-6 md:bottom-12 right-6 md:right-12 z-10'>
				<h3 className='text-white text-sm md:text-lg font-medium'>DXB | UK | PAK</h3>
			</div>
			<div className='gsapParallax'>
				<div className='embla__viewport' ref={emblaRef}>
					<div className='embla__container'>
						{slides.map((src, index) => (
							<div className='embla__slide' key={index}>
								<div className='absolute inset-0 bg-black bg-opacity-30 pointer-events-none'></div>
								<img className='embla__slide__img' src={src} alt={`Slide ${index + 1}`} />
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='embla__controls'>
				<div className='embla__buttons'>
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
