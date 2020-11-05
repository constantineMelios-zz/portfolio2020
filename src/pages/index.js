import React from "react"
import { Helmet } from "react-helmet"
import 
  { Bootstrap, 
    CSS, 
    Gatsby, 
    Git, 
    HTML, 
    JavaScript, 
    ReactJS, 
    Sass, 
    StyledComponents, 
    Tailwind 
  } from "../assets"
import GlobalStyle from '../styles/GlobalStyle'
import MainStyle from "../styles/MainStyle"


export default function Home() {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <MainStyle>
        <div className="main-side">
          <h1 className="main-title">Hello, I am <br/> Constantine Melios,<br/> web developer.</h1>
          <p className="main-content">Front-End Developer | Digital Marketer</p>
        </div>
        <div className="main-side image-container">
          <JavaScript className="javascript"/>
        </div>
      </MainStyle>
    </>
  )
}
