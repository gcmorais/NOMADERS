import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import Packages from "../packages";

function Pricing() {
  const basic = [
    {
      id: "1",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 1</p>,
    },
    {
      id: "2",
      icon: (
        <p className="text-secundary-gray text-2xl">
          <IoIosClose />
        </p>
      ),
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 2</p>,
    },
    {
      id: "3",
      icon: (
        <p className="text-secundary-gray text-2xl">
          <IoIosClose />
        </p>
      ),
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 3</p>,
    },
    {
      id: "4",
      icon: (
        <p className="text-secundary-gray text-2xl">
          <IoIosClose />
        </p>
      ),
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 4</p>,
    },
    {
      id: "5",
      icon: (
        <p className="text-secundary-gray text-2xl">
          <IoIosClose />
        </p>
      ),
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 5</p>,
    },
  ];
  const standard = [
    {
      id: "1",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 1</p>,
    },
    {
      id: "2",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 2</p>,
    },
    {
      id: "3",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 3</p>,
    },
    {
      id: "4",
      icon: (
        <p className="text-secundary-gray text-2xl">
          <IoIosClose />
        </p>
      ),
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 4</p>,
    },
    {
      id: "5",
      icon: (
        <p className="text-secundary-gray text-2xl">
          <IoIosClose />
        </p>
      ),
      text: <p className="text-secundary-gray opacity-50">Funcionalidade 5</p>,
    },
  ];
  const enterprise = [
    {
      id: "1",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 1</p>,
    },
    {
      id: "2",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 2</p>,
    },
    {
      id: "3",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 3</p>,
    },
    {
      id: "4",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 4</p>,
    },
    {
      id: "5",
      icon: (
        <p className="text-primary-indigo text-2xl">
          <BsCheck />
        </p>
      ),
      text: <p className="text-secundary-gray">Funcionalidade 5</p>,
    },
  ];
  const feature = [
    {
      id: "1",
      icon: <FaMoneyBillWave />,
      base: "Basic",
      price: "R$ 0,00",
      text: basic.map((item) => (
        <span className="flex items-center" key={item.id}>
          {item.icon}
          {item.text}
        </span>
      )),
      btn: "Iniciar plano grátis",
    },
    {
      id: "2",
      icon: <FaMoneyBillWave />,
      base: "Standard",
      price: "R$ 0,00",
      text: standard.map((item) => (
        <span className="flex items-center" key={item.id}>
          {item.icon}
          {item.text}
        </span>
      )),
      btn: "Em breve",
    },
    {
      id: "3",
      icon: <FaMoneyBillWave />,
      base: "Enterprise",
      price: "R$ 0,00",
      text: enterprise.map((item) => (
        <span className="flex items-center" key={item.id}>
          {item.icon}
          {item.text}
        </span>
      )),
      btn: "Em breve",
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center gap-14">
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
  );
}

export default Pricing;
