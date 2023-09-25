import React from 'react';
import { AiFillWindows } from 'react-icons/ai';
import Framer from '../../components/framer';
import Info from '../../components/info';

function Overview() {
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
    <section id="overview" className="bg-primary-white py-28 font-inter">
      <Framer>
        <div className="flex justify-center flex-col items-center gap-14">
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="text-2xl text-primary-black font-black lg:text-3xl text-center">
              Por que você deveria nos escolher ?
            </h1>
            <span className="text-sm lg:text-lg w-[70%] text-center text-secundary-gray">
              Gerenciamos suas vendas de forma simples e eficaz. Sinta-se a
              vontade para testar um de nossos planos.
            </span>
          </div>
          <div className="flex justify-center text-center w-[80%] ">
            <div className="grid grid-cols-1 w-[100%] lg:grid-cols-3 lg:w-[70%]">
              {info.map((item) => (
                <Info
                  key={item.id}
                  title={item.title}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </Framer>
    </section>
  );
}

export default Overview;
