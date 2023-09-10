import React from 'react';
import { AiFillWindows } from 'react-icons/ai';
import MainImage from '../../assets/image.svg';
import Stars from '../../assets/Vector.svg';
import Info from '../../components/info';

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
    </main>
  );
}

export default Home;
