import React from "react";
import {
  FaAws,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative, TbSql } from "react-icons/tb";

export default function Skills() {
  const skills1 = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "Css", Icon: FaCss3 },
    { name: "Javascript", Icon: FaJs },
    { name: "Typescript", Icon: SiTypescript },
    { name: "React Js", Icon: FaReact },
    { name: "Next Js", Icon: SiNextdotjs },
    { name: "React Native", Icon: TbBrandReactNative },
    { name: "Node Js", Icon: FaNodeJs },
    { name: "Express Js", Icon: SiExpress },
    // { name: "Java", Icon: FaJava },
    // { name: "Sprint Boot", Icon: SiSpringboot },
    { name: "Mongoose", Icon: SiMongoose },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "SQL", Icon: TbSql },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "AWS", Icon: FaAws },
    { name: "Git", Icon: FaGit },
    { name: "WebSocket", Icon: null },
    { name: "LLM Integration", Icon: null },
    { name: "GPT Models", Icon: null },
    { name: "NLP", Icon: null },
    { name: "Vector Databases", Icon: null },
  ];

  return (
    <section>
      <p className="text-white text-base mb-2">I Am Skilled In :</p>

      <div className="grid grid-cols-2 xs:grid-cols-3 xl:grid-cols-4 py-2 xs:gap-x-0 gap-3 xl:gap-8 justify-items-center">
        {skills1.map((skill, skillI) => (
          <div
            key={skillI}
            className="flex flex-col items-center justify-between text-white gap-y-3 md:gap-y-4"
          >
            <p className="text-white xl:text-xl md:text-xl text-[14px]">
              {skill.name}
            </p>
            {skill.Icon && (
              <div>
                <skill.Icon className="xl:text-3xl text-xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
