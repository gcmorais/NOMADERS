import React from 'react';
import PropTypes from 'prop-types';
import Login from './Layout';
import Input from '../input';

function NewProductModal({ isOpen, closed }) {
  if (isOpen) {
    return (
      <Login navLink={() => closed(!isOpen)} width="lg:w-[900px]">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="font-inter text-2xl font-semibold m-auto ">
            Novo Produto
          </h1>
        </header>
        <main>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <Input text="Nome" />
              <Input text="Ean" />
            </div>
            <div className="flex gap-5">
              <Input text="Custo" placeholder="R$" />
              <Input text="Preço de venda" placeholder="R$" />
              <Input text="Plataforma" placeholder="Selecionar" />
            </div>
            <button
              type="submit"
              className="px-13 m-auto mb-10 mt-2 flex w-[50%] items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
            >
              Registrar produto
            </button>
          </form>
        </main>
      </Login>
    );
  }

  return null;
}

export default NewProductModal;

NewProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closed: PropTypes.node.isRequired,
};
