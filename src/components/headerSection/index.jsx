import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import PropTypes from 'prop-types';

function HeaderSection({ title, subtitle }) {
  return (
    <header className="flex flex-col md:flex-row justify-between">
      <div>
        <h1 className="text-2xl uppercase font-inter font-semibold text-primary-black dark:text-white/80">
          {title}
        </h1>
        <p className="text-sm text-secundary-gray">
          {subtitle}
        </p>
      </div>
      <button type="button" className="hidden md:flex items-center gap-2 bg-primary-indigo rounded-md text-white text-[13px] px-5 mt-2">
        <AiOutlineDownload />
        Download Reports
      </button>
    </header>
  );
}

export default HeaderSection;

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
