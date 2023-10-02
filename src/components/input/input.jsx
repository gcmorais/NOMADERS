import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  text, placeholder, styles, value, change, error,
}) {
  return (
    <div className="w-full">
      <p className={`text-sm opacity-70 font-semibold font-inter ${styles}`}>
        {text}
      </p>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        className={`border-2 border-primary-gray/30 rounded-lg p-2 text-sm opacity-70 w-full ${error} ${styles}`}
        onChange={change}
      />
    </div>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  styles: PropTypes.string,
  value: PropTypes.node,
  change: PropTypes.func,
  error: PropTypes.string,
};

Input.defaultProps = {
  change: () => {},
  placeholder: '',
  styles: '',
  value: '',
  error: '',
};
