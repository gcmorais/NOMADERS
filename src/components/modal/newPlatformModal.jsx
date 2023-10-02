import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from './Portal';
import Input from '../input/input';
import Select from '../input/select';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../input/formgroup';

function NewPlatformModal({ isOpen, setModalOpen }) {
  const [name, setName] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  if (isOpen) {
    return (
      <Login navLink={setModalOpen} width="lg:w-[500px]" theme="dark:bg-primary-blue dark:fill-white">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="m-auto font-inter text-2xl font-semibold dark:text-white/90">
            Nova plataforma
          </h1>
        </header>
        <main>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FormGroup error={getErrorMessageByFieldName('name')}>
              <Input
                text="Nome"
                styles="dark:text-white"
                value={name}
                change={handleNameChange}
              />
            </FormGroup>

            <FormGroup>
              <Select
                title="Subcategoria"
                value="Americanas"
              />
            </FormGroup>

            <button
              type="submit"
              disabled={!isFormValid}
              className={isFormValid
                ? 'mb-10 mt-2 flex items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white'
                : 'mb-10 mt-2 flex items-center justify-center rounded-md bg-primary-indigo/50 p-2 text-primary-white'}
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
  setModalOpen: PropTypes.func.isRequired,
};
