import React from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import PropTypes from 'prop-types';

function DashInfo({
  headerText, mainValue, footerValue, footerText, icon,
}) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-white dark:bg-primary-blue">
      <header className="flex justify-between">
        <h3 className="dark:text-white/70">
          {headerText}
        </h3>
        <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-secundary-blue">
          <BiSolidBarChartAlt2 />
        </span>
      </header>
      <main>
        <h1 className="text-3xl font-medium dark:text-white">
          {mainValue}
        </h1>
      </main>
      <footer className="flex items-center gap-2 mt-2">
        {icon && (
          <>
            {footerValue >= 0 && (
            <span className="text-xl text-green-500">
              <IoIosArrowDropupCircle />
            </span>
            )}
            {footerValue < 0 && (
              <span className="text-xl text-red-500">
                <IoIosArrowDropdownCircle />
              </span>
            )}
          </>
        )}
        
        <p className="text-primary-gray/80 lg:text-sm 2xl:text-base flex">
          {footerValue >= 0 ? (
            <strong className="text-green-500 mr-1">
              {footerValue}
            </strong>
          ) : (
            <strong className="text-red-500 mr-1">
              {footerValue}
            </strong>
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
  footerValue: PropTypes.number,
  footerText: PropTypes.string,
  icon: PropTypes.bool,
};
DashInfo.defaultProps = {
  footerValue: null,
  footerText: '',
  icon: true,
};
