import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import PropTypes from "prop-types";

function DashInfo({ headerText, mainValue, footerValue, footerText, icon }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-white p-5 dark:bg-primary-blue">
      <header className="flex justify-between">
        <h3 className="dark:text-white/70">{headerText}</h3>
        <span className=" rounded-full bg-primary-white p-2 text-secundary-gray/80 drop-shadow-lg dark:bg-secundary-blue">
          <BiSolidBarChartAlt2 />
        </span>
      </header>
      <main>
        <h1 className="text-3xl font-medium dark:text-white">{mainValue}</h1>
      </main>
      <footer className="mt-2 flex items-center gap-2">
        {icon && (
          <>
            {Number(footerValue) === 0 && (
              <span className="text-xl text-blue-500">
                <IoIosArrowDropupCircle />
              </span>
            )}
            {Number(footerValue) > 0 && (
              <span className="text-xl text-green-500">
                <IoIosArrowDropupCircle />
              </span>
            )}
            {Number(footerValue) < 0 && (
              <span className="text-xl text-red-500">
                <IoIosArrowDropdownCircle />
              </span>
            )}
          </>
        )}

        <p className="flex text-primary-gray/80 lg:text-sm 2xl:text-base">
          {Number(footerValue) === 0 && (
            <strong className="mr-1 text-blue-500">{footerValue}</strong>
          )}
          {Number(footerValue) > 0 && (
            <strong className="mr-1 text-green-500">{footerValue}</strong>
          )}
          {Number(footerValue) < 0 && (
            <strong className="mr-1 text-red-500">{footerValue}</strong>
          )}
          {footerText}
        </p>
      </footer>
    </div>
  );
}

export default DashInfo;

DashInfo.propTypes = {
  headerText: PropTypes.string.isRequired,
  mainValue: PropTypes.string.isRequired,
  footerValue: PropTypes.string,
  footerText: PropTypes.string,
  icon: PropTypes.bool,
};
DashInfo.defaultProps = {
  footerValue: null,
  footerText: "",
  icon: true,
};
