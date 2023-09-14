import React from 'react';
import PropTypes from 'prop-types';

function Input({ text }) {
  return (
    <div>
      <p className="text-sm opacity-70 font-semibold font-inter">{text}</p>
      <input type="text" className="border-2 rounded-lg p-2 text-sm opacity-70 w-[85%]" />
    </div>
  );
}

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
};
