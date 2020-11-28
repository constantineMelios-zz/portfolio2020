import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import { MdHome, MdPerson, MdViewModule, MdEmail } from 'react-icons/md';
import { Logo, LogoDark } from '../assets';
import { HeaderStyle } from '../styles';
import Social from './Social';

export default function Header() {
  const mode = useSelector((state) => state.mode);

  return (
    <HeaderStyle>
      {mode === 'light' ? <Logo alt="" /> : <LogoDark alt="" />}
      <nav>
        <Link exact to="/">
          <MdHome />
          Home
        </Link>
        <Link exact to="/About">
          <MdPerson />
          About
        </Link>
        <Link exact to="/Projects">
          <MdViewModule />
          Projects
        </Link>
        <Link exact to="/Contact">
          <MdEmail />
          Contact
        </Link>
      </nav>
      <Social />
    </HeaderStyle>
  );
}
