import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

interface CountNumbersProps {
	start?: number;
	end?: number;
	duration?: number;
	className?: string;
	suffix?: string;
}

const CountNumbers: React.FC<CountNumbersProps> = ({ start = 0, end = 100, duration = 2, suffix = "", className }) => {
	const numberRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.fromTo(
			numberRef.current,
			{ innerText: start },
			{
				innerText: end,
				duration: duration,
				scrollTrigger: {
					trigger: numberRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
				snap: { innerText: 1 }, // Snap to whole numbers
				ease: "expo.out",
				onUpdate: function () {
					if (numberRef.current) {
						numberRef.current.innerText = Math.ceil(this.targets()[0].innerText).toString() + suffix;
					}
				},
			}
		);
	}, []);

	return (
		<div ref={numberRef} className={className} style={{ fontSize: "2rem", fontWeight: "bold" }}>
			{start}
		</div>
	);
};

export default CountNumbers;
