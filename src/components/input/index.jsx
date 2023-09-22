import React from 'react';
import PropTypes from 'prop-types';

function Input({ text, placeholder }) {
  return (
    <div className="w-full">
      <p className="text-sm opacity-70 font-semibold font-inter">
        {text}
      </p>
      <input
        type="text"
        placeholder={placeholder}
        className="border-2 border-primary-gray/30 rounded-lg p-2 text-sm opacity-70 w-full"
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};
