import React, {
  useState, forwardRef, useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../input/formgroup';
import { DateMask } from '../../utils/DateMask';

const ProductForm = forwardRef(({ title, btnLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [ean, setEan] = useState('');
  const [cost, setCost] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [dateValue, setDateValue] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && ean && cost && salePrice && errors.length === 0);

  useImperativeHandle(ref, () => ({
    setFieldsValues: (data) => {
      setName(data.name);
      setEan(data.ean);
      setCost(data.cost);
      setSalePrice(data.saleprice);
      setDateValue(data.datevalue);
    },
  }), []);
  

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
  function handleDateValueChange(event) {
    setDateValue(DateMask(event.target.value));

    if (!event.target.value) {
      setError({ field: 'date-value', message: 'Insira uma data válida' });
    } else {
      removeError('date-value');
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      name, ean, cost, salePrice, dateValue,
    });
  }

  console.log(dateValue)
  return (
    <>
      <header className="mb-9 flex flex-col gap-8">
        <h1 className="font-inter text-2xl font-semibold m-auto dark:text-white">
          {title}
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
              valueMask={40}
            />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('ean')}>
            <Input
              text="Ean"
              styles="dark:text-white"
              value={ean}
              change={handleEanChange}
              valueMask={13}
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
                valueMask={4}
              />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('sale-price')}>
              <Input
                text="Preço de venda"
                placeholder="R$"
                styles="dark:text-white"
                value={salePrice}
                change={handleSalePriceChange}
                valueMask={4}
              />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('date-value')}>
              <Input
                text="Data de venda"
                styles="dark:text-white"
                value={dateValue.substr(0, 20)}
                change={handleDateValueChange}
                date={true}
                valueMask={10}
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
            {btnLabel}
          </button>
        </form>
      </main>
    </>

  );
}, []);

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
