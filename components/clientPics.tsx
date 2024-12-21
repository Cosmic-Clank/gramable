import React from "react";
import SectionContainer from "./SectionContainer";
import ParallaxImage from "./ParallaxImage";
import TextFadeUp from "./TextFadeUp";

const ClientPics = () => {
	// Separate image arrays for top and bottom rows
	const topRowImages = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg"];

	const bottomRowImages = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg"];

	return (
		<SectionContainer className='relative h-[650px] md:h-[1100px] bg-[#7c7678] overflow-hidden'>
			{/* Top Row */}
			<div className='absolute top-40 -left-32 flex gap-6 md:gap-10'>
				<div className='flex gap-6 md:gap-10 animate-swipe-left'>
					{topRowImages.map((src, index) => (
						<div key={`top-${index}`} className='w-[200px] h-[140px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={src} alt={`Top Row Client Work ${index + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 md:gap-10 animate-swipe-left'>
					{topRowImages.map((src, index) => (
						<div key={`top-${index}`} className='w-[200px] h-[140px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={src} alt={`Top Row Client Work ${index + 1}`} />
						</div>
					))}
				</div>
			</div>
			{/* Bottom Row */}
			<div className='absolute bottom-60 right-4 flex gap-6 md:gap-10'>
				<div className='flex gap-6 md:gap-10 animate-swipe-right'>
					{bottomRowImages.map((src, index) => (
						<div key={`top-${index}`} className='w-[200px] h-[140px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={src} alt={`Top Row Client Work ${index + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 md:gap-10 animate-swipe-right'>
					{topRowImages.map((src, index) => (
						<div key={`top-${index}`} className='w-[200px] h-[140px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={src} alt={`Top Row Client Work ${index + 1}`} />
						</div>
					))}
				</div>
			</div>

			{/* Caption */}
			<div className='absolute bottom-24 w-full text-center'>
				<TextFadeUp>
					<p className='text-white font-medium text-lg px-4'>A FEW OF OUR RECENT SHOTS FROM CLIENT SHOOTS</p>
				</TextFadeUp>
			</div>
		</SectionContainer>
	);
};

export default ClientPics;
