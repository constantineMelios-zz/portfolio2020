import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons';
import { useSelector } from 'react-redux';
import { ThemeStyle } from '../styles';

export default function Theme() {
  const mode = useSelector((state) => state.mode);

  return <ThemeStyle>Theme</ThemeStyle>;
}
