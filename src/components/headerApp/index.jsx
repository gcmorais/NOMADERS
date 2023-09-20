import React, { useContext } from 'react';
import { PiGearSixBold } from 'react-icons/pi';
import { BiMenu, BiSun } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { BsFillMoonStarsFill } from 'react-icons/bs';

import { AiOutlineDownload } from 'react-icons/ai';
import { ThemeContext } from '../../contexts/ThemeContext';

function HeaderApp() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center p-5">
      <div>
        <button type="button" className="text-2xl text-secundary-gray">
          <BiMenu />
        </button>
      </div>

      <div className="flex gap-3 lg:mb-2 text-[15px]">
        <button type="button" className="md:hidden text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue">
          <AiOutlineDownload />
        </button>
        <button
          type="button"
          className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue"
          onClick={handleToggleTheme}
        >
          {theme === 'dark' ? <BiSun /> : <BsFillMoonStarsFill />}
        </button>
        <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue">
          <PiGearSixBold />
        </button>
        <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue">
          <IoIosNotifications />
        </button>
      </div>
    </header>
  );
}

export default HeaderApp;
