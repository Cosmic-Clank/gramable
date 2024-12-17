import React from "react";
import TextFade from "./TextFade";

const Quote = ({ text }: { text: string }) => {
	return (
		<section className='w-full text-center my-56 px-4 text-4xl md:text-5xl font-bold'>
			<TextFade>{text}</TextFade>
		</section>
	);
};

export default Quote;
