/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Footer, Header } from '../components';
import { LayoutStyle } from '../styles';

export default function Layout({ children, location }) {
  const mode = useSelector((state) => state.mode);

  return (
    <>
      <Header location={location} mode={mode} />
      <LayoutStyle mode={mode}>{children}</LayoutStyle>
      <Footer mode={mode} />
    </>
  );
}
