import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

const Button = ({ text, icon, onClick, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { text?: string; icon?: React.ReactNode; onClick?: () => void; className?: string }) => {
	return (
		<button {...props} onClick={onClick} className={cn("px-8 py-4 mt-4 bg-white hover:bg-teal rounded-lg uppercase text-black hover:text-white transition-colors duration-500 border border-gray-700", className)}>
			{text}
			{icon}
		</button>
	);
};

export default Button;
