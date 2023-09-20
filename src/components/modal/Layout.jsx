import React from 'react';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';

function Login({
  children, navLink, width, height,
}) {
  return (
    <div className={`absolute top-0 left-0 flex ${height} w-full flex-col items-center justify-center px-2 backdrop-blur-sm md:h-full lg:bg-secundary-gray/50`}>
      <div className={`rounded-xl border-2 bg-white lg:h-auto ${width} lg:border-0 w-full`}>
        <div className="m-2">
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
    </div>
  );
}

export default Login;

Login.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  navLink: PropTypes.node,
};

Login.defaultProps = {
  navLink: false,
};
