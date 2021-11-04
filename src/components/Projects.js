import React from "react";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  return (
    <div className="h-screen overflow-y-auto flex flex-col items-center py-16">
      <div className="max-w-screen-lg grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row auto-rows-max">
        <ProjectCard
          fadeInDelay={100}
          githubLink="https://github.com/tomdenboon/Archedetector"
          title=" Search engine on top of Jira issues and developer mailing lists ( API )"
          tags={["Java", "Spring Boot", "PostgreSQL"]}
        >
          For the bachelor's thesis I had to create an api with a search engine
          to make queries to find and tag software architectural posts.
        </ProjectCard>
        <ProjectCard
          fadeInDelay={200}
          githubLink="https://github.com/tomdenboon/Archedetector-site"
          title=" Search engine on top of Jira issues and developer mailing lists ( Frontend )"
          tags={["Vue.js", "Bootstrap", "CSS"]}
        >
          For the bachelor's thesis I had to create an api with a search engine
          to make queries to find and tag software architectural posts.
        </ProjectCard>
        <ProjectCard
          fadeInDelay={300}
          githubLink="https://github.com/tomdenboon/tom-site"
          title="Portfolio website"
          tags={["React", "Tailwind"]}
        >
          For the bachelor's thesis I had to create an api with a search engine
          to make queries to find and tag software architectural posts.
        </ProjectCard>
        <ProjectCard
          fadeInDelay={400}
          githubLink="https://github.com/tomdenboon/Archedetector"
          title=" Search engine on top of Jira issues and developer mailing lists ( API )"
          tags={["Java", "Spring Boot", "PostgreSQL"]}
        >
          For the bachelor's thesis I had to create an api with a search engine
          to make queries to find and tag software architectural posts.
        </ProjectCard>
        <ProjectCard
          fadeInDelay={500}
          githubLink="https://github.com/tomdenboon/Archedetector-site"
          title=" Search engine on top of Jira issues and developer mailing lists ( Frontend )"
          tags={["Vue.js", "Bootstrap", "CSS"]}
        >
          For the bachelor's thesis I had to create an api with a search engine
          to make queries to find and tag software architectural posts.
        </ProjectCard>
      </div>
    </div>
  );
}

export default Projects;
