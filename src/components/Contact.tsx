import React from "react";
import Image from "next/image";
function Contact() {
  return (
    <div className="bg-gray-300">
      <div className="max-w-[88%] mx-auto">
        <section>
          <div className="pb-10 pt-40 max-w-[400px]  min-h-[180px] mx-auto ">
            <h1 className="  tracking-widest pt-6 pb-6 border-8 border-black  text-center font-bold text-5xl ">
              CONTACT
            </h1>
          </div>
          <div className="md:px-[240px] pt-5">
            <p className="text-lg ">
              If you are interested in cooperation or would like to hire me for
              your project- <br /> please contact me by e-mail
              <span className="font-bold">(sa0856508@gmail.com) </span> or use
              the form <br /> below
            </p>
          </div>
          <Image
            className="mx-auto pt-32"
            src="/separatorBlack 1.png"
            alt=""
            width={200}
            height={200}
          />
          <div className="mt-20 text-center">
            <input
              type="text"
              placeholder="ENTER YOUR NAME* "
              required
              className=" mb-8 md:w-[520px] w-full pt-2 pb-2 border-l-8 border-b-8 border-black"
            />{" "}
            <br />
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL* "
              required
              className=" mb-8 md:w-[520px] w-full pt-2 pb-2 border-l-8 border-b-8 border-black"
            />{" "}
            <br />
            <input
              type="email"
              placeholder="ENTER YOUR PHONE NUMBER* "
              required
              className=" mb-8 md:w-[520px] w-full pt-2 pb-2 border-l-8 border-b-8 border-black"
            />{" "}
            <br />
            <input
              type="email"
              placeholder=" YOUR MESSAGE* "
              required
              className=" pb-32  md:w-[520px] w-full  border-l-8 border-b-8 border-black"
            />{" "}
            <br />
            <button className="font-bold mt-10 text-xl border-l-4 border-black border-r-4 px-5 mb-32 hover:bg-black hover:text-white hover:px-2">
              SUBMIT
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
