"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header className="py-6 fixed w-full backdrop-blur-md  bg-black/70">
        <div className="flex justify-between max-w-[88%] mx-auto">
          <div>
            <Link href="/">
              <Image src="/logo-white.png" alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div>
            <nav className="hidden md:block">
              <ul className="font-semibold text-xl flex gap-10">
                <li className="text-white">
                  <Link href="/about">about me</Link>
                </li>
                <li className="text-white">
                  <Link href="/skills">Skills</Link>
                </li>
                <li className="text-white">
                  <Link href="/project">project</Link>
                </li>
                <li className="text-white">
                  <Link href="https://shahbaz-resume.netlify.app/" target="_blank" rel="noopener noreferrer">Resume</Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="bg-white pt-2 pb-2 px-2 rounded-3xl"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:hidden block mr-6">
            <span onClick={handleMenu} className="z-30 relative text-xl cursor-pointer">
              {!isOpen ? <MenuIcon className="text-white" /> : <CloseIcon className="text-white" />}
            </span>
            <div
              className={`p-12 absolute top-0 right-0 h-screen w-[80%] bg-black bg-opacity-100 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="flex justify-center items-center h-full">
                <ul className="flex flex-col justify-center gap-10">
                  <li className="text-white">
                    <Link href="/about">about me</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/skills">Skills</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/project">Project</Link>
                  </li>
                  <li className="text-white">
                    <Link href="https://shahbaz-resume.netlify.app/" target="_blank"  rel="noopener noreferrer">Resume</Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="bg-white pt-2 pb-2 px-2 rounded-3xl"
                    >
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
