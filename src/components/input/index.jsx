import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, placeholder, styles }) {
  return (
    <div className="w-full">
      <p className={`text-sm opacity-70 font-semibold font-inter ${styles}`}>
        {text}
      </p>
      <input
        type="text"
        placeholder={placeholder}
        className={`border-2 border-primary-gray/30 rounded-lg p-2 text-sm opacity-70 w-full ${styles}`}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  styles: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  styles: '',
};
