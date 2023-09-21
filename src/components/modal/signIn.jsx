import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Layout';
import Input from '../input';

function SignIn({ isOpen }) {
  const navigate = useNavigate();
  const onClose = () => {
    navigate('/app');
  };
  if (isOpen) {
    return (
      <Login navLink={onClose} width="lg:w-[500px]" height="h-[900px]">
        <header className="mb-9 flex flex-col gap-8">
          <h1 className="font-inter text-2xl font-semibold">Entrar</h1>
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-xl border-2 text-3xl"
          >
            <FcGoogle />
          </button>
        </header>
        <main>
          <form className="flex flex-col gap-3">
            <Input text="Email" />
            <Input text="Senha" />

            <Link
              to="/app/nomaders/dashboard"
              className="px-13 mt-2 flex w-full justify-center rounded-md bg-primary-indigo p-2 text-primary-white"
            >
              continuar
            </Link>
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

export default SignIn;

SignIn.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
