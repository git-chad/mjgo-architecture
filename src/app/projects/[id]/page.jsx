"use client";
import React, { useEffect } from "react";
import projectsData from "/public/projects.json";
import Lenis from "@studio-freight/lenis";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ProjectPage = ({ params }) => {
  const { id } = params;
  console.log(id);
  const project = projectsData.find((proj) => proj.id === id);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (!project) {
    return (
      <div className="grid-bg w-full h-screen flex justify-center items-center text-center">
        <h2 className="text-6xl font-bold p-1"><span className="text-red-500">404</span> Project not found</h2>
      </div>
    );
  }

  return (
    <main className="grid-bg w-full h-full">
      <div className="sm:p-24 overflow-x-hidden mt-32">
        <h2 className={`${montserrat.className} w-screen text-center sm:text-start text-6xl sm:text-7xl font-black`}>
          {project.name}
        </h2>
        <span className="sub-span"></span>
        <p className="text-3xl p-2 text-center sm:text-start sm:w-[25ch] my-8">{project.shortDescription}</p>
        <section className="flex flex-col sm:space-y-36 justify-center items-center mb-24">
          {project.pictures.map((pic, index) => {
            return (
              <img className="min-w-[360px] px-4 pb-4 sm:p-0" key={index} src={pic} />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default ProjectPage;
