/* eslint-disable react/prop-types */
import React from 'react';
import { MdHome, MdPerson, MdViewModule, MdEmail } from 'react-icons/md';
import { Link } from 'gatsby';
import { NavigationStyle } from '../styles';

export default function Navigation({ location }) {
  return (
    <NavigationStyle>
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
    </NavigationStyle>
  );
}
