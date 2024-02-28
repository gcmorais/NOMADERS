/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Portal';
import Input from '../input/input';
import useErrors from '../../hooks/useErrors';
import FormGroup from '../input/formgroup';
import isEmailValid from '../../utils/isEmailValid';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from "react-router-dom";

function SignIn({ isOpen }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();
  const { signIn, signed } = useContext(AuthContext);

  const isFormValid = (email && password && errors.length === 0);

  const onClose = () => {
    navigate('/app');
  };
  
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

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  if(signed){
    return <Navigate to={'/app/nomaders/dashboard'} replace={true} />
  }else{
    if (isOpen) {
      return (
        <Login navLink={onClose} width="lg:w-[500px]" height="h-[900px]">
          <header className="mb-9 flex flex-col gap-8">
            <h1 className="font-inter text-2xl font-semibold">Entrar</h1>
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center rounded-xl border-2 text-3xl border-primary-gray/30"
            >
              <FcGoogle />
            </button>
          </header>
          <main>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <FormGroup error={getErrorMessageByFieldName('email')}>
                <Input
                  text="Email"
                  type="email"
                  value={email}
                  change={handleEmailChange}
                  error={getErrorMessageByFieldName('email') ? 'text-red-600' : 'text-black'}
                />
              </FormGroup>

              <FormGroup error={getErrorMessageByFieldName('senha')}>
                <Input
                  text="Senha"
                  type="password"
                  value={password}
                  change={handlePasswordChange}
                  error={getErrorMessageByFieldName('senha') ? 'text-red-600' : 'text-black'}
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
              Não tem uma conta ?
              <Link
                to="/app/signup"
                className="font-semibold text-primary-indigo"
              >
                {' '}
                Registrar
              </Link>
            </p>
          </main>
        </Login>
      );
    }
    return null;
  }
}

export default SignIn;

SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
