import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Laptop from '../../assets/laptop.svg';
import StarsIndigo from '../../assets/starsindigo.svg';
import Login from '../../components/modal';

function LoginPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="p-5 h-screen lg:flex lg:justify-center lg:flex-col">
        <header className="flex justify-center lg:ml-40 lg:justify-normal">
          <Link to="/" className="flex items-center gap-2 text-primary-gray">
            <BsArrowLeft />
            Voltar para o site
          </Link>
        </header>
        <main className="font-inter lg:flex lg:items-center lg:justify-center lg:gap-20 lg:p-0">
          <div>
            <img src={Laptop} alt="laptop" />
          </div>
          <div className="lg:w-[30%] flex flex-col gap-5">
            <div className="flex m-auto lg:m-0">
              <div className="flex flex-col text-3xl m-auto lg:text-5xl lg:m-0 font-black text-primary-black">
                <h1>
                  Seja Livre.
                </h1>
                <h1>
                  Use NOMADERS.
                </h1>
              </div>
              <img src={StarsIndigo} alt="stars" />
            </div>
            <h1 className="text-3xl font-semibold m-auto lg:m-0 mt-10 lg:mt-0">
              Registre-se
            </h1>
            <div className="lg:flex mt-2 mb-14 lg:mb-0">
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <button type="button" className="flex justify-center text-center items-center rounded-full bg-primary-indigo text-white 2xl:w-[280px] lg:px-10 h-10 " onClick={() => setOpenModal(true)}>
                  Criar conta
                </button>
                <p className="w-[280px] 2xl:text-[9.5px] lg:text-[8px] text-primary-gray lg:w-[94%]">
                  Ao se inscrever, você concorda com os Termos de Serviço
                  e a Política de Privacidade, incluindo o Uso de Cookies.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-7 lg:mt-0 items-center">
                <button type="button" className="flex justify-center text-center items-center rounded-full bg-primary-indigo text-white 2xl:w-[270px] lg:px-20 h-10" onClick={() => setOpenModal(true)}>
                  Entrar
                </button>
                <p className="text-[12px] text-primary-gray lg:text-center">
                  Já tem uma conta ?
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Login isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </>
  );
}

export default LoginPage;
