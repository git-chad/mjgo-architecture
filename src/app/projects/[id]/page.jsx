import React from "react";
import projectsData from "../../../../../data/projects.json";
import Image from "next/image";

const ProjectPage = ({ params }) => {
  const { id } = params;
  console.log(id);
  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className=" grid-bg w-screen h-screen flex justify-center items-center">
        <h2 className="text-6xl font-bold">Project not found 😔</h2>
      </div>
    );
  }

  return (
    <main>
      <h2>{project.name}</h2>
      <p>{project.shortDescription}</p>
      <ul>
        {project.materials.map((material, index) => (
          <li key={index}>{material}</li>
        ))}
      </ul>
      <section>photo section</section>
    </main>
  );
};

export default ProjectPage;