import React, { useContext, useEffect, useState } from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoIosArrowDropupCircle } from "react-icons/io";
import PropTypes from "prop-types";
import { ApiContext } from "../../contexts/ApiContext";

function ProductCards({ platform }) {
  const { products } = useContext(ApiContext);

  const [distance, setDistance] = useState({
    selecionado: platform[0],
  });

  console.log(distance);

  let preco = 0;
  let lucro = 0;

  for (let i = 0; i < products.length; i++) {
    if (products[i].platform === distance.selecionado) {
      preco += Number(products[i].cost);
      lucro += products[i].saleprice - products[i].cost;
    }
  }

  return (
    <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-5 dark:bg-primary-blue">
      <header className="flex justify-between">
        <select
          className="dark:text-white/70"
          onChange={(e) => setDistance({ selecionado: e.target.value })}
        >
          {platform.map((item) => (
            <option key={item} value={item} className="text-black">
              {item}
            </option>
          ))}
        </select>
        <span className=" rounded-full bg-primary-white p-2 text-secundary-gray/80 drop-shadow-lg dark:bg-secundary-blue">
          <BiSolidBarChartAlt2 />
        </span>
      </header>
      <main className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-sm dark:text-white/50">Vendas</p>
          <h1 className="text-2xl font-medium dark:text-white">R$ {preco}</h1>
        </div>
        <div>
          <p className="text-[11px] dark:text-white/50">Lucro</p>
          <h1 className="text-2xl font-medium dark:text-white md:pr-9">
            R$ {lucro}
          </h1>
        </div>
      </main>
      <footer className="mt-2 flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <span className="text-lg text-green-500">
            <IoIosArrowDropupCircle />
          </span>
          <p className="text-[13px] text-primary-gray/80">
            <strong className="text-green-500">4% </strong>
            nas vendas totais
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-lg text-green-500">
            <IoIosArrowDropupCircle />
          </span>
          <p className="text-[13px] text-primary-gray/80">
            <strong className="text-green-500">4% </strong>
            nos lucros totais
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ProductCards;

ProductCards.propTypes = {
  platform: PropTypes.node,
};
