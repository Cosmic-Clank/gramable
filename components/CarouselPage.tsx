"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "./ui/EmblaCarousel";

const OPTIONS = { loop: true, dragFree: false };
const SLIDE_COUNT = 5;
const SLIDES = ["https://buiduyphuong.com/wp-content/uploads/2018/12/pexels-ekaterina-mitkina-10006575-840x525.jpg", "https://buiduyphuong.com/wp-content/uploads/2018/12/pexels-ekaterina-mitkina-10006575-840x525.jpg", "https://buiduyphuong.com/wp-content/uploads/2018/12/pexels-ekaterina-mitkina-10006575-840x525.jpg", "https://buiduyphuong.com/wp-content/uploads/2018/12/pexels-ekaterina-mitkina-10006575-840x525.jpg", "https://buiduyphuong.com/wp-content/uploads/2018/12/pexels-ekaterina-mitkina-10006575-840x525.jpg"];

const CarouselPage = () => {
	const [emblaRef, emlbaApi] = useEmblaCarousel({ loop: true, dragFree: false });
	return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default CarouselPage;
