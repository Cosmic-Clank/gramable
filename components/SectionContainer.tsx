import React, { ReactNode } from "react";
import clsx from "clsx";

interface SectionContainerProps {
	children: ReactNode;
	className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className }) => {
	return <div className={clsx("py-52 px-4", className)}>{children}</div>;
};

export default SectionContainer;
