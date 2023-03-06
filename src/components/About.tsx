import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className=" -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://media.licdn.com/dms/image/C5603AQHrtQiGaZxuhg/profile-displayphoto-shrink_200_200/0/1609116862933?e=1683763200&v=beta&t=H9cIj1S2bfqadhn3e0EU3sCV6yZ41bhIlXPh4H5hYOs"
      />
      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{' '}
          <span className=" underline decoration-gray-500/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm md:text-lg lg:text-lg text-justify">Sanyti</p>
      </div>
    </div>
  );
};
