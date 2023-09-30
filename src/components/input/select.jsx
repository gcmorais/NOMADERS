import React from 'react';
import PropTypes from 'prop-types';

export default function Select({ title, value }) {
  return (
    <div>
      <p className="text-sm opacity-70 font-semibold font-inter dark:text-white">
        {title}
      </p>
      <select className="border-2 border-primary-gray/30 rounded-lg p-2 text-sm opacity-70 w-full dark:text-white/50 dark:bg-primary-blue">
        <option value="">Selecionar</option>
        <option value={value}>{value}</option>
      </select>
    </div>
  );
}

Select.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
