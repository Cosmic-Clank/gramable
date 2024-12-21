import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import ClientPics from "@/components/clientPics";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className='relative'>
			{/* <Intro /> */}
			<Navbar />
			<Hero />
			<Quote text='we build brands.' />
			<ClientPics />
			<Quote text='Lets get in touch?' />
			<Services />
			<Stats />
			<ContactUs />
			<Team />
			<Testimonials />
			<Features />
			{/* <Numbers /> */}
			<Footer />
			{/* <About /> */}
			{/* <CTA /> */}
			{/* <Values /> */}
		</main>
	);
}
