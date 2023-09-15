import React from 'react';
import {
  BiMenu, BiSolidBarChartAlt2, BiSolidDoughnutChart, BiSolidWallet,
} from 'react-icons/bi';
import { PiGearSixBold } from 'react-icons/pi';
import { IoIosNotifications, IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineDownload } from 'react-icons/ai';
import { MdOutlineWallet } from 'react-icons/md';
import Chart from '../../assets/chart.svg';

function Dashboard() {
  return (
    <section className="w-full h-[98.5vh] rounded-lg bg-secundary-white">
      <header className="flex justify-between items-center p-5">
        <div>
          <button type="button" className="text-2xl text-secundary-gray">
            <BiMenu />
          </button>
        </div>
        <div>
          <form className="flex">
            <input className="w-[300px] bg-white py-2 px-5 text-[12px] rounded-l-full" placeholder="Pesquisar..." />
            <button type="submit" className="bg-white p-1 pr-3 rounded-r-full">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="flex gap-3 mb-2 text-[15px]">
          <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
            <BsFillMoonStarsFill />
          </button>
          <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
            <PiGearSixBold />
          </button>
          <button type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
            <IoIosNotifications />
          </button>
        </div>
      </header>
      <main className="p-6">
        <header className="flex justify-between">
          <div>
            <h1 className="text-2xl uppercase font-inter font-semibold text-primary-black">Dashboard</h1>
            <p className="text-sm text-secundary-gray">Bem vindo ao seu dashboard</p>
          </div>
          <button type="button" className="flex items-center gap-2 bg-primary-indigo rounded-md text-white text-[13px] px-5 mt-2">
            <AiOutlineDownload />
            Download Reports
          </button>
        </header>
        <main>
          <div className="flex justify-between mt-10 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-3 bg-white w-72 p-5 rounded-lg">
                <header className="flex justify-between">
                  <h3>Vendas Totais</h3>
                  <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
                    <BiSolidBarChartAlt2 />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium">R$ 34,500</h1>
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
              <div className="flex flex-col gap-3 bg-white w-72 p-5 rounded-lg">
                <header className="flex justify-between">
                  <h3>Vendas Mensais</h3>
                  <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
                    <BiSolidDoughnutChart />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium">R$ 4,500</h1>
                </main>
                <footer className="flex items-center gap-2 mt-2">
                  <span className="text-xl text-green-500">
                    <IoIosArrowDropupCircle />
                  </span>
                  <p className="text-primary-gray/80">
                    <strong className="text-green-500">7% </strong>
                    nas vendas totais
                  </p>
                </footer>
              </div>
              <div className="flex flex-col gap-3 bg-white w-72 p-5 rounded-lg">
                <header className="flex justify-between">
                  <h3>Lucro total</h3>
                  <span type="button" className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
                    <BiSolidWallet />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium">R$ 34,500</h1>
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
              <div className="flex flex-col gap-3 bg-white w-72 p-5 rounded-lg">
                <header className="flex justify-between">
                  <h3>Lucro Mensal</h3>
                  <span className=" text-secundary-gray/80 bg-primary-white rounded-full p-2 drop-shadow-lg">
                    <MdOutlineWallet />
                  </span>
                </header>
                <main>
                  <h1 className="text-3xl font-medium">R$ 34,500</h1>
                </main>
                <footer className="flex items-center gap-2 mt-2">
                  <span className="text-xl text-red-500">
                    <IoIosArrowDropdownCircle />
                  </span>
                  <p className="text-primary-gray/80">
                    <strong className="text-red-500">4% </strong>
                    nas vendas totais
                  </p>
                </footer>
              </div>
            </div>
            <div className="bg-white px-10 rounded-lg">
              <img src={Chart} alt="chart" />
            </div>
          </div>
          <div className="flex justify-between mt-2 gap-2">
            <div className="bg-white px-10 rounded-lg w-1/2 h-96">
              content
            </div>
            <div className="bg-white px-10 rounded-lg w-1/2">
              content
            </div>
          </div>
        </main>
      </main>
    </section>
  );
}

export default Dashboard;
