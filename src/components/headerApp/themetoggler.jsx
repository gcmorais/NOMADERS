import * as React from 'react';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { BiSun } from 'react-icons/bi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ColorModeContext } from '../../contexts/ThemeMaterial';
import { ThemeContext } from '../../contexts/ThemeContext';

function ThemeToggler() {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  function handleClick(e) {
    toggleMode();
    handleToggleTheme(e);
  }

  return (
    <button
      type="button"
      className="rounded-full bg-primary-white p-2 text-secundary-gray/80 drop-shadow-lg dark:bg-primary-blue"
      onClick={handleClick}
    >
      {mode === 'dark' ? <BiSun /> : <BsFillMoonStarsFill />}
    </button>
  );
}

export default ThemeToggler;
