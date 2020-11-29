/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import { MdHome, MdPerson, MdViewModule, MdEmail } from 'react-icons/md';
import { Logo, LogoDark } from '../assets';
import { HeaderStyle } from '../styles';
import Social from './Social';

export default function Header({ location }) {
  const mode = useSelector((state) => state.mode);
  return (
    <HeaderStyle path={location.pathname}>
      {mode === 'light' ? <Logo alt="" /> : <LogoDark alt="" />}
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'disabled' : ''}>
          <MdHome />
          Home
        </Link>
        <Link
          to="/About"
          className={location.pathname === '/About' ? 'disabled' : ''}
        >
          <MdPerson />
          About
        </Link>
        <Link
          to="/Projects"
          className={location.pathname === '/Projects' ? 'disabled' : ''}
        >
          <MdViewModule />
          Projects
        </Link>
        <Link
          to="/Contact"
          className={location.pathname === '/Contact' ? 'disabled' : ''}
        >
          <MdEmail />
          Contact
        </Link>
      </nav>
      <Social />
    </HeaderStyle>
  );
}
