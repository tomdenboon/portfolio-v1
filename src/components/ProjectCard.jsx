import HoverUpWrapper from './wrappers/HoverUpWrapper';
import FadeInAnimationWrapper from './wrappers/FadeInAnimationWrapper';
import { FiGithub, FiFolder, FiYoutube, FiExternalLink } from 'react-icons/fi';

function ProjectCardOuter(props) {
  return <div className="flex mx-2 my-1 group">{props.children}</div>;
}

function ProjectCardInner(props) {
  return (
    <div
      className="relative w-full flex flex-col px-8 py-8 bg-primary select-none group rounded-sm 
      transition duration-300 shadow-md group-hover:shadow-lg ease-in-out"
    >
      {props.children}
    </div>
  );
}

function ProjectCard(props) {
  const { title, description, tags, links, fadeInDelay } = props;

  function ProjectCardHeader() {
    return (
      <div className="flex justify-between items-center transition ease-in-out duration-200">
        <div className="text-4xl text-secondary">
          <FiFolder className="stroke-current stroke-1" />
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className=" text-2xl text-text-darkest hover:text-secondary transition ease-in-out duration-200"
            >
              {link.type === 'external' && <FiExternalLink />}
              {link.type === 'youtube' && <FiYoutube />}
              {link.type === 'github' && <FiGithub />}
            </a>
          ))}
        </div>
      </div>
    );
  }

  function ProjectCardFooter() {
    return (
      <div className="flex flex-wrap text-text-darkest font-mono font-thin text-sm gap-x-5 gap-y-1 mt-auto">
        {tags.map((tag, i) => {
          return <div key={i}>{tag}</div>;
        })}
      </div>
    );
  }

  return (
    <ProjectCardOuter>
      <FadeInAnimationWrapper direction="up" delay={fadeInDelay}>
        <HoverUpWrapper>
          <ProjectCardInner>
            <ProjectCardHeader />
            <div className="mb-4 mt-8 text-lg font-bold">{title}</div>
            <div className="text-text-dark font-sans font-medium mb-12">
              {description}
            </div>
            <ProjectCardFooter />
          </ProjectCardInner>
        </HoverUpWrapper>
      </FadeInAnimationWrapper>
    </ProjectCardOuter>
  );
}

export default ProjectCard;
