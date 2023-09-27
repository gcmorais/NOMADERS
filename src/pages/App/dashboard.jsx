import React from 'react';
import AreaChart from '../../components/chart/areaChart';
import DonutChart from '../../components/chart/donutChart';
import Table from '../../components/table';
import HeaderApp from '../../components/headerApp';
import HeaderSection from '../../components/headerSection';
import DashInfo from '../../components/dashInfo';

function Dashboard() {
  return (
    <section className="mt-2 lg:mt-0 rounded-lg bg-secundary-white dark:bg-secundary-blue w-full">
      <HeaderApp />
      <main className="p-6 lg:2xl:p-6">
        <HeaderSection
          title="Dashboard"
          subtitle="Bem vindo ao seu dashboard"
        />
        <main>
          <div className="lg:flex lg:flex-col xl:flex-row justify-between mt-10 gap-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:w-[55%]">
              <DashInfo headerText="Vendas Totais" mainValue="R$ 34,000" footerValue="5%" footerText="nas vendas totais" icon="green" />
              <DashInfo headerText="Vendas Mensais" mainValue="R$ 4,500" footerValue="7%" footerText="nas vendas mensais" icon="green" />
              <DashInfo headerText="Lucro Total" mainValue="R$ 34,500" footerValue="4%" footerText="nos lucros totais" icon="green" />
              <DashInfo headerText="Lucro Mensal" mainValue="R$ 7,500" footerValue="4%" footerText="nos lucros mensais" icon="red" />
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
            <Table />
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
              <div className="flex justify-center items-center  h-full text-black/80 dark:text-white pb-10 md:pb-20">
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
