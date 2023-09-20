import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Layout';
import Input from '../input';

function SignUp({ isOpen }) {
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/app');
  };
  if (isOpen) {
    return (
      <Login navLink={onClose} width="lg:w-[500px]" height="h-[900px]">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="font-inter text-2xl font-semibold">Criar sua conta</h1>
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-xl border-2 text-3xl"
          >
            <FcGoogle />
          </button>
        </header>
        <main>
          <form className="flex flex-col gap-3">
            <Input text="Nome" />
            <Input text="Email" />
            <Input text="Senha" />
            <Input text="Confirmar Senha" />

            <button
              type="submit"
              className="px-13 mt-2 flex w-[85%] justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
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
