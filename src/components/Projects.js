import React from "react";
import ProjectCard from "./ProjectCard";
function Projects(props) {
  return (
    <div className="flex items-center justify-center py-16 bg-gray-900">
      <div className="grid grid-cols-3 mt-2">
        <ProjectCard fadeInDelay={100} />
        <ProjectCard fadeInDelay={200} />
        <ProjectCard fadeInDelay={300} />
        <ProjectCard fadeInDelay={400} />
        <ProjectCard fadeInDelay={500} />
        <ProjectCard fadeInDelay={600} />
        <ProjectCard fadeInDelay={700} />
        <ProjectCard fadeInDelay={800} />
      </div>
    </div>
  );
}

export default Projects;
