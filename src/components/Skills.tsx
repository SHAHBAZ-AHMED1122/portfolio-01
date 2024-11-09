import React from "react";
import Image from "next/image";
function Skills() {
  return (
    <div className="bg-gray-300">
      <div className="max-w-[88%] mx-auto">
        <section>
          <div className=" pt-40 max-w-[400px]  min-h-[180px] mx-auto ">
            <h1
              id="skills"
              className="  tracking-widest pt-6 pb-6 border-8 border-black  text-center font-bold text-5xl "
            >
              SKILLS
            </h1>
          </div>
          <div className="mt-20 ml-32">
            <h1 className="font-bold text-3xl tracking-widest">USING NOW:</h1>
          </div>
          <div className="flex justify-evenly font-semibold md:flex-row flex-col items-center">
            <div className="mt-12 ">
              <Image src="/html.2.png" alt="html" width={100} height={100} />
              <p className="ml-3 mt-3">HTML 5</p>
            </div>
            <div className="mt-12">
              <Image src="/c.png" alt="html" width={100} height={100} />
              <p className="ml-10 pt-3 ">CSS</p>
            </div>
            <div className="mt-12">
              <Image src="/java.2.png" alt="html" width={100} height={100} />
              <p className="pt-3">JAVASCRIPT</p>
            </div>
          </div>

          <div className="flex justify-evenly font-semibold md:flex-row flex-col items-center">
            <div className="mt-12 ">
              <Image src="/Group 14.svg" alt="react" width={100} height={100} />
              <p className="ml-3 mt-3">REACT.JS</p>
            </div>
            <div className="mt-12">
              <Image src="/nnn.jpg" alt="next" width={100} height={100} />
              <p className="ml-10 pt-10 ">NEXT.JS</p>
            </div>
            <div className="mt-12">
              <Image src="/tt.jpg" alt="tailwind" width={100} height={100} />
              <p className="pt-10">TAILWIND</p>
            </div>
          </div>



          <div className="mt-20 ml-32">
            <h1 className="font-bold text-3xl tracking-widest">LEARNING:</h1>
          </div>         
          
          <div className="flex justify-evenly font-semibold pb-40 md:flex-row flex-col items-center">
            <div className="mt-12 ">
              <Image src="/web.jpg" alt="web" width={100} height={100} />
              <p className="ml-2 mt-8">METAVERSE <br /> & WEB 3.0</p>
            </div>
            <div className="mt-12">
              <Image src="/ai.jpg" alt="ai" width={100} height={100} />
              <p className=" pt-5 ">AGENTIC AI</p>
            </div>
            <div className="mt-12">
              <Image src="/redux.jpg" alt="redux" width={100} height={100} />
              <p className=" ml-5 ">REDUX</p>
            </div>
          </div>



        </section>
      </div>
    </div>
  );
}

export default Skills;
