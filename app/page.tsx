import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Numbers from "@/components/Numbers";
import CarouselPage from "@/components/CarouselPage";
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
		<main>
			<Navbar />
			<Hero />
			<CarouselPage />
			<Quote text='we build brands.' />
			<ClientPics />
			<Quote text='Lets get in touch?' />
			<Services />
			<ContactUs />
			<Stats />
			<Team />
			<Testimonials />
			<Features />
			<Numbers />
			<Footer />
			{/* <About /> */}
			{/* <CTA /> */}
			{/* <Values /> */}
		</main>
	);
}
