import { useContext } from "react";
import { AppContext } from "../features/AppContext";
import NotFound from "./NotFound";
import {
  backendTechnologies,
  databaseTechnologies,
  frontendTechnologies,
  otherTechnologies,
} from "../features/constants";
import { useParams } from "react-router-dom";

const SkillsDetails = () => {
  const { index } = useParams();
  console.log(index);

  // Combine all elements from the different technology categories
  const allTechnologies = [
    ...frontendTechnologies.elements,
    ...backendTechnologies.elements,
    ...databaseTechnologies.elements,
    ...otherTechnologies.elements,
  ];

  // Find the skill by index
  const skill = allTechnologies.find(
    (skill) => skill.index === parseInt(index),
  );

  const { name, image, description, highlights, problemSolved, projects } =
    skill;

  return (
    <div className="light flex h-full flex-col space-y-6 rounded-lg p-6 shadow-lg">
      {skill.name ? (
        <>
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <img
              src={image}
              alt={name}
              className="h-20 w-20 rounded-md border object-contain shadow-md lg:h-32 lg:w-32"
            />
            <div>
              <h3 className="text-2xl font-bold lg:text-3xl">{name}</h3>
              <p className="text-base leading-relaxed lg:text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Highlights Section */}
          {highlights?.length > 0 && (
            <section>
              <h4 className="text-lg font-semibold">Highlights:</h4>
              <ul className="list-disc space-y-2 pl-5">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Problem Solved Section */}
          {problemSolved && (
            <section>
              <h4 className="text-lg font-semibold">Problem Solved:</h4>
              <p className="text-base leading-relaxed">{problemSolved}</p>
            </section>
          )}

          {/* Projects Section */}
          {projects?.length > 0 && (
            <section>
              <h4 className="text-lg font-semibold">Projects:</h4>
              <ul className="list-disc space-y-2 pl-5">
                {projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default SkillsDetails;
