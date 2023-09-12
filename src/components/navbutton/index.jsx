import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import PropTypes from 'prop-types';

function NavButton({ bgcolor, text }) {
  return (
    <button type="button" className={`flex justify-center gap-1  {bg-primary-white} ${bgcolor} ${text} text-primary-black py-2  rounded-full w-28`}>
      <p className="text-lg opacity-70"><AiOutlineUser /></p>
      <p className="font-semibold text-sm opacity-80">Entrar</p>
    </button>
  );
}

export default NavButton;

NavButton.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
