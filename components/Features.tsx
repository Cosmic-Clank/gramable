import React from "react";
import TextFade from "./TextFade";

const Features = () => {
	return (
		<section className='bg-white px-6 md:px-12 py-44'>
			{/* Main Heading */}
			<TextFade>
				<div className='max-w-5xl mx-auto text-center'>
					<h1 className='text-3xl md:text-5xl font-bold leading-tight text-gray-900'>Pivot is home to those unafraid to challenge conventional thinking. Our points of view vary, but we share a deeply felt purpose: to leverage the power of design to move people toward wellness.</h1>
				</div>
			</TextFade>

			{/* Subsections */}
			<TextFade>
				<div className='max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Feature 1 */}
					<div>
						<h3 className='text-xl font-bold text-gray-900'>No ego. Plenty of attitude.</h3>
						<p className='text-gray-700 mt-4 leading-relaxed'>Pivot is fiercely independent. We reject big-agency bureaucracy, ego, and BS. Instead, we focus our energy on ideas and relationships that accomplish amazing things—together. Passion fuels our conviction and urgency. We believe deeply in what we do, and welcome everyone to join the ride.</p>
					</div>

					{/* Feature 2 */}
					<div>
						<h3 className='text-xl font-bold text-gray-900'>A culture built on trust.</h3>
						<p className='text-gray-700 mt-4 leading-relaxed'>Trust is the defining characteristic of the Pivot culture. The more we trust each other, the further we can push what’s possible in our work. Trust inspires us to honor each of our talents and give each other our best. Trust guides every aspect of what we do. As we hope you’re getting, trust is a really big deal.</p>
					</div>
				</div>
			</TextFade>
		</section>
	);
};

export default Features;
