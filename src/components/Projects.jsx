import { memo, useState } from "react";
import { frontendProjects, fullStackProjects } from "../features/constants";
import { useNavigate } from "react-router-dom";
import { zoomSvg } from "../assets";
import ZoomableComponent from "./design/ZoomableImage";

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const truncateText = (text, maxLength = 110) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="border-primary dark-bg fade-in flex min-w-[18rem] max-w-[18rem] flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div
        className="group relative h-[15rem] w-full bg-cover bg-center bg-no-repeat"
        onClick={() => setPreview(project.image.img)}
        style={{ backgroundImage: `url(${project.image.imgPlaceHolder})` }}
      >
        <div className="absolute inset-0 hidden cursor-pointer items-center justify-center bg-black/40 group-hover:flex">
          <img src={zoomSvg} alt="zoom" className="w-8" />
        </div>
        <img
          src={project.image.img}
          alt={project.name}
          className="h-full w-full"
        />
      </div>
      <div className="flex h-full w-full flex-col justify-between p-4">
        <div className="group">
          <h3 className="text-2xl font-semibold transition-colors duration-200 group-hover:text-green-500">
            {project.name}
          </h3>
          {/* Project Description */}
          <p
            className="mt-2 text-justify"
            onClick={() => navigate(`/project/details/${project.index}`)}
          >
            {truncateText(project.description)}&nbsp;
            <span className="light cursor-pointer rounded-md p-1">more</span>
          </p>
          {/* Technologies used */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-200/30 px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <a href={project.url}>
            <button className="text-reverse bg-primary button rounded-md px-4 py-1">
              Visit
            </button>
          </a>
          <button
            className="border-primary text-primary light hover:text-reverse hover:bg-primary button rounded-md px-4 py-1"
            onClick={() => navigate(`/project/details/${project.index}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [preview, setPreview] = useState(null);

  const [projectPart, setProjectPart] = useState(0);

  return (
    <div
      id="projects"
      className="relative mb-[12rem] flex h-full min-w-full max-w-full flex-col gap-4"
    >
      {preview && (
        <div className="fixed inset-0 z-[1000] bg-black">
          <div
            className="body-1 w-full p-2 px-6 text-end text-white"
            onClick={() => setPreview(null)}
          >
            Close
          </div>
          <ZoomableComponent image={preview} />
        </div>
      )}
      <h1 className="h1 mb-6 text-center font-semibold">Featured Work</h1>
      <h5 className="h5 grid grid-cols-2">
        <span
          className={`${projectPart === 0 && "border-b-4 border-blue-500 bg-zinc-500/30"} w-full cursor-pointer p-2 text-center leading-tight`}
          onClick={() => setProjectPart(0)}
        >
          Frontend Projects 💻
        </span>
        <span
          className={`${projectPart === 1 && "border-b-4 border-blue-500 bg-zinc-500/30"} w-full cursor-pointer p-2 text-center leading-tight`}
          onClick={() => setProjectPart(1)}
        >
          Backend Projects 💻
        </span>
      </h5>
      <div className="scroll-design flex w-full max-w-full gap-6 overflow-x-scroll py-4 text-start">
        {projectPart === 0 &&
          frontendProjects.map((item) => (
            <ProjectCard project={item} key={item.name} />
          ))}
        {projectPart === 1 &&
          fullStackProjects.map((item) => (
            <ProjectCard project={item} key={item.name} />
          ))}
      </div>
    </div>
  );
};

export default memo(Projects);
