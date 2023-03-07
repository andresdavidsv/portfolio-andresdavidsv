/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { PageInfo } from '@/interfaces';
import { urlFor } from '../../sanity';

import { BackgroundCricles } from './BackgroundCricles';

type Props = { pageInfo: PageInfo };

export const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      'Hi, The Name`s Andres Solarte',
      'Guy-who-loves-Coffee.tsx',
      '<ButlovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCricles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="andres david sv"
        width={200}
        height={200}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href={'#about'}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={'#experience'}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
