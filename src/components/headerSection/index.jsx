import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import PropTypes from 'prop-types';

function HeaderSection({ title, subtitle }) {
  return (
    <header className="flex flex-col justify-between md:flex-row">
      <div>
        <h1 className="font-inter text-2xl font-semibold uppercase text-primary-black dark:text-white/80">
          {title}
        </h1>
        <p className="text-sm text-secundary-gray">{subtitle}</p>
      </div>
      <button
        type="button"
        className="mt-2 hidden items-center gap-2 rounded-md bg-primary-indigo px-5 text-[13px] text-white md:flex"
      >
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
