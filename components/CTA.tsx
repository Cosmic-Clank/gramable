import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
	return (
		<section className='w-full py-44 bg-black flex flex-col items-center justify-center text-center text-white space-y-8'>
			<h2 className='text-4xl font-bold'>Want to talk about a project?</h2>
			<Button className='text-black rounded-3xl' variant='outline'>
				Get in touch
			</Button>
		</section>
	);
};

export default CTA;
