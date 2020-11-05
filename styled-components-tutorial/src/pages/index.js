import React from "react"
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
      <GlobalStyle />
      <MainStyle>
        <div className="main-side">
          <h1 className="main-title">Hello I am Constantine Melios, web developer.</h1>
          <p className="main-content">Front End Developer | Digital Marketer</p>
        </div>
        <div className="main-side image-container">
          <JavaScript />
        </div>
      </MainStyle>
    </>
  )
}
