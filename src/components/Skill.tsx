import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

export const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={
          'https://media.licdn.com/dms/image/C5603AQHrtQiGaZxuhg/profile-displayphoto-shrink_200_200/0/1609116862933?e=1683763200&v=beta&t=H9cIj1S2bfqadhn3e0EU3sCV6yZ41bhIlXPh4H5hYOs'
        }
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {/* {skill.progress}% */}
            100%
          </p>
        </div>
      </div>
    </div>
  );
};
