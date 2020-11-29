import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiLightBulb } from 'react-icons/gi';
import { dark, light } from '../redux/mode';
import { ModeSelectorStyle } from '../styles';

export default function ModeSelector() {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  function toggleMode() {
    if (mode === 'light') {
      dispatch(dark());
    } else {
      dispatch(light());
    }
  }

  return (
    <ModeSelectorStyle
      mode={mode}
      type="button"
      onClick={toggleMode}
      aria-label="change color mode"
    >
      <GiLightBulb />
    </ModeSelectorStyle>
  );
}
