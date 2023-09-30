import React from 'react';
import PropTypes from 'prop-types';
import Login from './Portal';
import Input from '../input';
import List from '../list';
import Select from '../input/select';

function AddProductModal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <Login navLink={setModalOpen} width="lg:w-[969px]" theme="dark:bg-primary-blue dark:fill-white">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="font-inter text-2xl font-semibold m-auto dark:text-white">
            Adicionar Produto
          </h1>
        </header>
        <main className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <List />
          </div>
          <form className="flex flex-col gap-5">
            <div>
              <header className="mb-5 text-xl dark:text-primary-white">
                <h1>Nome do produto</h1>
              </header>
              <main className="flex flex-col gap-2 ">
                <div>
                  <p className="text-primary-gray dark:text-primary-white/60">EAN</p>
                  <span className="text-black/80 dark:text-primary-white">978–0141026626</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-primary-gray dark:text-primary-white/60">Custo</p>
                    <span className="text-black/80 dark:text-primary-white">R$ 30,00</span>
                  </div>
                  <div>
                    <p className="text-primary-gray dark:text-primary-white/60">Preço de venda</p>
                    <span className="text-black/80 dark:text-primary-white">R$ 60,00</span>
                  </div>
                  <div>
                    <p className="text-primary-gray dark:text-primary-white/60">Lucro</p>
                    <span className="text-green-600">R$ 30,00</span>
                  </div>
                </div>
              </main>
            </div>
            <div className="flex gap-5">
              <Input text="Data de venda" styles="dark:text-white" />

              <div className="w-full">
                <Select title="Plataforma" value="Mercado livre" />
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <button
                type="submit"
                className="mb-10 mt-2 flex w-[30%] items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
              >
                Adicionar
              </button>
            </div>

          </form>
        </main>
      </Login>
    );
  }

  return null;
}

export default AddProductModal;

AddProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
