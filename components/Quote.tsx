import React from "react";
import TextFade from "./TextFadeUp";
import { Tinos } from "next/font/google";
import { cn } from "@/lib/utils";

const tinos = Tinos({
	weight: ["400"],
	subsets: ["latin"],
});

const Quote = ({ text }: { text: string }) => {
	return (
		<section className={cn("w-full text-center my-56 px-4 text-4xl md:text-5xl font-bold", tinos.className)}>
			<TextFade>{text}</TextFade>
		</section>
	);
};

export default Quote;
