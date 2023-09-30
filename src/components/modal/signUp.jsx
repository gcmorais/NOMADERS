/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Portal';
import Input from '../input';
import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import FormGroup from '../input/formgroup';

function SignUp({ isOpen }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passconfirm, setPassConfirm] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && email && password && passconfirm && errors.length === 0);

  const navigate = useNavigate();
  const onClose = () => {
    navigate('/app');
  };

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório!' });
    } else {
      removeError('name');
    }
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);

    if ((event.target.value || !event.target.value) && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email inválido!' });
    } else {
      removeError('email');
    }
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ field: 'senha', message: 'Senha é obrigatória!' });
    } else {
      removeError('senha');
    }
  }
  function handleConfirmPasswordChange(event) {
    setPassConfirm(event.target.value);

    if (event.target.value !== password) {
      setError({ field: 'confirmar-senha', message: 'Por favor, confirme sua senha!' });
    } else {
      removeError('confirmar-senha');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  if (isOpen) {
    return (
      <Login navLink={onClose} width="lg:w-[500px]" height="h-[900px]">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="font-inter text-2xl font-semibold">
            Criar sua conta
          </h1>
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-xl border-2 text-3xl border-primary-gray/30"
          >
            <FcGoogle />
          </button>
        </header>
        <main>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <FormGroup error={getErrorMessageByFieldName('name')}>
              <Input
                text="Nome"
                value={name}
                change={handleNameChange}
                error={getErrorMessageByFieldName('name') ? 'text-red-600' : 'text-black'}
              />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('email')}>
              <Input
                text="Email"
                value={email}
                change={handleEmailChange}
                error={getErrorMessageByFieldName('email') ? 'text-red-600' : 'text-black'}
              />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('senha')}>
              <Input
                text="Senha"
                value={password}
                change={handlePasswordChange}
                error={getErrorMessageByFieldName('senha') ? 'text-red-600' : 'text-black'}
              />
            </FormGroup>

            <FormGroup error={getErrorMessageByFieldName('confirmar-senha')}>
              <Input
                text="Confirmar Senha"
                value={passconfirm}
                change={handleConfirmPasswordChange}
                error={getErrorMessageByFieldName('confirmar-senha') ? 'text-red-600' : 'text-black'}
              />
            </FormGroup>

            <button
              type="submit"
              disabled={!isFormValid}
              className={isFormValid
                ? 'px-13 mt-2 flex w-full justify-center rounded-md bg-primary-indigo p-2 text-primary-white'
                : 'px-13 mt-2 flex w-full justify-center rounded-md bg-primary-indigo/70 p-2 text-primary-white'}
            >
              continuar
            </button>
          </form>
          <p className="mb-10 mt-5 text-sm opacity-60">
            Já tem uma conta ?
            <Link
              to="/app/signin"
              className="font-semibold text-primary-indigo"
            >
              {' '}
              Entrar
            </Link>
          </p>
        </main>
      </Login>
    );
  }

  return null;
}

export default SignUp;

SignUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
