import React from 'react';
import { PiGearSixBold } from 'react-icons/pi';
import { BiMenu } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';

import { AiOutlineDownload } from 'react-icons/ai';
import ThemeToggler from './themetoggler';

function HeaderApp() {
  return (
    <header className="flex items-center justify-between p-5">
      <div>
        <button type="button" className="text-2xl text-secundary-gray">
          <BiMenu />
        </button>
      </div>

      <div className="flex gap-3 text-[15px] lg:mb-2">
        <button
          type="button"
          className="rounded-full bg-primary-white p-2 text-secundary-gray/80 drop-shadow-lg dark:bg-primary-blue md:hidden"
        >
          <AiOutlineDownload />
        </button>

        <ThemeToggler />

        <button
          type="button"
          className=" rounded-full bg-primary-white p-2 text-secundary-gray/80 drop-shadow-lg dark:bg-primary-blue"
        >
          <PiGearSixBold />
        </button>

        <button
          type="button"
          className=" flex rounded-full bg-primary-white p-2 text-secundary-gray/80 drop-shadow-lg dark:bg-primary-blue"
        >
          <IoIosNotifications />
        </button>
      </div>
    </header>
  );
}

export default HeaderApp;
