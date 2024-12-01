import React from "react";

const ClientPics = () => {
	const images = [
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg", // Replace with actual image URLs
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
		"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/3/29/63820aa8-c588-407d-b195-6e90b1db44f2_821707.jpg",
	];

	return (
		<section className='relative h-[450px] md:h-[800px] bg-[#7c7678] overflow-hidden'>
			{/* Top Row */}
			<div className='absolute top-8 -left-32 flex gap-6 md:gap-10'>
				{images.slice(0, 4).map((src, index) => (
					<div key={index} className='w-[200px] h-[140px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[80px] md:rounded-[100px] bg-gray-700'>
						<img src={src} alt={`Client Work ${index + 1}`} className='w-full h-full object-cover' />
					</div>
				))}
			</div>

			{/* Bottom Row */}
			<div className='absolute bottom-28 left-4 flex gap-10'>
				{images.slice(4).map((src, index) => (
					<div key={index + 4} className='w-[200px] h-[140px] md:w-[450px] md:h-[300px] overflow-hidden rounded-[80px] md:rounded-[100px] bg-gray-700'>
						<img src={src} alt={`Client Work ${index + 4}`} className='w-full h-full object-cover' />
					</div>
				))}
			</div>

			{/* Caption */}
			<div className='absolute bottom-8 w-full text-center'>
				<p className='text-white font-medium text-lg px-4'>A FEW OF OUR RECENT SHOTS FROM CLIENT SHOOTS</p>
			</div>
		</section>
	);
};

export default ClientPics;
