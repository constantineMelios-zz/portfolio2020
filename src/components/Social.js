import React from 'react';
import { ImGithub, ImLinkedin, ImCodepen, ImTwitter } from 'react-icons/im';
import { SocialStyle } from '../styles';

export default function Social({ className }) {
  return (
    <SocialStyle className={className}>
      <a
        href="https://www.linkedin.com/in/cmelios/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImLinkedin />
      </a>
      <a
        href="https://twitter.com/Melios_Cos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImTwitter />
      </a>
      <a
        href="https://github.com/constantineMelios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImGithub />
      </a>
      <a
        href="https://codepen.io/ConstantineMelios"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImCodepen />
      </a>
    </SocialStyle>
  );
}
