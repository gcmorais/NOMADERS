import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import NavButton from "../navbutton";
import BrazilFlag from "../../assets/Brazil.svg";

function Footer() {
  return (
    <footer className="flex flex-col justify-between bg-primary-black font-inter mt-[100px] p-10 lg:px-20 pt-10">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between  text-white mb-14 lg:mb-32">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-2xl font-black text-white/80 tracking-widest">
            NOMADERS
          </h1>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <AiFillFacebook />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7 lg:flex lg:flex-row-reverse lg:gap-24">
          <div className="flex flex-col gap-3 items-center">
            <ul className="flex flex-col gap-1 text-sm text-secundary-gray">
              <h1 className="text-primary-indigo">Política</h1>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Termos
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Cookies
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Diretrizes
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Informações
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center text-left">
            <ul className="flex flex-col gap-1 text-sm text-secundary-gray">
              <h1 className="text-primary-indigo">Recursos</h1>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Suporte
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Segurança
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center text-left">
            <ul className="flex flex-col gap-1 text-sm text-secundary-gray">
              <h1 className="text-primary-indigo">Quem somos</h1>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Sobre
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Marca
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Atividades
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 items-center text-left">
            <ul className="flex flex-col gap-1 text-sm text-secundary-gray">
              <h1 className="text-primary-indigo">Produto</h1>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Logar
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Registrar
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" rel="noreferrer">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-white border-t-[1px] border-primary-white/20 pt-5 ">
        <div className="text-sm text-secundary-gray/50">
          © 2023 NOMADERS, inc.
        </div>
        <div className="hidden items-center gap-2 text-sm text-secundary-gray/70 lg:flex">
          <img
            src={BrazilFlag}
            alt="brazil"
            className="w-[22px] rounded-sm opacity-80"
          />
          Português do Brasil
        </div>
        <NavButton link="/app" bgcolor="bg-primary-indigo" text="text-white" />
      </div>
    </footer>
  );
}

export default Footer;
