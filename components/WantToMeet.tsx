import React from "react";
import { cn } from "@/lib/utils";
import SocialsStrip from "./SocialsStrip";
import TextWordStagger from "./TextWordStagger";

const WantToMeet = () => {
	return (
		<section className={cn("w-full text-center py-72 px-4 text-4xl md:text-5xl relative bg-black")}>
			<SocialsStrip className='text-white' />

			<TextWordStagger text='WANT TO MEET?' containerClassName='justify-center' className='tracking-widest text-white' />
		</section>
	);
};

export default WantToMeet;
