import React from "react";
import { useParams } from "react-router-dom";
import { frontendProjects, fullStackProjects } from "../features/constants";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { index } = useParams();

  const project = [...frontendProjects, ...fullStackProjects].find(
    (project) => project.index === parseInt(index),
  );

  return (
    <div className="mx-auto max-w-7xl p-8">
      {project ? (
        <>
          <div className="light overflow-hidden rounded-lg shadow-xl">
            <img
              src={project.image.backCover}
              alt={project.name}
              className="aspect-video w-full object-cover object-top"
            />

            <div className="p-6">
              <h1 className="text-4xl font-bold">{project.name}</h1>
              <p className="mt-4">{project.detailedDescription}</p>

              <h2 className="mt-8 text-2xl font-semibold">Technologies Used</h2>
              <ul className="mt-4 list-inside list-disc">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="">
                    {tech}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-2xl font-semibold">Challenges Faced</h2>
              <p className="mt-4">{project.challengesFaced}</p>

              <h2 className="mt-8 text-2xl font-semibold">Skills Developed</h2>
              <p className="mt-4">{project.skillsDeveloped}</p>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Visit Project
                </a>

                <a
                  href={project.additionalLinks?.[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  View GitHub Repo
                </a>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold">Project Highlights</h2>
                <ul className="mt-4 list-inside list-disc">
                  {project.projectHighlights.map((highlight, index) => (
                    <li key={index} className="">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold">
                  Additional Information
                </h2>
                <p className="mt-4">
                  Duration: {project.duration} <br />
                  Role: {project.role} <br />
                  Project Type: {project.projectType}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default ProjectDetail;
