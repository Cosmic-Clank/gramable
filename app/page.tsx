import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import ClientPics from "@/components/clientPics";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { League_Spartan } from "next/font/google";
import WeBuildBrands from "@/components/WeBuildBrands";
import WantToMeet from "@/components/WantToMeet";
import Gallery from "@/components/Gallery";
import WhatsappWidget from "@/components/WhatsappWidget";
import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/ClientLogos";

const league_spartan = League_Spartan({
	subsets: ["latin"],
	weight: ["100", "300", "500", "600"],
	display: "swap",
});

export default function Home() {
	return (
		<main className={cn("relative", league_spartan.className)}>
			<Intro />
			<WeBuildBrands />
			<ClientPics />
			<AboutUs />
			<WantToMeet />
			<Services />
			<Stats />
			<Gallery />
			<ClientLogos />
			<Team />
			<Testimonials />
			<ContactUs />
			<Footer />
			<WhatsappWidget />
		</main>
	);
}
