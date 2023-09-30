import React from 'react';
import PropTypes from 'prop-types';

function Packages({
  icon, base, price, funcs, btntext,
}) {
  return (
    <div className="packages">
      <div className="w-[35%] flex justify-center items-center m-auto bg-secundary-white rounded-full p-7">
        <p className="text-4xl text-primary-indigo">{icon}</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="text-secundary-gray text-sm">{base}</p>
        <span className="text-primary-black font-bold opacity-80">{price}</span>
      </div>
      <div>{funcs}</div>
      <button type="button" className="packages-btn">
        {btntext}
      </button>
    </div>
  );
}

export default Packages;

Packages.propTypes = {
  icon: PropTypes.node.isRequired,
  base: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  funcs: PropTypes.node.isRequired,
  btntext: PropTypes.string.isRequired,
};
