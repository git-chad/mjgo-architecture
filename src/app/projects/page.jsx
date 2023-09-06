"use client";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import projectsData from "../../../../data/projects.json";

const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="projects grid-bg w-screen h-screen flex flex-row justify-center items-center overflow-auto">
      <div className="h-l w-1/3 h-full p-8 sticky top-32">
        <h2 className={`${montserrat.className} font-black text-7xl`}>
          Projects
        </h2>
        <div className={`info-section ${activeProject ? "active" : ""}`}>
          <h3 className="project-title text-3xl my-8 font-bold">
            {activeProject?.name}
          </h3>
          <p className="project-description text-lg mb-4">
            {activeProject?.shortDescription}
          </p>
          <ul className="project-materials">
            {activeProject?.materials.map((material, index) => (
              <li key={index} className="text-sm">
                {material}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-r w-2/3 max-w-[1000px] h-full p-32 grid grid-cols-1">
        {projectsData.map((project) => (
          <section
            className="w-full h-1/2"
            key={project.id}
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <figure>
              <Image
                width={1000}
                height={0}
                src={project.pictures[0]}
                alt={project.name}
              />
              <div className="flex justify-between items-center p-5">
                <figcaption className="italic text-lg">
                  {project.name}
                </figcaption>
                <Link href='/posts/[id]' as={`/projects/${project.id}`} className="text-lg font-bold">details</Link>
              </div>
            </figure>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Projects;
