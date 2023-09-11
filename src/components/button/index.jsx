import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button type="button" className="rounded-lg bg-primary-indigo text-white w-44 h-12">{children}</button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
