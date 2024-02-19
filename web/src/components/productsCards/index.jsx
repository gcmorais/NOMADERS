import React from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import PropTypes from "prop-types";

function ProductCards({
  platform,
  setDistance,
  preco,
  lucro,
  selectValue,
}) {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg bg-white p-5 dark:bg-primary-blue">
      <header className="flex justify-between">
        <select
          className="dark:text-white/70"
          onChange={(e) => setDistance({ selecionado: e.target.value })}
          value={selectValue}
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
          <p className="text-[11px] text-sm dark:text-white/50">
            Custos totais
          </p>
          <h1 className="text-2xl font-medium dark:text-white">R$ {preco}</h1>
        </div>
        <div>
          <p className="text-[11px] dark:text-white/50">Lucros totais</p>
          <h1
            className={`text-2xl font-medium md:pr-9 ${
              lucro > 0 ? "text-green-500" : "text-red-500"
            } ${lucro === 0 && "text-white"}`}
          >
            R$ {lucro}
          </h1>
        </div>
      </main>
    </div>
  );
}

export default ProductCards;

ProductCards.propTypes = {
  platform: PropTypes.node,
};
