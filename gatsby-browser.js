/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from './src/components';
import { GlobalStyle } from './src/styles';

export function wrapPageElement({ element, props }) {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Layout {...props}>{element}</Layout>
    </>
  );
}
