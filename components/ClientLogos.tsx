import React from "react";
import SectionContainer from "./SectionContainer";
import TextWordStagger from "./TextWordStagger";

const ClientPics = () => {
	return (
		<SectionContainer className='relative bg-white overflow-hidden'>
			<div className='w-full flex justify-center items-center mb-12'>
				<TextWordStagger className='text-3xl' text='Our Clients' />
			</div>
			<div className='flex gap-6'>
				<div className='flex gap-6 animate-swipe-left'>
					{Array.from({ length: 13 }, (_, index) => index + 1).map((number) => (
						<div key={number} className='w-[80px] h-[60px] sm:w-[120px] sm:h-[90px] md:w-[150px] md:h-[110px] rounded-md bg-gray-700'>
							<img src={`/images/clientlogos/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-6 animate-swipe-left'>
					{Array.from({ length: 13 }, (_, index) => index + 1).map((number) => (
						<div key={number} className='w-[80px] h-[60px] sm:w-[120px] sm:h-[90px] md:w-[150px] md:h-[110px] rounded-md bg-gray-700'>
							<img src={`/images/clientlogos/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default ClientPics;
