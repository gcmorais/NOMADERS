import React, { useContext } from 'react';
import {
  BiMenu, BiSolidBarChartAlt2, BiSolidDoughnutChart, BiSolidWallet,
  BiSun,
} from 'react-icons/bi';
import { PiGearSixBold } from 'react-icons/pi';
import { IoIosNotifications, IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineDownload } from 'react-icons/ai';
import { MdOutlineWallet } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';
import AreaChart from '../../components/chart/areaChart';
import DonutChart from '../../components/chart/donutChart';

function Dashboard() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <section className="mt-2 lg:mt-0 rounded-lg bg-secundary-white dark:bg-secundary-blue w-full">
      <header className="flex justify-between items-center p-5">
        <div>
          <button type="button" className="text-2xl text-secundary-gray">
            <BiMenu />
          </button>
        </div>
        <div className="hidden sm:block">
          <form className="flex">
            <input className="lg:w-[300px] bg-white py-2 px-5 text-[12px] rounded-l-full dark:bg-primary-blue dark:text-white/80" placeholder="Pesquisar..." />
            <button type="submit" className="bg-white p-1 pr-3 rounded-r-full dark:bg-primary-blue dark:text-white">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="flex gap-3 lg:mb-2 text-[15px]">
          <button
            type="button"
            className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue"
            onClick={handleToggleTheme}
          >
            {theme === 'dark' ? <BiSun /> : <BsFillMoonStarsFill />}
          </button>
          <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue">
            <PiGearSixBold />
          </button>
          <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-primary-blue">
            <IoIosNotifications />
          </button>
        </div>
      </header>
      <main className="p-6">
        <header className="flex justify-between">
          <div>
            <h1 className="text-2xl uppercase font-inter font-semibold text-primary-black dark:text-white/80">Dashboard</h1>
            <p className="text-sm text-secundary-gray">Bem vindo ao seu dashboard</p>
          </div>
          <button type="button" className="flex items-center gap-2 bg-primary-indigo rounded-md text-white text-[13px] px-5 mt-2">
            <AiOutlineDownload />
            Download Reports
          </button>
        </header>
        <main>
          <div className="lg:flex justify-between mt-10 gap-[2px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="flex flex-col gap-3   lg:w-72 p-5 rounded-lg bg-white dark:bg-primary-blue">
                <header className="flex justify-between">
                  <h3 className="dark:text-white/70">Vendas Totais</h3>
                  <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-secundary-blue">
                    <BiSolidBarChartAlt2 />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium dark:text-white">
                    R$ 34,500
                  </h1>
                </main>
                <footer className="flex items-center gap-2 mt-2">
                  <span className="text-xl text-green-500">
                    <IoIosArrowDropupCircle />
                  </span>
                  <p className="text-primary-gray/80">
                    <strong className="text-green-500">4% </strong>
                    nas vendas totais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3  lg:w-72 p-5 rounded-lg bg-white dark:bg-primary-blue">
                <header className="flex justify-between">
                  <h3 className="dark:text-white/70">Vendas Mensais</h3>
                  <span className="text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-secundary-blue">
                    <BiSolidDoughnutChart />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium dark:text-white">
                    R$ 4,500
                  </h1>
                </main>
                <footer className="flex items-center gap-2 mt-2">
                  <span className="text-xl text-green-500">
                    <IoIosArrowDropupCircle />
                  </span>
                  <p className="text-primary-gray/80">
                    <strong className="text-green-500">7% </strong>
                    nas vendas mensais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3  lg:w-72 p-5 rounded-lg bg-white dark:bg-primary-blue">
                <header className="flex justify-between">
                  <h3 className="dark:text-white/70">Lucro total</h3>
                  <span type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-secundary-blue">
                    <BiSolidWallet />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium dark:text-white">
                    R$ 34,500
                  </h1>
                </main>
                <footer className="flex items-center gap-2 mt-2">
                  <span className="text-xl text-green-500">
                    <IoIosArrowDropupCircle />
                  </span>
                  <p className="text-primary-gray/80">
                    <strong className="text-green-500">4% </strong>
                    nos lucros totais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3  lg:w-72 p-5 rounded-lg bg-white dark:bg-primary-blue">
                <header className="flex justify-between">
                  <h3 className="dark:text-white/70">Lucro Mensal</h3>
                  <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg dark:bg-secundary-blue">
                    <MdOutlineWallet />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium dark:text-white">
                    R$ 34,500
                  </h1>
                </main>
                <footer className="flex items-center gap-2 mt-2">
                  <span className="text-xl text-red-500">
                    <IoIosArrowDropdownCircle />
                  </span>
                  <p className="text-primary-gray/80">
                    <strong className="text-red-500">4% </strong>
                    nos lucros mensais
                  </p>
                </footer>
              </div>
            </div>
            <div className="bg-white rounded-lg dark:bg-primary-blue w-[960px] mt-2 lg:mt-0">
              <header className="flex justify-between mb-10">
                <h3
                  className="dark:text-white/70 pt-5 pb-2 border-b-[1px]
                  border-secundary-purple/20 dark:border-secundary-purple/20 w-full
                  px-10"
                >
                  Lucros Mensais
                </h3>
              </header>
              <div className="text-black/80 dark:text-white px-6">
                <AreaChart />
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between mt-2 gap-2">
            <div className="bg-white rounded-lg lg:w-1/2 h-96 dark:bg-primary-blue">
              <header className="flex justify-between">
                <h3
                  className="dark:text-white/70 pt-5 pb-2 border-b-[1px]
                  border-secundary-purple/20 dark:border-secundary-purple/20 w-full
                  px-10"
                >
                  Resumo de vendas recentes
                </h3>
              </header>
            </div>
            <div className="bg-white rounded-lg dark:bg-primary-blue w-full lg:w-[978px] mt-2 lg:mt-0">
              <header className="flex justify-between mb-5">
                <h3
                  className="dark:text-white/70 pt-5 pb-2 border-b-[1px]
                  border-secundary-purple/20 dark:border-secundary-purple/20 w-full
                  px-10"
                >
                  Vendas por plataformas
                </h3>
              </header>
              <div className="text-black/80 dark:text-white px-6">
                <DonutChart />
              </div>
            </div>
          </div>
        </main>
      </main>
    </section>
  );
}

export default Dashboard;
