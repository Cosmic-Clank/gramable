import React from "react";

const Quote = ({ text }: { text: string }) => {
	return <section className='w-full text-center my-56 px-4 text-4xl md:text-5xl font-bold'>{text}</section>;
};

export default Quote;
