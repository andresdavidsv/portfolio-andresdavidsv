import React from 'react';
import { motion } from 'framer-motion';
import { Project } from './Project';

type Props = {};

export const Projects = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-500/80">
        {/* {projects?.map((project, i) => (
          
        ))} */}
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-gray-500/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};
