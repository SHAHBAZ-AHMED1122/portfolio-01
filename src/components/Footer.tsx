import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[88%] mx-auto">
        <footer className="pt-10 mx-auto ">
          <Link href="/">
            <Image
              className="mx-auto"
              src="/ic_baseline-double-arrow.svg"
              alt=""
              width={30}
              height={30}
            />
          </Link>
          <h1 className="text-center pt-5 font-bold tracking-wider text-lg">
            BACK TO TOP
          </h1>
          <div className="flex gap-8 justify-center items-center pt-10">
            <Link
              className=""
              target="_blank"
              href="https://github.com/SHAHBAZ-AHMED1122"
            >
              <Image
                className="bg-gray-400  p-1 shadow-2xl"
                src="/Vector-1.png"
                alt="icon "
                width={40}
                height={40}
              />
            </Link>
            <Link
              className=""
              target="_blank"
              href="https://www.linkedin.com/in/shahbaz-ahmed-4323912b5"
            >
              <Image
                className="bg-gray-400 p-1 shadow-2xl"
                src="/Vector-2.png"
                alt="icon "
                width={40}
                height={40}
              />
            </Link>
            <Link
              className=""
              target="_blank"
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            >
              <Image
                className="bg-black border-gray-400 border-8 p-1 shadow-2xl"
                src="/mail.svg"
                alt="icon "
                width={45}
                height={45}
              />
            </Link>
          </div>
          <p className="text-center mt-6">
            {" "}
            <span className="font-semibold">@2024 SHAHBAZ AHMED</span> All
            Rights Reserved.{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
