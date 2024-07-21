import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { Lighter } from "../../helper/lighter";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-24 lg:my-24">
      <div className="sticky top-14 space-y-14">
        <Lighter
          identifier="projects"
          className="absolute left-0 -top-5"
          move="left"
        >
          Projects
        </Lighter>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
