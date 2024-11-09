import React from "react";
import Image from "next/image";
function About() {
  return (
    <div className="bg-gray-300">
      <div className="max-w-[88%] mx-auto">
        <section>
          <div className=" pt-40 max-w-[400px]  min-h-[180px] mx-auto">
            <h1
              id="about"
              className="  tracking-widest pt-6 pb-6 border-8 border-black  text-center font-bold text-5xl "
            >
              ABOUT ME
            </h1>
          </div>
          <div className="mt-16  text-lg">
            <p className=" text-center">
              Hi, I’m <span className="font-bold">SHAHBAZ AHMED,</span> a
              passionate and aspiring{" "}
              <span className="font-bold">web developer </span>
              from <span className="font-bold">KARACHI, PAKISTAN,</span> born on{" "}
              <span className="font-bold">April 25, 2004.</span> <br />
              I’ve always been encouraged to pursue my ambitions and dream big.
              Currently, I’m pursuing my undergraduate degree, and <br /> I’m
              focused on expanding my skills in web development, particularly in
              front-end technologies.
            </p>
          </div>
          <div className="text-center mt-10 text-lg">
            <p>
              I have a strong interest in coding and design, and I enjoy
              building dynamic, user-friendly websites that offer seamless{" "}
              <br /> experiences. Over the past few years, I’ve worked on
              several projects, learning various programming languages such as{" "}
              <br />
              <span className="font-bold">
                {" "}
                HTML, CSS, JavaScript, Typescript, React.js, Next.js and
                tailwind CSS{" "}
              </span>{" "}
              I’m constantly exploring new frameworks and tools <br />
              to enhance my development capabilities.
            </p>
          </div>
          <div className="text-center mt-10 text-lg">
            <p>
              Apart from web development, I enjoy staying updated with the
              latest tech trends, working on personal coding projects, <br />{" "}
              and participating in online communities where I collaborate with
              like-minded individuals.
            </p>
          </div>
          <div className="mt-20">
            <Image
              className=" mx-auto"
              src="/separatorBlack 1.png"
              alt="design"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-24 gap-14 md:gap-0 mb-14 flex justify-evenly text-center md:flex-row flex-col">
            <div>
              <h1 className="font-bold text-xl tracking-widest">DESIGN</h1>
              <p className="mt-5 text-lg">
                I can design the website based on your needs <br /> and
                suggestions. I can also create it from scratch by <br />{" "}
                consulting with you during my work.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-widest">DEVELOPMENT</h1>
              <p className="mt-5 text-lg">
                Based on a project created by me (or any another <br /> one
                provided by you), I can code the website to <br /> be fully
                functional and responsive.
              </p>
            </div>
          </div>
          <div className="md:mt-28 text-center">
            <h1 className="font-bold text-xl tracking-widest">
              MAINTENANCE
            </h1>
            <p className="mt-5 text-lg">
              I will look after your website, and in case .<br />
              of problems or the need for changes, I can <br /> introduce new
              functionalities and solutions.
            </p>
          </div>
          <Image
            className=" mx-auto mt-20"
            src="/separatorBlack 1.png"
            alt="design"
            width={200}
            height={200}
          />
        </section>
      </div>
    </div>
  );
}

export default About;
