import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(() => {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);
  return (
    <header className={ativaCor ? 'w-[100%] top-0 px-10 fixed flex justify-between py-5 text-primary-white font-inter items-center bg-primary-indigo lg:px-36 2xl:px-72 z-10' : 'w-[100%] top-0 px-10 fixed flex justify-between pt-5 text-primary-white font-inter items-center bg-transparent lg:px-36 2xl:px-72 z-10'}>
      <h1 className="text-lg font-extrabold tracking-widest">
        NOMADERS
      </h1>
      <nav>
        <ul className="gap-10 hidden md:hidden lg:flex cursor-pointer text-sm font-semibold">
          <li>Overview</li>
          <li>Pacotes</li>
          <li>Integração</li>
          <li>Suporte</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <button type="button" className=" flex justify-center gap-1  bg-primary-white text-primary-black py-2  rounded-full w-28">
        <p className="text-lg opacity-70"><AiOutlineUser /></p>
        <p className="font-semibold text-sm opacity-80">Entrar</p>
      </button>
    </header>
  );
}

export default
Navbar;
