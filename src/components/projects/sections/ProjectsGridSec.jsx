import { projectsData } from "../../../data/projects";
import ProjectSingle from "./ProjectSingleSec";
import LineHead from "../../reusable/LineHead";

const ProjectsGrid = () => {
  const filteredProjects = projectsData.filter(project => project.isShow);

  return (
    <section className="py-5 sm:py-10 mt-10 sm:mt-20">
      <LineHead title="_Projects"/>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-6 sm:gap-10">
         {filteredProjects.map((project) => (
              <ProjectSingle
                title={project.title}
                category={project.category}
                image={project.img}
                techno={project.technologies}
                key={project.id}
                redirect={project.redirect}
                githubLink={project.githubLink}
                isGit={project.isGit}
              />
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
