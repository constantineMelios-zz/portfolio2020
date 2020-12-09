/* eslint-disable react/prop-types */
import React from 'react';
import { Logo, LogoDark } from '../assets';
import { HeaderStyle } from '../styles';
import { Social, Navigation } from '.';

export default function Header({ location, mode }) {
  return (
    <HeaderStyle path={location.pathname} mode={mode}>
      {mode === 'light' ? (
        <Logo className="logo" alt="" />
      ) : (
        <LogoDark className="logo" alt="" />
      )}
      <Navigation location={location} />
      <Social />
    </HeaderStyle>
  );
}
