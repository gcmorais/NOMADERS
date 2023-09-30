import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavButton({ bgcolor, text, link }) {
  return (
    <Link
      to={link}
      className={`flex justify-center gap-1  {bg-primary-white} ${bgcolor} ${text} text-primary-black py-2  rounded-full w-28`}
    >
      <p className="text-lg opacity-70">
        <AiOutlineUser />
      </p>
      <p className="font-semibold text-sm opacity-80">Entrar</p>
    </Link>
  );
}

export default NavButton;

NavButton.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
