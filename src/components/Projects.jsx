import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    title: 'MonkeyLog',
    tags: ['Kotlin', 'Spring', 'Postgres', 'React', 'MUI'],
    links: [{ url: 'https://github.com/tomdenboon/monkeylog', type: 'github' }],
    description: (
      <>
        MonkeyLog is a workout logger which helps users track their workouts.
        The UI was primarily designed for mobile first, whilst still looking
        good on other devices. User Experience and responsitivity are priorities
        for this project. This project is still regularly being updated since
        there are always improvements or new features to be added.
      </>
    ),
  },
  {
    title: 'Archedetector',
    tags: ['Vue', 'Bootstrap', 'Java', 'Spring', 'Postgres'],
    links: [
      { url: 'https://github.com/tomdenboon/archedetector', type: 'github' },
    ],
    description: (
      <>
        Created a web application for the{' '}
        <a
          href="https://fse.studenttheses.ub.rug.nl/25813/"
          className="text-secondary hover:underline"
        >
          bachelor thesis
        </a>
        , that is able to store Jira projects and Mailing lists from the apache
        foundation into its own database. This was achieved with the jira API
        and a custom build crawler for the mailing lists. On top of this lucene
        was build. Which can be used to search the indices of these resources.
        Also added custom tagging to tag mail and issues. Finally we can export
        search queries for statistical analysis. This tool is currently still
        being used by students for their thesis research.
      </>
    ),
  },
  {
    title: 'Portfolio',
    tags: ['React', 'Tailwind'],
    links: [
      { url: 'https://github.com/tomdenboon/portfolio-v1', type: 'github' },
    ],
    description: (
      <>
        Website used to showcase my projects. I created it by, taking
        inspiration from other portfolios and then building and designing the
        components myself. This project supports react routing, redux, and
        themes (click smiley on homepage).
      </>
    ),
  },
  {
    title: 'Advent of Code',
    tags: ['Python'],
    links: [
      { url: 'https://github.com/tomdenboon/advent-of-code', type: 'github' },
    ],
    description: (
      <>
        This is my github repository for solving the advent of code puzzles!
        Advent of code is a series of challenges that get progressively harder
        throughout the December month. I wrote some custom python scripts to
        streamline this process.
      </>
    ),
  },
];

function Projects() {
  return (
    <div className="h-screen overflow-y-auto flex flex-col items-center pb-16 mt-16">
      <div className="flex">
        <div className="flex flex-col items-center text-4xl font-semibold py-16 ">
          Projects
          <div className="w-1/2 h-1 mt-4 bg-secondary"></div>
        </div>
      </div>
      <div className="max-w-screen-xl grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row auto-rows-max">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} fadeInDelay={i * 100} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
