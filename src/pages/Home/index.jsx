import React from 'react';
import { AiFillWindows } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import { Accordion } from '@prismane/core';
import MainImage from '../../assets/image.svg';
import Stars from '../../assets/Vector.svg';
import Info from '../../components/info';
import Shopee from '../../assets/shopee.svg';
import Amazon from '../../assets/amazon.svg';
import Magalu from '../../assets/magalu.svg';
import Americanas from '../../assets/americanas.svg';
import MercadoLivre from '../../assets/mercadolivre.svg';
import Shopify from '../../assets/shopify.svg';
import Button from '../../components/button';
import Demo from '../../assets/disponivel.svg';
import GooglePlay from '../../assets/googleplay.svg';
import AppStore from '../../assets/appstore.svg';
import Packages from '../../components/packages';
import background from '../../assets/stars-background.svg';

function Home() {
  const info = [
    {
      id: '1',
      icon: <AiFillWindows />,
      title: 'Windows',
      text: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its`,
    },
    {
      id: '2',
      icon: <AiFillWindows />,
      title: 'Windows',
      text: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its`,
    },
    {
      id: '3',
      icon: <AiFillWindows />,
      title: 'Windows',
      text: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its`,
    },
    {
      id: '4',
      icon: <AiFillWindows />,
      title: 'Windows',
      text: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its`,
    },
    {
      id: '5',
      icon: <AiFillWindows />,
      title: 'Windows',
      text: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its`,
    },
    {
      id: '6',
      icon: <AiFillWindows />,
      title: 'Windows',
      text: `It is a long established fact that a reader will be
      distracted by the readable content of a page when looking at its`,
    },

  ];
  const data = [
    {
      id: '1',
      icon: <img src={Shopee} alt="logo" className="w-[40px]" />,
    },
    {
      id: '2',
      icon: <img src={Amazon} alt="logo" className="w-[40px]" />,
    },
    {
      id: '3',
      icon: <img src={Magalu} alt="logo" className="w-[100px]" />,
    },
    {
      id: '4',
      icon: <img src={Americanas} alt="logo" className="w-[100px]" />,
    },
    {
      id: '5',
      icon: <img src={MercadoLivre} alt="logo" className="w-[40px]" />,
    },
    {
      id: '6',
      icon: <img src={Shopify} alt="logo" className="w-[40px]" />,
    },
  ];
  const basic = [
    {
      id: '1',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 1</p>,
    },
    {
      id: '2',
      icon: <p className="text-secundary-gray text-2xl"><IoIosClose /></p>,
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 2</p>,
    },
    {
      id: '3',
      icon: <p className="text-secundary-gray text-2xl"><IoIosClose /></p>,
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 3</p>,
    },
    {
      id: '4',
      icon: <p className="text-secundary-gray text-2xl"><IoIosClose /></p>,
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 4</p>,
    },
    {
      id: '5',
      icon: <p className="text-secundary-gray text-2xl"><IoIosClose /></p>,
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 5</p>,
    },
  ];
  const standard = [
    {
      id: '1',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 1</p>,
    },
    {
      id: '2',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 2</p>,
    },
    {
      id: '3',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 3</p>,
    },
    {
      id: '4',
      icon: <p className="text-secundary-gray text-2xl"><IoIosClose /></p>,
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 4</p>,
    },
    {
      id: '5',
      icon: <p className="text-secundary-gray text-2xl"><IoIosClose /></p>,
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 5</p>,
    },
  ];
  const enterprise = [
    {
      id: '1',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 1</p>,
    },
    {
      id: '2',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 2</p>,
    },
    {
      id: '3',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 3</p>,
    },
    {
      id: '4',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 4</p>,
    },
    {
      id: '5',
      icon: <p className="text-primary-indigo text-2xl"><BsCheck /></p>,
      text: <p className="text-secundary-gray">Funcionalidade 5</p>,
    },
  ];
  const feature = [
    {
      id: '1',
      icon: <FaMoneyBillWave />,
      base: 'Basic',
      price: 'R$ 0,00',
      text: basic.map((item) => (
        <span className="flex items-center" key={item.id}>
          {item.icon}
          {item.text}
        </span>
      )),
      btn: 'Iniciar plano grátis',
    },
    {
      id: '2',
      icon: <FaMoneyBillWave />,
      base: 'Standard',
      price: 'R$ 0,00',
      text: standard.map((item) => (
        <span className="flex items-center" key={item.id}>
          {item.icon}
          {item.text}
        </span>
      )),
      btn: 'Em breve',
    },
    {
      id: '3',
      icon: <FaMoneyBillWave />,
      base: 'Enterprise',
      price: 'R$ 0,00',
      text: enterprise.map((item) => (
        <span className="flex items-center" key={item.id}>
          {item.icon}
          {item.text}
        </span>
      )),
      btn: 'Em breve',
    },
  ];

  return (
    <main>
      <section className="bg-primary-indigo px-[10%] font-inter lg:flex justify-center items-center flex-col pb-32">
        <div className="flex flex-col justify-center gap-5 pt-32 lg:flex-row">
          <div className="m-auto max-w-[90%] flex justify-end lg:m-0">
            <img src={MainImage} alt="Home" className="items-center" />
          </div>
          <div className="flex justify-center flex-col items-center w-[100%] text-primary-white lg:w-[46%]">
            <h1 className="flex items-baseline font-extrabold text-5xl text-center lg:w-[80%] 2xl:w-[62%]">
              PENSE EM UM APP…
              <img src={Stars} alt="starts" />
            </h1>
            <p className="mt-5 mb-10 text-center lg:w-[90%]">…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</p>

            <div className="flex justify-center gap-3 ">
              <button className=" bg-primary-white text-primary-black py-3  rounded-full px-10 lg:px-20" type="button">
                Registrar
              </button>
              <button className="hidden w-[200px] bg-primary-black text-primary-white py-2 rounded-full px-5 lg:w-[290px] lg:py-3 lg:list-item" type="button">
                Já tem uma conta ? Entrar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-white py-28 font-inter">
        <div className="flex justify-center flex-col items-center gap-14">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-primary-black font-black text-3xl text-center">
              Por que você deveria nos escolher ?
            </h1>
            <span className=" w-[70%] text-center text-secundary-gray">
              Gerenciamos suas vendas de forma simples e eficaz.
              Sinta-se a vontade para testar um de nossos planos.
            </span>
          </div>
          <div className="flex justify-center text-center w-[80%] ">
            <div className="grid grid-cols-2 w-[100%] lg:grid-cols-3 lg:w-[70%]">
              {info.map((item) => (
                <Info key={item.id} title={item.title} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="flex justify-center flex-col items-center gap-14">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-primary-black font-black text-3xl text-center">
              Integração
            </h1>
            <span className="text-center text-secundary-gray">
              Trabalhamos com as principais plataformas do mercado
            </span>
          </div>
          <div className="grid grid-cols-3 gap-7 lg:flex">
            {data.map((item) => (
              <div className="flex justify-center items-center w-28 h-28 rounded-lg bg-white drop-shadow-md" key={item.id}>
                {item.icon}
              </div>
            ))}
          </div>
          <Button>Ver todas</Button>
        </div>
      </section>

      <section className="flex justify-center pb-32">
        <div className="w-[100%] lg:w-[60%] bg-primary-white pt-10 pb-5 font-inter rounded-lg">
          <div className="flex justify-center flex-col items-center">
            <h1 className="w-80 text-primary-black font-black text-3xl text-center">
              Web ou mobile, estamos disponíveis
            </h1>
          </div>
          <div className="w-[90%] lg:w-[100%] m-auto flex justify-center">
            <img src={Demo} alt="Demo-Imgs" />
          </div>
          <div className="flex justify-center">
            <button type="button"><img src={GooglePlay} alt="googleplay" /></button>
            <button type="button"><img src={AppStore} alt="appstore" /></button>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="flex justify-center flex-col items-center gap-14">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-primary-black font-black text-3xl text-center">
              Pacotes
            </h1>
            <span className="text-center text-secundary-gray">
              Todas essas funcionalidades por apenas
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            {feature.map((item) => (
              <Packages
                key={item.id}
                icon={item.icon}
                base={item.base}
                price={item.price}
                funcs={item.text}
                btntext={item.btn}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-white lg:h-[600px] py-28 font-inter">
        <div className="flex justify-center flex-col py-20 items-center gap-14 lg:w-[50%] lg:h-[600px] m-auto bg-primary-indigo lg:rounded-lg lg:mt-30">
          <img src={background} alt="bg-img" className="hidden absolute w-[45%] lg:block" />
          <div className="flex justify-center">
            <h1 className="text-white font-black text-3xl text-center">
              Perguntas frequentes
            </h1>
          </div>
          <Accordion className="lg:w-[70%] gap-3 z-0 p-4">
            <Accordion.Item value="first" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                Posso gerar o histórico de vendas por meio do app ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e
                  você pode no momento que desejar imprimir o histórico,
                  facilitando a organização dos documentos necessários
                  para pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="second" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                Vendas nas plataformas são automaticamente inseridas no gerenciador ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e você pode no momento que desejar imprimir o histórico, facilitando a organização dos documentos necessários para pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="third" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                Posso utilizar o mesmo gerenciador em outras contas ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e você pode no momento que desejar imprimir o histórico, facilitando a organização dos documentos necessários para pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="four" className="rounded-md bg-white border-none">
              <Accordion.Control className="rounded-md px-6 font-medium">
                O plano grátis me garante acesso para sempre ?
                <div className="bg-primary-white rounded-full p-1">
                  <Accordion.Icon />
                </div>
              </Accordion.Control>
              <Accordion.Panel className="m-auto w-[95%]">
                <div className="border-t-[1px] pt-2">
                  Sim, nosso app gerencia as vendas mensais/anuais e você pode no momento que desejar imprimir o histórico, facilitando a organização dos documentos necessários para pagamentos de impostos, ou para seu controle pessoal.
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>

    </main>
  );
}

export default Home;
