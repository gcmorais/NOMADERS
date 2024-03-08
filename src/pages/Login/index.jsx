import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Laptop from "../../assets/laptop.svg";
import StarsIndigo from "../../assets/starsindigo.svg";
import SignUp from "../../components/modal/signUp";
import SignIn from "../../components/modal/signIn";

function LoginPage() {
  const [openUpModal, setOpenUpModal] = useState(false);
  const [openInModal, setOpenInModal] = useState(false);

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
                <h1>Seja Livre.</h1>
                <h1>Use NOMADERS.</h1>
              </div>
              <img src={StarsIndigo} alt="stars" />
            </div>
            <h1 className="text-3xl font-semibold m-auto lg:m-0 mt-10 lg:mt-0">
              Registre-se
            </h1>
            <div className="lg:flex mt-2 mb-14 lg:mb-0">
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <Link to="/signup">
                  <button
                    type="button"
                    className="flex justify-center text-center items-center rounded-full bg-primary-indigo text-white 2xl:w-[280px] px-[43px] h-10 "
                    onClick={() => setOpenUpModal(true)}
                  >
                    Criar conta
                  </button>
                </Link>
                <p className="w-[280px] text-[10px] 2xl:text-[9.5px] lg:text-[8px] text-primary-gray lg:w-[94%] text-center">
                  Ao se inscrever, você concorda com os Termos de Serviço e a
                  Política de Privacidade, incluindo o Uso de Cookies.
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-7 lg:mt-0 items-center">
                <Link to="/signin">
                  <button
                    type="button"
                    className="flex justify-center text-center items-center rounded-full bg-primary-indigo text-white 2xl:w-[270px] px-[62px] h-10"
                    onClick={() => setOpenInModal(true)}
                  >
                    Entrar
                  </button>
                </Link>
                <p className="text-[12px] text-primary-gray lg:text-center">
                  Já tem uma conta ?
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Outlet />
      <SignUp
        isOpen={openUpModal}
        setModalOpen={() => setOpenUpModal(!openUpModal)}
      />
      <SignIn
        isOpen={openInModal}
        setModalOpen={() => setOpenInModal(!openInModal)}
      />
    </>
  );
}

export default LoginPage;
