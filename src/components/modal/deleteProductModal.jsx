import React from 'react';
import PropTypes from 'prop-types';
import Login from './Portal';

function DeleteProductModal({
  title, isOpen, setModalOpen, onConfirm,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (isOpen) {
    return (
      <Login navLink={setModalOpen} width="lg:w-[500px]" theme="dark:bg-primary-blue dark:fill-white">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="m-auto font-inter text-2xl font-semibold  dark:text-white/90">
            {title}
          </h1>
        </header>
        <main>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <p className="text-red-600 text-center text-lg">Esta ação não poderá ser desfeita!</p>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="dark:text-primary-white text-black mb-8"
                onClick={setModalOpen}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="mb-10 mt-2 flex items-center justify-center rounded-md bg-red-600 p-2 text-primary-white"
                onClick={onConfirm}
              >
                Deletar Produto
              </button>
            </div>

          </form>
        </main>
      </Login>
    );
  }

  return null;
}

export default DeleteProductModal;

DeleteProductModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};
