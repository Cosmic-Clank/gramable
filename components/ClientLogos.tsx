import React from "react";
import SectionContainer from "./SectionContainer";
import TextWordStagger from "./TextWordStagger";

const ClientPics = () => {
	return (
		<SectionContainer className='relative bg-white overflow-hidden'>
			<div className='w-full flex justify-center items-center mb-12'>
				<TextWordStagger className='text-3xl' text='OUR CLIENTS' />
			</div>
			<div className='flex gap-12'>
				<div className='flex gap-12 animate-swipe-left'>
					{Array.from({ length: 13 }, (_, index) => index + 1).map((number) => (
						<div key={number} className='w-[100px] h-[80px] sm:w-[150px] sm:h-[110px] md:w-[200px] md:h-[150px] rounded-md bg-gray-700'>
							<img src={`/images/clientlogos/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
				<div className='flex gap-12 animate-swipe-left'>
					{Array.from({ length: 13 }, (_, index) => index + 1).map((number) => (
						<div key={number} className='w-[100px] h-[80px] sm:w-[150px] sm:h-[110px] md:w-[200px] md:h-[150px] rounded-md bg-gray-700'>
							<img src={`/images/clientlogos/${number}.png`} alt={`Top Row Client Work ${number + 1}`} />
						</div>
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default ClientPics;
