/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BackgroundCricles } from './BackgroundCricles';

type Props = {};

export const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
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
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C5603AQHrtQiGaZxuhg/profile-displayphoto-shrink_200_200/0/1609116862933?e=1683763200&v=beta&t=H9cIj1S2bfqadhn3e0EU3sCV6yZ41bhIlXPh4H5hYOs"
        alt="andres david sv"
      />
      <div>
        <h2>Software Engineer</h2>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
};
