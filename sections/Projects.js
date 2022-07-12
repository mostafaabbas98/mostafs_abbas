import ProjectsDetails from '../components/ProjectsDetails';

import projectData from '../data/projectData';

const Projects = () => {
  return (
    <section id="projects" className="w-full pt-32">
      <h1 className="text-2xl text-center font-semibold capitalize underline decoration-double pb-10 text-amber-500">
        Projects
      </h1>
      <div className="flex flex-col gap-8">
        {projectData.map((data) => (
          <ProjectsDetails key={data.githubLink} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
