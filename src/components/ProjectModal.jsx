import React from "react";
import { FaGithub, FaRegEye } from "react-icons/fa";

const ProjectModal = ({ project, setIsModalOpen }) => {
  const { title, url, github_repo_url, description, skills } = project;

  console.log({ project });

  return (
    <div className="flex justify-center items-center fixed z-10 top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-70 p-6">
      <div className="w-fit h-fit border-[2px solid var(--eerie-black-1)] rounded-xl bg-[var(--smoky-black)] text-white p-4 space-y-4">
        <div className="flex justify-between">
          <p className="">{title}</p>

          <div className="flex gap-x-4">
            <a href={github_repo_url} target="_blank" className="text-xl">
              <FaGithub />
            </a>
            <a href={url} target="_blank" className="text-xl">
              <FaRegEye />
            </a>
          </div>
        </div>

        <section className="flex flex-col">
          {skills.length > 0 && (
            <div className="flex gap-x-4">
              <p>Skills:</p>
              {skills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </div>
          )}
        </section>

        <section>
          {description.length > 0 && (
            <div className="space-y-6">
              {description.map(({ title, points }) => (
                <div key={title} className="space-y-2">
                  <p className="text-xl">{title}</p>
                  {points.map((point) => (
                    <ol className="">
                      <li className="timeline-bullet">
                        <p key={point} className="text-sm">
                          {point}
                        </p>
                      </li>
                    </ol>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>

        <p className="w-fit ml-auto">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Close
          </button>
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
