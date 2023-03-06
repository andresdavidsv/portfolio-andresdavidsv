import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export const ExperienceCard = ({}: Props) => {
  return (
    <article className=" flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72  md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-5 md:p10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:invisible xl:visible md:h-0 w-28 h-28 md:w-0 rounded-full xl:w-[150px] xl:h-[150px] mb-2 object-cover object-center"
        src={
          'https://www.turbotransav.co/wp-content/uploads/2022/05/turbo-trans-av-scaled.jpg'
        }
        alt=""
      />
      <div className="w-full px-0 md:px-10">
        <div className=" md:flex md:justify-between items-center">
          <div>
            <h4 className="text-lg md:text-3xl font-light text-white">
              {/* {experience?.jobTitle} */}
              Test
            </h4>
            <p className="font-bold text-md md:text-2xl  mt-1 text-lightGreen">
              {/* {experience?.company} */}
              Test
            </p>
            <div className="flex space-x-2 my-2">
              {/* {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-10 w-10 rounded-full object-cover"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))} */}
              Test
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28  rounded-full mb-0 object-cover object-center"
            src={
              'https://www.turbotransav.co/wp-content/uploads/2022/05/turbo-trans-av-scaled.jpg'
            }
            alt=""
          />
        </div>
        <p className="uppercase py-2 md:py-5 text-white-500 text-sm md:text-lg">
          {/* {new Date(experience?.dateStarted).toDateString()} -{' '}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience?.dateEnded).toDateString()} */}
          Present
        </p>
      </div>
      <ul className="px-0 md:px-10 list-disc  text-white space-y-2 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500/80">
        {/* {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))} */}
        <li>List</li>
        <li>List</li>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </article>
  );
};