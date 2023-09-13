import React from 'react';
import PropTypes from 'prop-types';

function Login({ children, isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="absolute bg-secundary-gray/50 backdrop-blur-sm w-full h-full top-0 flex justify-center items-center">
        <div className="bg-white p-80 rounded-xl">
          <button type="button" onClick={setModalOpen}>Fechar</button>
          <div>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Login;

Login.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
