import React from 'react';
import { FooterStyle } from '../styles';

export default function Footer({ mode }) {
  return (
    <FooterStyle mode={mode}>
      <small>
        Created by
        <a
          href="https://github.com/constantineMelios/portfolio2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          Constantine Melios
        </a>
      </small>
    </FooterStyle>
  );
}
