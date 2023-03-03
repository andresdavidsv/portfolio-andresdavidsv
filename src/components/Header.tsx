import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

export const Header = (props: Props) => {
  return (
    <header>
      <div>
        {/* Social Icons */}
        <SocialIcon
          url="https://twitter.com/andresdavidsv"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/andresdavidsv"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/andresdavidsv"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/andresdavidsv"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </header>
  );
};
