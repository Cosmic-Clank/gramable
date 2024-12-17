import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
	slides: string[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 2500 })]);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	return (
		<section className='embla'>
			<div className='absolute top-6 md:top-12 left-6 md:left-12 z-10'>
				<h1 className='text-white text-xl md:text-2xl font-bold'>EXPERIENCED SOCIAL MEDIA AGENCY OF DUBAI</h1>
			</div>
			{/* Bottom-Left Text */}
			<div className='absolute bottom-6 md:bottom-12 left-6 md:left-12 z-10'>
				<h2 className='text-white text-lg md:text-7xl font-semibold'>Gramable.</h2>
			</div>
			{/* Bottom-Right Text */}
			<div className='absolute bottom-6 md:bottom-12 right-6 md:right-12 z-10'>
				<h3 className='text-white text-sm md:text-lg font-medium'>DXB | UK | PAK</h3>
			</div>
			<div className='embla__viewport' ref={emblaRef}>
				<div className='embla__container'>
					{slides.map((src, index) => (
						<div className='embla__slide' key={index}>
							<img className='embla__slide__img' src={src} alt={`Slide ${index + 1}`} />
						</div>
					))}
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
