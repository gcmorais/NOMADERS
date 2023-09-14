import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Login from '.';
import Input from '../input';

function SignUp({ isOpen }) {
  if (isOpen) {
    return (
      <Login>
        <header className="flex flex-col gap-8 mb-9">
          <h1 className="font-inter font-semibold text-2xl">Criar sua conta</h1>
          <button type="button" className="rounded-xl border-2 w-16 h-16 flex justify-center items-center text-3xl">
            <FcGoogle />
          </button>
        </header>
        <main>
          <form className="flex flex-col gap-3">
            <Input text="Nome" />
            <Input text="Email" />
            <Input text="Senha" />
            <Input text="Confirmar Senha" />

            <button type="submit" className="flex px-13 justify-center bg-primary-indigo rounded-md p-2 w-[85%] mt-2 text-primary-white">
              continuar
            </button>
          </form>
          <p className="text-sm opacity-60 mt-5 mb-10">
            Já tem uma conta ?
            <Link to="/app/signin" className="text-primary-indigo font-semibold"> Entrar</Link>
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
