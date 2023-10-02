import React from 'react';
import PropTypes from 'prop-types';

export default function FormGroup({ children, error, styles }) {
  return (
    <div className={`${styles}`}>
      {children}
      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  styles: PropTypes.string,
};

FormGroup.defaultProps = {
  error: '',
  styles: '',
};
