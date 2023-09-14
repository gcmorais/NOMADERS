import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';

function Login({ children }) {
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/app');
  };
  return (
    <div className="flex justify-center items-center flex-col h-[900px] w-full lg:h-full top-0 absolute lg:bg-secundary-gray/50 backdrop-blur-sm px-2">
      <div className="bg-white w-full lg:w-[500px] lg:h-auto rounded-xl border-2 lg:border-0">
        <div className="m-2">
          <button type="button" onClick={onClose} className="text-3xl mr-[50px] lg:mb-5 opacity-50 lg:text-xl">
            <GrFormClose />
          </button>
        </div>
        <div className="mt-10 lg:mt-0 pl-10 lg:pl-20">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Login;

Login.propTypes = {
  children: PropTypes.node.isRequired,
};
