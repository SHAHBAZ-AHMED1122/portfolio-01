import React from "react";
import { CarouselSize } from "./Slider";
function Project() {
  return (
      <section className="bg-black py-10">
        <div
          className=" bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/back.png')" }}
        >
          <div id="project" className=" pb-10 pt-40 max-w-[400px] min-h-[180px] mx-auto ">
            <h1 className="  tracking-widest pt-6 pb-6 border-8 border-black  text-center font-bold text-5xl ">
              PROJECTS
            </h1>
          </div>
        </div>
          <div>
            <CarouselSize/>
          </div>
      </section>
  );
}

export default Project;
