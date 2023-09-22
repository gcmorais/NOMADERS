import React from 'react';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import ReactDOM from 'react-dom';

function Login({
  children, navLink, width,
}) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center px-2 backdrop-blur-sm bg-secundary-gray/50">
      <div className={`rounded-xl bg-white lg:h-auto ${width} lg:border-0 w-full`}>
        <div className="m-2 ">
          <button
            type="button"
            onClick={navLink}
            className="mr-[50px] text-3xl opacity-50 lg:mb-5 lg:text-xl"
          >
            <GrFormClose />
          </button>
        </div>
        <div className="mt-10 px-10 lg:mt-0 lg:px-20">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}

export default Login;

Login.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  navLink: PropTypes.node,
};

Login.defaultProps = {
  navLink: false,
};
