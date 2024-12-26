import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import Link from "next/link"; // If using Next.js

const WhatsappWidget = () => {
	return (
		<Link href='https://wa.me/+971552782684' className='fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300' target='_blank' rel='noopener noreferrer' aria-label='Chat with us on WhatsApp'>
			<FaWhatsapp size={30} />
		</Link>
	);
};

export default WhatsappWidget;
