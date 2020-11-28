import React from 'react';
import { Helmet } from 'react-helmet';
import {
  CSS,
  Gatsby,
  Git,
  HTML,
  JavaScript,
  ReactJS,
  Sass,
  StyledComponents,
  ReduxJS,
} from '../assets';
import { MainStyle } from '../styles';

export default function Home() {
  return (
    <MainStyle>
      <div className="main__side">
        <h1 className="main__title">
          <span id="first">Hello, I am</span>
          <span id="second" data-text="Constantine Melios">
            Constantine Melios
          </span>
        </h1>
        <h2 className="main__content">
          Front-End Developer | Digital Marketer
        </h2>
        <a href="#" className="main__primary-button">
          Contact Me
        </a>
        <a href="#" className="main__secondary-button">
          Learn More
        </a>
      </div>
      <div className="main-side image-container">
        <ReactJS className="react" />
        <ReduxJS className="redux" />
        <HTML className="html" />
        <Gatsby className="gatsby" />
        <JavaScript className="javascript" />
        <Git className="git" />
        <StyledComponents className="styled-components" />
        <CSS className="css" />
        <Sass className="sass" />
      </div>
    </MainStyle>
  );
}
