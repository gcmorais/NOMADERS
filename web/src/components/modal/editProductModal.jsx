/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from './Portal';
import Input from '../input/input';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../input/formgroup';

function EditProductModal({
  isOpen, setModalOpen, onSubmit, product,
}) {
  const [name, setName] = useState(product.name);
  const [ean, setEan] = useState(product.ean);
  const [cost, setCost] = useState(product.cost);
  const [salePrice, setSalePrice] = useState(product.saleprice);

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && ean && cost && salePrice && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório!' });
    } else {
      removeError('name');
    }
  }
  function handleEanChange(event) {
    setEan(event.target.value);

    if (!event.target.value) {
      setError({ field: 'ean', message: 'Ean é obrigatório!' });
    } else {
      removeError('ean');
    }
  }
  function handleCostChange(event) {
    setCost(event.target.value);

    if (!event.target.value) {
      setError({ field: 'cost', message: 'Insira o custo do produto' });
    } else {
      removeError('cost');
    }
  }
  function handleSalePriceChange(event) {
    setSalePrice(event.target.value);

    if (!event.target.value) {
      setError({ field: 'sale-price', message: 'Insira o valor de venda do produto' });
    } else {
      removeError('sale-price');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name, ean, cost, salePrice,
    });
  }

  if (isOpen) {
    return (
      <Login navLink={setModalOpen} width="lg:w-[500px]" theme="dark:bg-primary-blue dark:fill-white">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="font-inter text-2xl font-semibold m-auto dark:text-white">
            Editar Produto
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

            <FormGroup error={getErrorMessageByFieldName('ean')}>
              <Input
                text="Ean"
                styles="dark:text-white"
                value={ean}
                change={handleEanChange}
              />
            </FormGroup>
            <div className="flex gap-5">
              <FormGroup error={getErrorMessageByFieldName('cost')}>
                <Input
                  text="Custo"
                  placeholder="R$"
                  styles="dark:text-white"
                  value={cost}
                  change={handleCostChange}
                />
              </FormGroup>

              <FormGroup error={getErrorMessageByFieldName('sale-price')}>
                <Input
                  text="Preço de venda"
                  placeholder="R$"
                  styles="dark:text-white"
                  value={salePrice}
                  change={handleSalePriceChange}
                />
              </FormGroup>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={isFormValid
                ? 'px-13 m-auto mb-10 mt-2 flex w-full items-center justify-center rounded-md bg-primary-indigo p-2 text-primary-white'
                : 'px-13 m-auto mb-10 mt-2 flex w-full items-center justify-center rounded-md bg-primary-indigo/50 p-2 text-primary-white'}
            >
              Editar Produto
            </button>
          </form>
        </main>
      </Login>
    );
  }

  return null;
}

export default EditProductModal;

EditProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

EditProductModal.defaultProps = {
  onSubmit: () => {},
};
