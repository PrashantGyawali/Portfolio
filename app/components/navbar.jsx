// @flow strict
import { PORTFOLIO_NAME } from "@/utils/data/navbarData";
import Link from "next/link";
import "./navbar.css";
import { blog_website } from "@/utils/data/blogData";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            {PORTFOLIO_NAME}
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li className="nav-item text-white hover:text-[#16f2b3]">
            <Link className=" block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm transition-colors duration-300">ABOUT</div>
            </Link>
          </li>
          <li className="nav-item text-white hover:text-[#16f2b3]">
            <Link className=" block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm  transition-colors duration-300 ">EXPERIENCE</div></Link>
          </li>
          <li className="nav-item text-white hover:text-[#16f2b3]">
            <Link className=" block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm transition-colors duration-300">SKILLS</div></Link>
          </li>
          <li className="nav-item text-white hover:text-[#16f2b3]">
            <Link className=" block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm  transition-colors duration-300">EDUCATION</div></Link>
          </li>
          <li className="nav-item text-white hover:text-[#16f2b3]">
            <Link className=" block px-4 py-2 no-underline outline-none hover:no-underline" href={blog_website}><div className="text-sm  transition-colors duration-300 ">BLOGS</div></Link>
          </li>
          <li className="nav-item text-white hover:text-[#16f2b3]">
            <Link className=" block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm  transition-colors duration-300">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;