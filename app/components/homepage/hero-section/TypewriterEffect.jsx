"use client"

import { personalData } from "@/utils/data/personal-data";
import dynamic from "next/dynamic";

const ReactTyped = dynamic(() => import('react-typed').then(mod => mod.ReactTyped), { ssr: false });

export default function TypewriterEffect() {
	return (
		<ReactTyped strings={personalData.designations}
        backDelay={1000}
        typeSpeed={100}
        backSpeed={50}
        loop={true}
		/>
	);
}
