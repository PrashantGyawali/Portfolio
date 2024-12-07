/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { FaCode, FaPlay } from "react-icons/fa";
import placeholder from "/public/png/placeholder.png";
import BackgroundSvg from "./background";
import { skillsImage } from "@/utils/skill-image";
import ProjectsImages from "./projects-images";

const SingleProject = ({ project }) => {
	const { name, description, tools, code, demo, images, features } = project;

	return (
		<div className="w-full h-fit flex flex-col items-center justify-center relative cursor-text overflow-hidden  bg-[linear-gradient(90deg,#281e57_0%,#201435_100%)] shadow-2xl rounded-lg border-[0px] ">
			<div className="flex flex-row w-full pb-2">
				<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
				<div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
			</div>

			<div className="absolute left-0 top-0 h-full  flex justify-center opacity-40 pointer-events-none ">
				<BackgroundSvg />
			</div>

			<div className="group flex flex-col items-center justify-between h-full w-full">
				<h2 className="text-center  ml-3 text-[#16f2b3] font-semibold text-[1.6rem] leading-[110%] capitalize h-[3rem]  bg-blend-darken flex flex-col items-center font-mono" style={{textDecoration:"wavy underline",lineHeight:"3rem"}}>
					{name}
          {/* <div className="flex flex-row w-full bg-white h-[1px]"></div> */}
				</h2>

				<div className="w-full flex justify-center z-10 aspect-video overflow-hidden">
					<ProjectsImages images={images} alt={`${name} image`} />
				</div>

				<p className="absolute w-[calc(100%-50px)] sm:w-[80%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-[0.9s] p-6  leading-[110%] rounded-[0_20px_20px_0] left-0 top-1/2 bg-[#0f0b24]  text-[#EFF3F4] translate-y-[-50%] group-hover:translate-x-[-2%] text-xs vsm:text-sm sm:text-base border border-l-0 ">
					{description}
				</p>
				<div className="group-hover:translate-x-0 absolute sm:w-[21%] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] group-hover:delay-[0.6s] p-[0.3rem] sm:p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-[4rem] border border-r-0 bg-[#27262c] text-[#EFF3F4]">
					{tools.map((tool, id) => (
						<div
							className="font-medium break-words text-xs flex gap-2 justify-center sm:justify-start"
							key={id}
						>
							<img
								src={skillsImage(tool)?.src}
								alt={tool}
								title={tool}
								className="max-h-[20px] w-18px  sm:w-[22px] vsm:w-[35px] object-fill"
							/>
							<span
								className="hidden sm:block"
								style={{ textWrap: "nowrap" }}
							>
								{tool}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className="flex items-center justify-evenly w-full mt-2 py-[0.7rem] px-3 md:px-8 bg-[rgba(0,0,0,0.3)]">
				<div className="flex flex-row items-center gap-3 text-lg">
					Demo
					<Link
						href={demo}
						target="_blank"
						className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 decoration-clone cursor-pointer no-underline "
					>
						<FaPlay />
					</Link>
				</div>
				<div className="flex flex-row items-center gap-3 text-lg">
					Code
					<Link
						href={code}
						target="_blank"
						className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110  cursor-pointer no-underline  group-hover:translate-x-[-140px]"
					>
						<FaCode />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleProject;
