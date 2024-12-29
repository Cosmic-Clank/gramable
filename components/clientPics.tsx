import React from "react";
import SectionContainer from "./SectionContainer";
import ParallaxImage from "./ParallaxImage";

const ClientPics = () => {
	// Separate image arrays for top and bottom rows
	const topRowImages = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg"];

	const bottomRowImages = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg"];

	return (
		<SectionContainer className='relative bg-[#d9d9d9] overflow-hidden space-y-24'>
			{/* Top Row */}
			<div className='flex gap-6 sm:gap-20 md:gap-36'>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-left'>
					{Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
						<div key={`top-${number}`} className='w-[200px] h-[140px] sm:w-[500px] sm:h-[350px] md:w-[700px] md:h-[550px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-left'>
					{Array.from({ length: 12 }, (_, index) => index + 13).map((number) => (
						<div key={`top-${number}`} className='w-[200px] h-[140px] sm:w-[500px] sm:h-[350px] md:w-[700px] md:h-[550px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
			</div>
			{/* Bottom Row */}
			<div className='flex justify-end gap-6 sm:gap-20 md:gap-36'>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-right'>
					{Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
						<div key={`top-${number}`} className='w-[200px] h-[140px] sm:w-[500px] sm:h-[350px] md:w-[700px] md:h-[550px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-right'>
					{Array.from({ length: 12 }, (_, index) => index + 13).map((number) => (
						<div key={`top-${number}`} className='w-[200px] h-[140px] sm:w-[500px] sm:h-[350px] md:w-[700px] md:h-[550px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<ParallaxImage src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default ClientPics;
