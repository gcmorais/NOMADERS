import React from 'react';
import PropTypes from 'prop-types';
import { DateMask } from '../../utils/DateMask';


export default function Input({
  text, placeholder, styles, value, change, error, type, date, valueMask
}) {
  return (
    <div className="w-full">
      <p className={`text-sm opacity-70 font-semibold font-inter ${styles}`}>
        {text}
      </p>

      <input
        maxLength={valueMask}
        type={type}
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
  type: PropTypes.string,
  date: PropTypes.bool,
  valueMask: PropTypes.number,
};

Input.defaultProps = {
  change: () => {},
  placeholder: '',
  styles: '',
  value: '',
  error: '',
  type: 'text',
  date: false,
  valueMask: null,
};
