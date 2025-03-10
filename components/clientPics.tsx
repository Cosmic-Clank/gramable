import React from "react";
import SectionContainer from "./SectionContainer";

const ClientPics = () => {
	return (
		<SectionContainer className='relative bg-white overflow-hidden space-y-24'>
			{/* Top Row */}
			<div className='flex gap-6 sm:gap-20 md:gap-36'>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-left'>
					{Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
						<div key={`top-${number}`} className='shadow-2xl w-[150px] h-[140px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[520px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<img src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-left'>
					{Array.from({ length: 12 }, (_, index) => index + 13).map((number) => (
						<div key={`top-${number}`} className='shadow-2xl w-[150px] h-[140px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[520px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<img src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
			</div>
			{/* Bottom Row */}
			<div className='flex justify-end gap-6 sm:gap-20 md:gap-36'>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-right'>
					{Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
						<div key={`top-${number}`} className='shadow-2xl w-[150px] h-[140px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[520px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<img src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 sm:gap-20 md:gap-36 animate-swipe-right'>
					{Array.from({ length: 12 }, (_, index) => index + 13).map((number) => (
						<div key={`top-${number}`} className='shadow-2xl w-[150px] h-[140px] sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[520px] overflow-hidden rounded-[40px] sm:rounded-[80px] md:rounded-[100px] bg-gray-700'>
							<img src={`/images/gallery/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default ClientPics;
