import React from "react";
import ProjectCard from "./ProjectCard";
import FadeInAnimationWrapper from "./wrappers/FadeInAnimationWrapper";

function Projects(props) {
  return (
    <div className="h-screen overflow-y-auto flex flex-col items-center pb-2 mt-16">
      <FadeInAnimationWrapper delay={100} direction="down" waitForNavbar={true}>
        <div className="flex flex-col items-center text-5xl font-semibold py-16 ">
          Projects
          <div className="w-1/2 h-1 mt-4 bg-green-700"></div>
        </div>
      </FadeInAnimationWrapper>
      <div className="max-w-screen-xl grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row auto-rows-max">
        <ProjectCard
          fadeInDelay={400}
          youtubeLink="https://youtu.be/LJU1tSHsynk"
          githubLink="https://github.com/tomdenboon/Archedetector"
          title="Archedetector ( API )"
          tags={["Java", "Spring Boot", "PostgreSQL"]}
        >
          Created an api for the{" "}
          <a
            href="https://fse.studenttheses.ub.rug.nl/25813/"
            className="text-green-700 hover:underline"
          >
            bachelor thesis
          </a>
          , that is able to store Jira projects and Mailing lists from the
          apache foundation into its own database. This was achieved with the
          jira API and a custom build crawler for the mailing lists. On top of
          this lucene was build. Which can be used to search the indices of
          these resources. Also added custom tagging to tag mail and issues.
          Finally we can export search queries for statistical analysis. This
          tool is currently still being used by students for their thesis
          research.
        </ProjectCard>
        <ProjectCard
          fadeInDelay={500}
          githubLink="https://github.com/tomdenboon/Archedetector-site"
          youtubeLink="https://youtu.be/LJU1tSHsynk"
          title="Archedetector ( Frontend )"
          tags={["Vue.js", "Bootstrap", "CSS"]}
        >
          Made a web interface for the api of the{" "}
          <a
            href="https://fse.studenttheses.ub.rug.nl/25813/"
            className="text-green-700 hover:underline"
          >
            bachelor thesis
          </a>
          . That way this tool can be used more easily. The tool makes use of
          axios requests and vue routing to correctly browse the api. Since I
          had limited time to develop my full stack application. I spend most my
          time on the api and functionality of the web interface, and less on
          styling.
        </ProjectCard>
        <ProjectCard
          fadeInDelay={600}
          githubLink="https://github.com/tomdenboon/tom-site"
          youtubeLink=""
          title="Portfolio"
          tags={["React", "Tailwind"]}
        >
          Website used to showcase my projects. I created it by, taking
          inspiration from other portfolio's and then building and designing the
          components myself.
        </ProjectCard>
      </div>
    </div>
  );
}

export default Projects;
