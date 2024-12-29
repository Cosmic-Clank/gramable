import React from "react";
import { cn } from "@/lib/utils";
import SocialsStrip from "./SocialsStrip";
import TextWordStagger from "./TextWordStagger";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";

const WantToMeet = () => {
	return (
		<section className={cn("w-full text-center py-72 px-4 text-4xl md:text-5xl relative bg-black flex flex-col justify-center items-center gap-8")}>
			<SocialsStrip className='text-white' />

			<TextWordStagger text='WANT TO MEET?' containerClassName='justify-center' className='tracking-widest text-white' />
			<Link className='text-black bg-white px-4 py-2 rounded-md text-xl flex justify-center items-center gap-4 hover:opacity-50' href={`tel:+971552782684`}>
				<IoIosCall size={24} />
				Contact Us
			</Link>
		</section>
	);
};

export default WantToMeet;
