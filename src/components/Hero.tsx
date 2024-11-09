import React from "react";
import Link from "next/link";
import Image from "next/image";
function Hero() {
  return (
    <div className="bg-gray-300">
      <section  className="bg-black text-white">
        <div className="max-w-[88%] mx-auto  ">
          <div className="flex justify-between md:flex-row flex-col">
            <div>
              <p className="font-bold text-2xl mt-36">Hi, i am</p>
              <h1 className="font-bold text-5xl mt-16">SHAHBAZ AHMED</h1>
              <p className="font-bold text-gray-500">
                {" "}
                Front-end Developer / UI Designer
              </p>
              <div className="flex mt-20 gap-6 ml-20 ">
                <Link
                  target="_blank"
                  href="https://github.com/SHAHBAZ-AHMED1122"
                >
                  <Image
                    className="bg-gray-400 p-1 shadow-2xl"
                    src="/Vector-1.png"
                    alt="icon "
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
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
              </div>
            </div>
            <div className="">
              <Image
                className="mt-6 pt-20 "
                src="/without-bg-short.png"
                alt="profile"
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
