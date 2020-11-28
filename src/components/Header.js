import { Link } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import { Logo, LogoDark } from '../assets';
import { HeaderStyle } from '../styles';

export default function Header() {
  const mode = useSelector((state) => state.mode);

  return (
    <HeaderStyle>
      {mode === 'light' ? <Logo alt="" /> : <LogoDark alt="" />}
      <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/About">
          About
        </Link>
        <Link exact to="/Projects">
          Projects
        </Link>
        <Link exact to="/Contact">
          Contact
        </Link>
      </nav>
    </HeaderStyle>
  );
}
