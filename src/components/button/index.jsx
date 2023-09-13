import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, link }) {
  return (
    <Link to={link} className="flex justify-center text-center items-center rounded-lg bg-primary-indigo text-white w-44 h-12 ">{children}</Link>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired,
};
