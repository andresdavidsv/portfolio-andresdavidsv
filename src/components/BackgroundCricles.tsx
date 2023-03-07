import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export const BackgroundCricles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-grayColor rounded-full h-[200px] w-[200px] mt-64 md:mt:52 animate-ping" />
      <div />
      <div className="rounded-full absolute border border-grayColor h-[300px] w-[300px] mt-64 md:mt:52" />
      <div />
      <div className="rounded-full absolute border border-grayColor h-[500px] w-[500px] mt-64 md:mt:52" />
      <div />
      <div className="rounded-full absolute border border-yellowColor  opacity-20 h-[650px] w-[650px] mt-64 md:mt:52 animate-pulse " />
      <div />
      <div className="rounded-full absolute border border-grayColor  h-[800px] w-[800px] mt-64 md:mt:52 " />
      <div />
    </motion.div>
  );
};
