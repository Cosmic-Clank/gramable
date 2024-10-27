import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Numbers from "@/components/Numbers";
import Values from "@/components/Values";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Testimonials />
			<CTA />
			<Numbers />
			<Values />
		</main>
	);
}
