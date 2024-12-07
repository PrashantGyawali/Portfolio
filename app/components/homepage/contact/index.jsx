// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import lottieFile from "/public/lottie/contact.json";
import dynamic from "next/dynamic";
const AnimationLottie= dynamic(()=>import('../../helper/animation-lottie'),{loading:()=>null,ssr:false});

function ContactSection() {
	return (
		<div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
			<div className="flex justify-center my-5 lg:py-8">
				<div className="flex  items-center">
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
					<span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md flex gap-2">
						Contact{" "}
						<span className="hidden md:block">Information</span>
					</span>
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
				</div>
			</div>

			<div className="hidden lg:flex flex-col items-center absolute bottom-24 -right-8">
				<span className="h-36 w-[2px] bg-[#1a1443]"></span>
				<span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
					CONTACT
				</span>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-col-dense lg:gap-16 items-center ">
        <div className="hidden vsm:block">
				<AnimationLottie animationPath={lottieFile} />
        </div>
				<div className="lg:w-3/4">
					<div className="flex flex-col gap-5 lg:gap-9">
						<p className="text-sm md:text-xl flex items-center gap-3">
							<MdAlternateEmail
								className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={36}
							/>
							<a href={`mailto:${personalData.email}`}>
								{personalData.email}
							</a>
						</p>
						<p className="text-sm md:text-xl flex items-center gap-3">
							<IoMdCall
								className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={36}
							/>
							<span>{personalData.phone}</span>
						</p>
						<p className="text-sm md:text-xl flex items-center gap-3">
							<CiLocationOn
								className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={36}
							/>
							<span>{personalData.address}</span>
						</p>
					</div>
					<div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
						<Link target="_blank" href={personalData.github}>
							<IoLogoGithub
								className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={48}
							/>
						</Link>
						<Link target="_blank" href={personalData.linkedIn}>
							<BiLogoLinkedin
								className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={48}
							/>
						</Link>
						<Link target="_blank" href={personalData.twitter}>
							<FaXTwitter
								className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={48}
							/>
						</Link>
						<Link target="_blank" href={personalData.facebook}>
							<FaFacebook
								className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
								size={48}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
