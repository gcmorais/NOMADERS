import React from 'react';
import { BiSolidBarChartAlt2, BiSolidDoughnutChart, BiSolidWallet } from 'react-icons/bi';
import { MdOutlineWallet } from 'react-icons/md';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import AreaChart from '../../components/chart/areaChart';
import DonutChart from '../../components/chart/donutChart';
import Table from '../../components/table';
import HeaderApp from '../../components/headerApp';
import HeaderSection from '../../components/headerSection';

function Dashboard() {
  return (
    <section className="mt-2 lg:mt-0 rounded-lg bg-secundary-white dark:bg-secundary-blue w-full">
      <HeaderApp />
      <main className="p-6 lg:2xl:p-6">
        <HeaderSection title="Dashboard" subtitle="Bem vindo ao seu dashboard" />
        <main>
          <div className="lg:flex lg:flex-col xl:flex-row justify-between mt-10 gap-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:w-[55%]">
              <div className="flex flex-col gap-3 p-5 rounded-lg bg-white dark:bg-primary-blue">
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
                  <p className="text-primary-gray/80 lg:text-sm 2xl:text-base">
                    <strong className="text-green-500">4% </strong>
                    nas vendas totais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3 p-5 rounded-lg bg-white dark:bg-primary-blue">
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
                  <p className="text-primary-gray/80 lg:text-sm 2xl:text-base">
                    <strong className="text-green-500">7% </strong>
                    nas vendas mensais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3 p-5 rounded-lg bg-white dark:bg-primary-blue">
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
                  <p className="text-primary-gray/80 lg:text-sm 2xl:text-base">
                    <strong className="text-green-500">4% </strong>
                    nos lucros totais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3 p-5 rounded-lg bg-white dark:bg-primary-blue">
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
                  <p className="text-primary-gray/80 lg:text-sm 2xl:text-base">
                    <strong className="text-red-500">4% </strong>
                    nos lucros mensais
                  </p>
                </footer>
              </div>
            </div>
            <div className="bg-white rounded-lg dark:bg-primary-blue w-full xl:w-[500px] 2xl:w-[960px] mt-2 lg:mt-0">
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
          <div className="lg:flex lg:flex-col xl:flex-row justify-between mt-2 gap-2">
            <div className="bg-white rounded-lg xl:w-[58%] h-96 dark:bg-primary-blue">
              <header className="flex justify-between">
                <h3
                  className="dark:text-white/70 pt-5 pb-2 border-b-[1px]
                  border-secundary-purple/20 dark:border-secundary-purple/20 w-full
                  px-10"
                >
                  Resumo de vendas recentes
                </h3>
              </header>
              <Table />
            </div>
            <div className="bg-white rounded-lg dark:bg-primary-blue w-full xl:w-[500px] 2xl:w-[650px] mt-2 lg:mt-0">
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
