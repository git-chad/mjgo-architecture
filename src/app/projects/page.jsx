import React from "react";
import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import Image from "next/image";
import model1 from "/public/model-1.jpg"

const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <main className="grid-bg w-screen h-screen flex flex-col justify-center items-center">
      <h2 className={`${montserrat.className} font-black text-start text-7xl`}>
        Projects
      </h2>
      <section className="grid-section mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <a href="/">
          <div>
            <Image src={model1} width={400} className="hover:grayscale-0 grayscale-[70%] transition-all"/>
            <small>Lil beach project</small>
          </div>
        </a>

        <a href="/">
          <div>
            <Image src={model1} width={400} className="hover:grayscale-0 grayscale-[70%] transition-all"/>
            <small>Lil beach project</small>
          </div>
        </a>

        <a href="/">
          <div>
            <Image src={model1} width={400} className="hover:grayscale-0 grayscale-[70%] transition-all"/>
            <small>Lil beach project</small>
          </div>
        </a>

        <a href="/">
          <div>
            <Image src={model1} width={400} className="hover:grayscale-0 grayscale-[70%] transition-all"/>
            <small>Lil beach project</small>
          </div>
        </a>

        <a href="/">
          <div>
            <Image src={model1} width={400} className="hover:grayscale-0 grayscale-[70%] transition-all"/>
            <small>Lil beach project</small>
          </div>
        </a>
        
      </section>
    </main>
  );
};

export default Projects;
