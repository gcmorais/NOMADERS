import React from 'react';
import PropTypes from 'prop-types';
import Login from './Layout';
import Input from '../input';

function NewPlatformModal({ isOpen, closed }) {
  if (isOpen) {
    return (
      <Login navLink={() => closed(!isOpen)} width="lg:w-[500px]" height="h-[1720px]">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="m-auto font-inter text-2xl font-semibold">Nova plataforma</h1>
        </header>
        <main>
          <form className="flex flex-col gap-5">
            <Input text="Nome" />
            <Input text="Subcategoria de:" placeholder="Selecionar" />
            <button
              type="submit"
              className="mb-10 mt-2 flex items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
            >
              Adicionar plataforma
            </button>
          </form>
        </main>
      </Login>
    );
  }

  return null;
}

export default NewPlatformModal;

NewPlatformModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closed: PropTypes.node.isRequired,
};
