"use client";
import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import Link from "next/link";
import projectsData from "/public/projects.json";
import Lenis from "@studio-freight/lenis";

const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const h2Ref = useRef(null);
  const spanRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const h2 = h2Ref.current;
    const span = spanRef.current;
    setIsMobile(window.innerWidth > 768);

    h2.style.opacity = 0;
    h2.style.transform = "translate(0, 48px)";
    h2.style.transition =
      "opacity 0.4s cubic-bezier(0.9, 0.03, 0.69, 0.22), transform 0.4s cubic-bezier(0.9, 0.03, 0.69, 0.22)";

    setTimeout(() => {
      h2.style.opacity = 1;
      h2.style.transform = "translate(0, 0px)";

    }, 300);

    if (window.innerWidth <= 768) {
      setTimeout(() => {
        span.style.opacity = 0;
        h2.style.opacity = 0; // You can adjust this as needed
        h2.style.transform = "translate(0, -48px)"; // Adjust the value as per your design
      }, 1000);
    }
  }, [isMobile]);

  return (
    <main className="projects grid-bg w-screen h-screen flex flex-col md:flex-row justify-center items-center overflow-auto">
      <div className="h-l md:w-1/3 md:h-full p-8 absolute sm:sticky sm:top-32 top-12">
        <h2
          ref={h2Ref}
          className={`${montserrat.className} proj-title font-black text-7xl`}
        >
          Projects
        </h2>
        <span ref={spanRef} className="sub-span"></span>
        <div className={`info-section ${activeProject ? "active" : ""}`}>
          <h3 className="project-title text-3xl my-8 font-bold">
            {activeProject?.name}
          </h3>
          <p className="project-description text-lg mb-4">
            {activeProject?.shortDescription}
          </p>
        </div>
      </div>

      <div className="h-r sm:w-2/3 max-w-[1000px] h-full sm:p-32 sm:grid sm:grid-cols-1 mt-80">
        {projectsData.map((project) => (
          <section
            className="w-full sm:h-1/2"
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <figure>
              <img
                className="min-w-[360px] p-4"
                src={project.pictures[0]}
                alt={project.name}
              />
              <div className="flex justify-between items-center p-5">
                <figcaption className="italic text-lg">
                  {project.name}
                </figcaption>
                <Link
                  href="/posts/[id]"
                  as={`/projects/${project.id}`}
                  className="text-lg font-bold"
                >
                  details
                </Link>
              </div>
            </figure>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Projects;
