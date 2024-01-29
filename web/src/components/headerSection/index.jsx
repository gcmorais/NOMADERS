import React, { useState } from 'react';
import ReportsButton from '../button/reportsButton';
import PropTypes from 'prop-types';

function HeaderSection({ title, subtitle, click, visible }) {
  
  return (
    <header className="flex flex-col justify-between md:flex-row">
      <div>
        <h1 className="font-inter text-2xl font-semibold uppercase text-primary-black dark:text-white/80">
          {title}
        </h1>
        <p className="text-sm text-secundary-gray">{subtitle}</p>
      </div>
      {visible && (
        <ReportsButton click={click} icon={false} text={"Ver infos"}/>
      )}
      
    </header>
  );
}

export default HeaderSection;

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
