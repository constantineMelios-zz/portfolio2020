/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from '../components';

export default function Layout({ children, location }) {
  return (
    <>
      <Header location={location} />
      {children}
    </>
  );
}
