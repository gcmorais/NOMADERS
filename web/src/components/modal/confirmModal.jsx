import React, { useContext } from "react";
import PropTypes from "prop-types";
import Account from "./Portal";
import { AuthContext } from "../../contexts/AuthContext";

function ConfirmModal({ isOpen, setModalOpen }) {
  const { signOut } = useContext(AuthContext);

  if (isOpen) {
    return (
      <Account
        navLink={setModalOpen}
        width="lg:w-[500px] lg:h-[601px]"
        theme="dark:bg-primary-blue dark:fill-white"
      >
        <header className="pb-6 text-center">
          <h1 className="dark:text-white">Tem certeza que deseja sair ?</h1>
        </header>
        <div className="mb-10 mt-2 flex justify-around">
          <button
            type="submit"
            className="text-primary-white"
            onClick={setModalOpen}
          >
            Cancelar
          </button>
          <button type="submit" className="text-red-500" onClick={signOut}>
            Sair
          </button>
        </div>
      </Account>
    );
  }

  return null;
}

export default ConfirmModal;

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
