import React from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import PropTypes from 'prop-types';

function ProductCards({ platform }) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-white dark:bg-primary-blue w-full">
      <header className="flex justify-between">
        <h3 className="dark:text-white/70">
          {platform}
        </h3>
        <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-secundary-blue">
          <BiSolidBarChartAlt2 />
        </span>
      </header>
      <main className="flex justify-between items-center">
        <div>
          <p className="dark:text-white/50 text-sm text-[11px]">Vendas</p>
          <h1 className="text-2xl font-medium dark:text-white">
            R$ 34,500
          </h1>
        </div>
        <div>
          <p className="dark:text-white/50 text-[11px]">Lucro</p>
          <h1 className="text-2xl font-medium dark:text-white md:pr-9">
            R$ 34,500
          </h1>
        </div>
      </main>
      <footer className="flex justify-between items-center gap-2 mt-2">
        <div className="flex gap-2">
          <span className="text-lg text-green-500">
            <IoIosArrowDropupCircle />
          </span>
          <p className="text-primary-gray/80 text-[13px]">
            <strong className="text-green-500">4% </strong>
            nas vendas totais
          </p>
        </div>
        <div className="flex gap-2">
          <span className="text-lg text-green-500">
            <IoIosArrowDropupCircle />
          </span>
          <p className="text-primary-gray/80 text-[13px]">
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
  platform: PropTypes.string.isRequired,
};
