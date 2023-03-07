import React from 'react';
import { motion } from 'framer-motion';
import { Project as IProject } from '@/interfaces';
import { urlFor } from '../../sanity';

type Props = { project: IProject; id: number };

export const Project = ({ project, id }: Props) => {
  return (
    <div
      key={project._id}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" h-28 xl:h-80 md:h-72 object-contain"
        src={urlFor(project?.image).url()}
        alt={project.title}
      />

      <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
          <span className="underline decoration-gray-500/50">
            Project {id + 1}:
          </span>{' '}
          {project?.title}
          Project
        </h4>
        <div className="flex items-center space-x-2 justify-center ">
          {project?.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full object-cover"
              src={urlFor(technology?.image).url()}
              alt={technology.title}
            />
          ))}
        </div>

        <p className="text-sm md:text-md lg:text-lg text-justify ">
          {project?.summary}
        </p>
      </div>
    </div>
  );
};
